<script>
  import CalculatorKeyboard from "./CalculatorKeyboard.svelte";
  import CalculatorOutput from "./CalculatorOutput.svelte";
</script>

<div class="container">
  <CalculatorOutput />
  <CalculatorKeyboard />
</div>

<style>
  .container {
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 1rem;
    padding: 1rem;
    background: grey;
  }

  @media (min-width: 768px) {
    .container {
      width: max(28rem, 35vw);
    }
  }
</style>
