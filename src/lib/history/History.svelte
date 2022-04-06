<script>
  import { history, output, prevOutput } from "../../stores";
  import HistoryItem from "./HistoryItem.svelte";

  let items;
  history.subscribe((h) => (items = h.reverse()));

  function deleteHistory() {
    $history = [];
  }
</script>

<div class="container">
  <div class="text-container">
    <h2>
      History {#if !items.length}
        is empty :(
      {/if}
    </h2>
    <span class="delete" on:click={deleteHistory}>Delete all</span>
  </div>
  {#each items as item, i}
    <HistoryItem
      {...item}
      index={i}
      on:click={() => {
        $prevOutput = item.prev;
        $output = item.output;
      }}
    />
  {/each}
</div>

<style>
  .container {
    flex: 1;
    align-self: stretch;
    background: rgba(var(--color-purple), 0.2);
    border: 1px solid rgba(var(--color-purple), 0.5);
    border-radius: 2rem;
    backdrop-filter: blur(10px);
    box-shadow: 0px 4px 2rem var(--color-shadow);
    padding: 2rem;

    display: flex;
    flex-direction: column;
    gap: 1rem;

    max-height: 100vh;
    overflow-y: auto;
  }
  .text-container {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
  }
  .delete {
    cursor: pointer;
    text-decoration: underline;
  }
</style>
