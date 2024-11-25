<script>
  import Heading from "$lib/organisms/Heading.svelte";
  import Topics from "$lib/molecules/Topics.svelte";
  let { title, sprintNumber, content, startdate, topics } = $props();
</script>

  <article>
    <Heading title="Sprint {sprintNumber}: {title}" />
    <div>
      {#if content}
        {@html content.html}
      {/if}
    </div>
    <Topics {startdate} {topics} />
  </article>

<style>
  article {
    position: relative;
    background-color: var(--white);
    color: black;
    width: fit-content;
    border: 2px solid var(--turquoise);
    border-radius: var(--rounded);
    box-shadow: -4px 4px var(--lavender);
    margin-left: var(--shadow);
    min-height: 18rem;
    max-width: 35em;
    padding: 1.25em;
  }

  article div { margin-top: 1.5rem; }
  :global(article p) { font-size: 1rem; }
  :global(blockquote) { font-size: 1rem; }
</style>
