<script lang="ts">
  import CalculatorButton from "./CalculatorButton.svelte";

  interface CalculatorButtonProps {
    value: string;
    columnSpan?: number;
    rowSpan?: number;
    variant?: "default" | "operation" | "primary";
    key?: string;
  }

  const buttons: CalculatorButtonProps[] = [
    { value: "ce", columnSpan: 2, key: "Escape" },
    { value: "<", key: "Backspace" },
    { value: "÷", variant: "operation", key: "/" },
    { value: "7" },
    { value: "8" },
    { value: "9" },
    { value: "×", variant: "operation", key: "*" },
    { value: "4" },
    { value: "5" },
    { value: "6" },
    { value: "-", variant: "operation" },
    { value: "1" },
    { value: "2" },
    { value: "3" },
    { value: "+", variant: "operation" },
    { value: "0", columnSpan: 2 },
    { value: "." },
    { value: "=", variant: "primary", key: "Enter" },
  ];
</script>

<div class="grid">
  {#each buttons as button}
    <CalculatorButton {...button} />
  {/each}
</div>

<style>
  .grid {
    padding: 1rem;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-auto-rows: 5rem;
    gap: 1rem;
  }
</style>
