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
		position: relative;
		align-items: center;

		font-size: 1rem;
		border-radius: 10px;
		margin-top: 0.5em;
	}

	li a {
		margin: 0;
		padding: 0;
		font-size: 1rem;
		border-radius: 10px;
		transition: 0.1s ease-out background, 0.1s ease-out color;
		color: var(--blueberry);
	}

	li a span {
		display: flex;
		text-align: center;
		align-items: center;
		text-transform: uppercase;
		justify-content: center;

		width: 80px;
		aspect-ratio: 1;

		font-weight: 900;
		font-size: 0.7em;
		border-radius: 10px 10px 0 10px;

		background: white;
		border: 7px inset var(--lavender);
		box-sizing: border-box;
	}

	li a span::before {
		content: '';
		position: absolute;

		width: 1.1em;
		aspect-ratio: 1;
		left: 72px;
		top: 1px;

		border-radius: 0 0 50% 0;
		box-shadow: 0.5em 0.5em 0 0 var(--lavender);
		transform: rotateZ(90deg);
	}

	li a div {
		display: flex;
		flex-direction: column;
		align-self: end;

		width: 14em;
		background: var(--lavender);
		height: 60px;

		border-radius: 0 10px 10px 0;
		padding-left: .25em;
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
		font-size: 0.7em;
		background-color: transparent;
		color: inherit;
	}

	a::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		z-index: 1;
	}

	@media (min-width: 25em) {
		li a, li span { width: 82%; }
	}
</style>