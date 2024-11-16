<script>
    import Heading from '$lib/organisms/Heading.svelte';
    import { prettyDate } from '$lib/utils/date';

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
            <span>Sprint<br>{sprint.sprintNumber}</span>
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
    a:focus { background-color: transparent; }

    li {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        font-size: 1rem;
        border-radius: 10px;
        margin-top: 0.5em;
        background: var(--lavender);
        padding: 0.5em;
    }

    li a {
        display: flex;
        align-items: center;
        text-decoration: none;
        color: var(--blueberry);
        font-size: 1rem;
        border-radius: 10px;
        transition: 0.1s ease-out background, 0.1s ease-out color;
        position: relative;
    }

    li a span {
        display: flex;
        align-items: center;
        justify-content: center;
        text-transform: uppercase;
        font-weight: 900;
        font-size: 0.7em;
        width: 50px;
        height: 50px;
        border-radius: 10px;
        background: white;
        border: 5px inset var(--lavender);
        box-sizing: border-box;
        margin-right: 0.5em;
    }

    li a div {
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 8em;
        height: 50px;
        background: var(--lavender);
        border-radius: 10px;
        padding-left: 0.25em;
    }

    :global(li.past) { opacity: 0.6; }

    :global(li.past strong) { font-weight: 500; text-decoration: line-through; }

    :global(li.past time) { text-decoration: line-through; }

    li a, li > span {
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
    }

    li.extra span {
        font-size: 0.7em;
        line-height: 1.2;
        text-transform: uppercase;
    }

    li.extra time { color: inherit; }

    :global(body.expand) li.extra { display: flex; }

    time {
        border: 0 solid;
        padding: 0 0.25rem;
        font-size: 1em;
        background-color: transparent;
        color: inherit;
    }

    @media (min-width: 25em) {
        li a, li span { width: 82%; }
    }
</style>