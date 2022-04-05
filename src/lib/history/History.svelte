<script>
  import { history, output, prevOutput } from "../../stores";
  import HistoryItem from "./HistoryItem.svelte";

  let items;
  history.subscribe((h) => (items = h.reverse()));
</script>

<div>
  <h2>
    History {#if !items.length}
      is empty :(
    {/if}
  </h2>
  {#each items as item}
    <HistoryItem
      {...item}
      on:click={() => {
        $prevOutput = item.prev;
        $output = item.output;
      }}
    />
  {/each}
</div>

<style>
  div {
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
</style>
