<script lang="ts">
  import Calculator from "./lib/calculator/Calculator.svelte";
  import "./styles.css";
</script>

<main>
  <Calculator />
</main>

<style>
  :root {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
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
