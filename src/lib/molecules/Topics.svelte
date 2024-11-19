<script>
  import { longDate } from "$lib/utils/date.js";
  import IconCal from "$lib/atoms/Calendar.svelte";
  import IconTopic from "$lib/atoms/Topic.svelte";

  export let startdate;
  export let topics;
</script>

<aside>
  <h3>Topics</h3>
  <ul>
    <li class="blue-on-green rounded">
      {#if startdate}
        <IconCal date={longDate(startdate)} />
      {/if}
    </li>
    {#each topics as topic}
      <li class="blue-on-green rounded">
        <IconTopic {topic} />
      </li>
    {/each}
  </ul>
</aside>

<style>
  aside ul {
    margin: 0;
    display: flex;
    flex-wrap: wrap;
    column-gap: 0.5rem;
    row-gap: 0.1rem;
  }

  aside ul li {
    list-style: none;
    padding: 0.1rem 0.5rem;
    white-space: nowrap;
    font-size: 0.8rem;
    border-radius: 0.5rem;
    line-height: 1.5;
    display: flex;
    background: var(--white);
    border: 1px solid var(--turquoise);
    color: var(--blueberry);
  }

  .blue-on-green {
    background: var(--white);
    border: 1px solid var(--turquoise);
    color: var(--blueberry);
  }

  .rounded {
    border-radius: 0.5rem;
  }
</style>
