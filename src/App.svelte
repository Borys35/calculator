<script lang="ts">
  import Calculator from "./lib/calculator/Calculator.svelte";
  import History from "./lib/history/History.svelte";
  import "./styles.css";
</script>

<main>
  <h1>Calculator</h1>
  <div>
    <Calculator />
    <History />
  </div>
  <footer>
    &copy; 2022-{new Date().getFullYear()}
    <a href="https://github.com/Borys35" target="_blank">Borys Kaczmarek</a>
  </footer>
</main>

<style>
  :root {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  }

  main {
    min-height: 100vh;
    padding: 1rem 2rem;
    display: flex;
    flex-direction: column;
    gap: 3rem;
    max-width: 1440px;
    margin: 0 auto;
  }

  div {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 4rem;
  }

  @media (min-width: 640px) {
    main {
      padding: 2rem 4rem;
    }

    div {
      flex-direction: row;
      align-items: flex-start;
    }
  }
</style>
