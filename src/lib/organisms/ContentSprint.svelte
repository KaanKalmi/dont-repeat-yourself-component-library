<script>
  import Heading from "$lib/organisms/Heading.svelte";
  import Topics from "$lib/molecules/Topics.svelte";

  export let title, sprintNumber, content, startdate, topics;
</script>

<section class="rounded">
  <Heading title="Sprint {sprintNumber}: {title}" />
  <Topics {startdate} {topics} />

  <div>
    {#if content}
      {@html content.html}
    {/if}
  </div>
</section>

<style>
  section {
    position: relative;
    height: 100%;
    width: 100%;
    background-color: var(--grey);
    color: black;
    border: 1px solid var(--turquoise);
    border-radius: var(--rounded);
    margin-left: var(--shadow);
    min-height: 18rem;
    max-width: 35em;
    padding: 1em;
  }

  section div {
    margin-top: 1.5rem;
  }

  :global(section p) {
    font-size: 1rem;
  }

  :global(blockquote) {
    font-size: 1rem;
  }
</style>
