<script>
  import Heading from "$lib/organisms/Heading.svelte";
  let { tasks } = $props();
  console.log(tasks);
</script>

{#if tasks && tasks.length > 0}
  <section>
    <Heading title="Leertaken" />
    {#each tasks as task}
      {#if task.topic == "task"}
        <p>
          <a href={task.url} data-sveltekit-prefetch>{task.name}</a>
          <small>{task.forkCount} forks</small>
        </p>
        <p>{task.description}</p>
      {/if}
    {/each}

    <Heading title="Deeltaken"/>
    {#each tasks as task}
      {#if task.topic == "subtask"}
        <p>
          <a href={task.url} data-sveltekit-prefetch>{task.name}</a>
          <small>{task.forkCount} forks</small>
        </p>
        <p>{task.description}</p>
      {/if}
    {/each}
  </section>
{/if}

<style>
  section {
    position: relative;
    height: 100%;
    width: 87%;
    background-color: var(--white);
    color: black;
    border: 2px solid var(--turquoise);
    border-radius: var(--rounded);
    box-shadow: -4px 4px var(--lavender);
    min-height: 18rem;
    max-width: 35em;
    padding: 1.25em 1.25em 0;

    p {
      display: flex;
      align-items: flex-end;
      justify-content: space-between;
      margin-top: 0.4em;

      a {
        text-transform: capitalize;
        display: flex;
        flex-wrap: nowrap;
        justify-content: flex-start;
        align-items: center;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
      }

      small {
        font-size: 0.7em;
        margin-left: 0.25rem;
        padding: 0 0.1rem;
        transform: translateY(-5px);
        white-space: nowrap;
      }
    }
  }

</style>
