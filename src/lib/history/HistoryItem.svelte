<script lang="ts">
  import { createEventDispatcher } from "svelte";

  export let output: string;
  export let prev: string;

  const dispatch = createEventDispatcher();

  function handleClick() {
    dispatch("click");
  }
</script>

<div on:click={handleClick}>
  <span class="prev-text">{prev}</span>
  <span class="output-text">{output}</span>
</div>

<style>
  div {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;

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

  div:hover {
    background: rgba(var(--color-purple), 0.4);
  }

  .prev-text {
    color: var(--color-light-gray);
    font-size: 1.1rem;
  }

  .output-text {
    font-size: 1.5rem;
  }
</style>
