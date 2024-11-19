<script>
  import Heading from "$lib/organisms/Heading.svelte";
  import { prettyDate } from "$lib/utils/date";

  export let semester, sprint, nextSprint;
  const today = new Date();
  const sprintDate = new Date(sprint.startdate);
  let nextSprintDate = false;
  if (nextSprint) {
    nextSprintDate = new Date(nextSprint.startdate);
  }

  let active = today >= sprintDate;
  let past = false;
  if (nextSprintDate && active) {
    active = today < nextSprintDate;
    past = today > nextSprintDate;
  }
</script>

{#if sprint.sprintNumber}
  <li class:active class:past>
    <a data-sveltekit-prefetch href="{semester.slug}/{sprint.slug}">
      <span class:past>{sprint.sprintNumber}</span>
      <div>
        <strong>{sprint.title}</strong>
        <time class="rounded blue-on-green">
          {#if sprint.startdate}
            {prettyDate(sprint.startdate)}
          {/if}
        </time>
      </div>
    </a>
  </li>
{:else}
  <li class="extra" class:active class:past>
    <span>{sprint.title}</span>
    <time class="rounded blue-on-green">
      {#if sprint.startdate}
        {prettyDate(sprint.startdate)}
      {/if}
    </time>
  </li>
{/if}

<style>
  a:focus {
    background-color: transparent;
  }

  li {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    font-size: 1.5rem;
    border: 4px solid var(--lavender);
    border-radius: 10px;
    margin-top: 0.6em;
    background: var(--white);
    height: 65px;
  }

  li a {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: black;
    font-size: 1rem;
    border-radius: 10px;
    position: relative;
    height: 100%;
  }

  li a span {
    display: flex;
    align-items: center;
    justify-content: center;
    text-transform: uppercase;
    font-weight: 800;
    font-size: 1.2em;
    width: 60px;
    height: 100%;
    margin-right: 0.5em;
    border-radius: 10px;
    background: var(--white);
    color: var(--lavender);
    box-shadow: white 5px 0px 7px;
    border: 4px solid var(--turquoise);
  }

  li a div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: calc(100% - 70px);
    height: 100%;
    border-radius: 10px;
    padding-left: 0.5em;
  }

  :global(li.past) {
    opacity: 0.4;
  }

  :global(li.past strong) {
    font-weight: 500;
    text-decoration: line-through;
  }

  :global(li.past time) {
    text-decoration: line-through;
  }

  li a,
  li > span {
    display: flex;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    text-decoration: none;
  }

  li.extra {
    display: none;
    padding: 0.25em 0.1em;
    border-radius: 0.5rem;
    height: 2em;
    border: none;
  }

  li.extra span {
    font-size: 0.6em;
    font-weight: 500;
    line-height: 1.2;
    margin-left: 1em;
    text-transform: uppercase;
  }

  li.extra time {
    color: inherit;
  }

  :global(body.expand) li.extra {
    display: flex;
  }

  time {
    border: 0 solid;
    font-size: 0.7em;
    font-weight: 600;
    background-color: transparent;
    color: inherit;
    margin-right: 1em;
  }

  @media (min-width: 25em) {
    li a,
    li span {
      width: 82%;
    }
  }
</style>
