<script lang="ts">
  import Calculator from "./lib/calculator/Calculator.svelte";
</script>

<main>
  <Calculator />
</main>

<style>
  :root {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  :global(body) {
    margin: 0;
    padding: 0;
  }

  main {
    padding: 2rem;
  }

  @media (min-width: 768px) {
    main {
      padding: 3rem 6rem;
    }
  }
</style>
