<script lang="ts">
  import { afterUpdate } from "svelte";
  import { output, prevOutput } from "../../stores";

  let outputElem: HTMLDivElement;
  let outputText: HTMLSpanElement;

  afterUpdate(() => {
    outputElem.scrollLeft = outputText.scrollWidth;
  });
</script>

<div class="output" bind:this={outputElem}>
  {#if $prevOutput}
    <span class="prev-text">{$prevOutput}</span>
  {/if}
  <span class="output-text" class:active={$output} bind:this={outputText}
    >{$output || 0}</span
  >
</div>

<style>
  .output {
    font-weight: bold;
    overflow-x: scroll;
    border-radius: 2rem 2rem 0 0;
    background: var(--gradient-accent);
    display: flex;
    flex-direction: column;
    padding: 1.5rem 2rem;
    gap: 0.25rem;
    align-items: flex-end;
    white-space: nowrap;

    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
  }

  /* Hide scrollbar for Chrome, Safari and Opera */
  .output::-webkit-scrollbar {
    display: none;
  }

  .output-text {
    font-size: 2rem;
    color: var(--color-light-gray);
  }

  .output-text.active {
    color: var(--color-white);
  }

  .prev-text {
    color: var(--color-light-gray);
    font-size: 1.25rem;
  }
</style>
