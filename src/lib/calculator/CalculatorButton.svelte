<script lang="ts">
  import mexp from "math-expression-evaluator";
  import { onMount } from "svelte";
  import { history, output, prevOutput } from "../../stores";

  export let value: string;
  export let columnSpan: number = 1;
  export let rowSpan: number = 1;
  export let variant: "default" | "operation" | "primary" = "default";
  export let key: string | null = null;

  onMount(() => {
    window.addEventListener("keydown", (e) => {
      e.preventDefault();
      if ((key && e.key !== key) || (!key && e.key !== value)) return;

      pressKey();
    });
  });

  const cannotRepeat = ["×", "÷", "+", "-", "."];
  const operationKeys = cannotRepeat.flatMap((char) => {
    if (char === ".") return [];
    return [char];
  });

  function pressKey() {
    if ($output === "Infinity" || $output === "NaN") $output = "";
    $prevOutput = "";

    if (value === "=") {
      const prev = $output;
      $output = mexp
        .eval($output.replace("×", "*").replace("÷", "/"))
        .toString();
      $prevOutput = prev;

      $history = [...$history, { prev, output: $output }];
    } else if (value === "<") {
      if ($output.endsWith(" ")) $output = $output.slice(0, -3);
      else $output = $output.slice(0, -1);
    } else if (value === "ce") {
      $output = "";
    } else if (cannotRepeat.includes(value)) {
      for (const char of cannotRepeat)
        if (!$output || $output.endsWith(`${char} `) || $output.endsWith(char))
          return;
      $output += operationKeys.includes(value) ? ` ${value} ` : value;
    } else {
      $output += value;
    }
  }
</script>

<button
  style={`grid-column-end: span ${columnSpan}; grid-row-end: span ${rowSpan}`}
  class="button"
  class:operation={variant === "operation"}
  class:primary={variant === "primary"}
  on:click={pressKey}
>
  {value}
</button>

<style>
  .button {
    background: rgba(var(--color-blue), 0.2);
    border: 1px solid rgba(var(--color-blue), 0.5);
    border-radius: 1rem;
    backdrop-filter: blur(10px);
    box-shadow: 0px 4px 2rem var(--color-shadow);
    outline: 0;
    font-weight: bold;
    text-transform: uppercase;
    font-size: 2rem;
    cursor: pointer;
    color: inherit;
    transition: background 0.15s;
  }
  .operation {
    background: rgba(var(--color-purple), 0.2);
  }
  .primary {
    background: rgba(var(--color-orange), 0.2);
  }
  .button:hover {
    background: rgba(var(--color-blue), 0.4);
  }
  .operation:hover {
    background: rgba(var(--color-purple), 0.4);
  }
  .primary:hover {
    background: rgba(var(--color-orange), 0.4);
  }
</style>
