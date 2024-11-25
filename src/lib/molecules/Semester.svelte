<script>
  import Heading from "$lib/organisms/Heading.svelte";
  import SprintLink from "$lib/molecules/SprintLink.svelte";
  let { semester } = $props();
</script>

<section class="semester">
  <a href="/{semester.slug}"> <Heading title={`Semester`} subtitle={semester.title}/> </a>
  <ol>
    {#each semester.sprints as sprint, index}
      <SprintLink {semester} {sprint} nextSprint={index !== semester.sprints.length - 1? semester.sprints[index + 1]: false}/>
    {/each}
  </ol>
</section>

<style>
  section.semester {
    padding: 0;
    border: none;
    scroll-snap-align: start;
  }

  section.semester a {
    color: var(--blueberry);
    text-decoration: none;
    display: inline-block;
    margin: 0 0 0.5rem;
  }

  section.semester a:focus { color: var(--blueberry); }

  ol {
    list-style: none;
    padding: 0.5rem;
    width: 100%;
  }

  :global(section.semester h2) {
    line-height: 1.1;
    font-size: 1.25rem;
  }

  :global(section.semester h2 > span) {
    font-size: 0.6em;
    letter-spacing: 0;
    text-transform: uppercase;
  }

  @media (min-width: 960px) {
    section.semester > a {
      color: var(--blueberry);
      text-decoration: none;
      display: inline-block;
    }

    section.semester > a:focus { color: var(--blueberry); }

    ol {
      list-style: none;
      width: 85%;
    }
  }
</style>
