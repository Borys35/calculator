<script lang="ts">
  import mexp from "math-expression-evaluator";
  import { onMount } from "svelte";
  import { operation } from "../../stores";

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
    if ($operation === "Infinity" || $operation === "NaN") $operation = "";

    if (value === "=") {
      $operation = mexp
        .eval($operation.replace("×", "*").replace("÷", "/"))
        .toString();
    } else if (value === "<") {
      if ($operation.endsWith(" ")) $operation = $operation.slice(0, -3);
      else $operation = $operation.slice(0, -1);
    } else if (value === "ce") {
      $operation = "";
    } else if (cannotRepeat.includes(value)) {
      for (const char of cannotRepeat)
        if (
          !$operation ||
          $operation.endsWith(`${char} `) ||
          $operation.endsWith(char)
        )
          return;
      $operation += operationKeys.includes(value) ? ` ${value} ` : value;
    } else {
      $operation += value;
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
    background: aqua;
    border: 0;
    outline: 0;
    font-weight: bold;
    text-transform: uppercase;
    font-size: 2rem;
    cursor: pointer;
  }
  .operation {
    background: gold;
  }
  .primary {
    background: red;
  }
</style>
