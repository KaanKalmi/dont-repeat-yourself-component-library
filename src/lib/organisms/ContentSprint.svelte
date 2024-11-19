<script>
  import Heading from "$lib/organisms/Heading.svelte";
  import Topics from "$lib/molecules/Topics.svelte";

  export let title, sprintNumber, content, startdate, topics;
</script>

<section>
<article>
  <Heading title="Sprint {sprintNumber}: {title}" />
  <Topics {startdate} {topics} />

  <div>
    {#if content}
      {@html content.html}
    {/if}
  </div>
</article>
</section>

<style>
  section{
    background-color: var(--grey);
    width: 100%;
    border-radius: 15px 0 0 0;
    
    article {
      position: relative;
      height: 100%;
      width: 100%;
      background-color: var(--grey);
      color: black;
      width: max-content;
      border: 2px solid var(--turquoise);
      border-radius: var(--rounded);
      box-shadow: -4px 4px var(--lavender);
      margin-left: var(--shadow);
      min-height: 18rem;
      max-width: 35em;
      padding: 1em;
    }
  }

  article div {
      margin-top: 1.5rem;
    }

  :global(article p) {
    font-size: 1rem;
  }

  :global(blockquote) {
    font-size: 1rem;
  }
</style>
