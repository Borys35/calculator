<script>
  import CalculatorKeyboard from "./CalculatorKeyboard.svelte";
  import CalculatorOutput from "./CalculatorOutput.svelte";
</script>

<div class="grid">
  <CalculatorOutput />
  <CalculatorKeyboard />
</div>

<style>
  .grid {
    display: grid;
  }
</style>
