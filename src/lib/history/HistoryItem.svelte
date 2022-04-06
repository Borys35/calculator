<script lang="ts">
  import { createEventDispatcher } from "svelte";
  import { history } from "../../stores";

  export let output: string;
  export let prev: string;
  export let index: number;

  const dispatch = createEventDispatcher();

  function handleClick() {
    dispatch("click");
  }

  function deleteItem() {
    let items = [...$history];
    items.splice(index, 1);
    $history = items;
  }
</script>

<div on:click={handleClick} class="container">
  <span class="delete" on:click={deleteItem}>✖</span>
  <div class="text-container">
    <span class="prev-text">{prev}</span>
    <span class="output-text">{output}</span>
  </div>
</div>

<style>
  .container {
    display: flex;
    justify-content: space-between;

    background: rgba(var(--color-purple), 0.2);
    border: 1px solid rgba(var(--color-purple), 0.5);
    border-radius: 1rem;
    backdrop-filter: blur(10px);
    box-shadow: 0px 4px 2rem var(--color-shadow);
    padding: 0.75rem 1rem;
    font-weight: bold;
    text-align: right;
    cursor: pointer;
    transition: background 0.15s;
  }

  .container:hover {
    background: rgba(var(--color-purple), 0.4);
  }

  .text-container {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
  }

  .prev-text {
    color: var(--color-light-gray);
    font-size: 1.1rem;
  }

  .output-text {
    font-size: 1.5rem;
  }

  .delete {
    cursor: pointer;
  }
</style>
