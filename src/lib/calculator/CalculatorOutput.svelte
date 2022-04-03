<script lang="ts">
  import { afterUpdate } from "svelte";
  import { operation } from "../../stores";

  let output: HTMLDivElement;
  let outputText: HTMLSpanElement;

  afterUpdate(() => {
    output.scrollLeft = outputText.scrollWidth;
  });
</script>

<div class="output" bind:this={output}>
  <span class="text" bind:this={outputText}>{$operation}</span>
</div>

<style>
  .output {
    font-size: 3rem;
    background: tomato;
    font-weight: bold;
    overflow-x: scroll;

    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
  }

  /* Hide scrollbar for Chrome, Safari and Opera */
  .output::-webkit-scrollbar {
    display: none;
  }

  .text {
    display: block;
    white-space: nowrap;
    padding: 0 0.5em;
    text-align: right;
    height: 2em;
    line-height: 2em;
    width: fit-content;
    min-width: 100%;
  }
</style>
