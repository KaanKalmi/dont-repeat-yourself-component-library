<script>
  import Content from "$lib/organisms/ContentSprint.svelte";
  import Tasks from "$lib/organisms/Tasks.svelte";
  import Schedule from "$lib/organisms/Schedule.svelte";

  let { data } = $props();

  const { title, sprintNumber, startdate, content, weekPlans, topics, tasks } = data;
</script>

<div>
  <Content {title} {sprintNumber} {content} {startdate} {topics} />
  <Tasks {tasks} />
</div>

<Schedule {weekPlans} />

<style>
  div {
    display: flex;
    flex-direction: column;
    align-items: baseline;
    gap: 1.5rem;
    background-color: var(--grey);
    border-radius: var(--rounded) 0 0 0;
  }

  :global(section) { padding: 1rem; }

  :global(section h3) {
    font-size: 1.2em;
    margin-top: 3rem;
    font-weight: normal;
  }

  :global(section ul) {
    margin: 0;
    list-style: none !important;
  }

  :global(section ul li) { list-style: none !important; }

  @media (min-width: 40em) {
    div { flex-direction: row; }
  }
</style>
