<script lang="ts">
  import CalculatorButton from "./CalculatorButton.svelte";

  interface CalculatorButtonProps {
    value: string;
    columnSpan?: number;
    rowSpan?: number;
    variant?: "default" | "operation" | "primary";
  }

  const buttons: CalculatorButtonProps[] = [
    { value: "ce", columnSpan: 2 },
    { value: "<" },
    { value: "/", variant: "operation" },
    { value: "9" },
    { value: "8" },
    { value: "7" },
    { value: "x", variant: "operation" },
    { value: "6" },
    { value: "5" },
    { value: "4" },
    { value: "-", variant: "operation" },
    { value: "3" },
    { value: "2" },
    { value: "1" },
    { value: "+", variant: "operation" },
    { value: "0", columnSpan: 2 },
    { value: "." },
    { value: "=", variant: "primary" },
  ];
</script>

<div class="grid">
  {#each buttons as button}
    <CalculatorButton {...button} />
  {/each}
</div>

<style>
  .grid {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-auto-rows: 4rem;
    gap: 0.5rem;
  }
</style>
