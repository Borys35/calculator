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
    background: rgba(var(--color-blue), 0.2);
    border: 1px solid rgba(var(--color-blue), 0.5);
    border-radius: 2rem;
    backdrop-filter: blur(10px);
    box-shadow: 0px 4px 2rem var(--color-shadow);
  }

  @media (min-width: 640px) {
    .container {
      width: max(28rem, 35vw);
    }
  }
</style>
