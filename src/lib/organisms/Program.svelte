<script>
  import Heading from "$lib/organisms/Heading.svelte";

  let { title, content } = $props();
</script>

<section>
  <div>
    <Heading {title} />
    {@html content.html}
  </div>
</section>

<style>
  section {
    position: relative;
    background-color: var(--grey);
    color: var(--blueberry);
    border-radius: 15px 0 0 0;
    padding: 3rem 1.25rem 2rem;

    div {
      padding: 1.25em;
      border: 2px solid var(--turquoise);
      border-radius: var(--rounded);
      box-shadow: -4px 4px var(--lavender);
    }
  }

  :global(section h2::selection, section p::selection) {
    background-color: var(--lavender);
    color: var(--lavender);
  }

  :global(section h2) {
    font-size: 2.25rem;
    padding: 0.25em;
    padding-left: 1rem;
  }

  :global(section p) {
    padding: 0 0.75em;
    font-size: 1rem;
    margin: 0;
    max-width: 65ch;
    letter-spacing: -0.04em;
  }
  @media (601px <= width) {
    div {
      width: max-content;
    }
  }
</style>
