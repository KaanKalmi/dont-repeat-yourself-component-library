<script>
	import { onMount } from 'svelte';
	import Heading from '$lib/organisms/Heading.svelte';

	export let tasks;

	onMount(() => {
		/* Firefox hack, :has() selector not supported */
		if (!CSS.supports('selector(html:has(body))')) {
			const subtasks = document.querySelector('.tasks li');
			const subtasksHeading = document.querySelector('.tasks h3.subtasks');
			if (subtasks) {
				subtasksHeading.style.display = 'block';
			}
		}
	});
</script>

{#if tasks && tasks.length > 0}
	<div>
		<section class="green-on-blue rounded tasks">
			<Heading title="Leertaken" />

			{#each tasks as task}
				{#if task.topic == 'task'}
					<p>
						<a href={task.url} data-sveltekit-prefetch>{task.name}</a>
						<small class="blue-on-green">{task.forkCount} forks</small>
					</p>
					<p>{task.description}</p>
				{/if}
			{/each}

			<h3 class="subtasks">Deeltaken</h3>
			{#each tasks as task}
				{#if task.topic == 'subtask'}
					<p>
						<a href={task.url} data-sveltekit-prefetch>{task.name}</a>
						<small class="blue-on-green">{task.forkCount} forks</small>
					</p>
					<p>{task.description}</p>
				{/if}
			{/each}
		</section>
	</div>
{/if}

<style>
	div{
		background-color: var(--grey);

		section {
			position: relative;
			background-color: var(--grey);
			border: 2px solid var(--turquoise);
			border-radius: var(--rounded);
			box-shadow: -4px 4px var(--lavender);
		}
		
		small { font-size: 0.7em; }

		section.tasks {
			max-width: 42rem;
			padding: 1rem;
		}

		section.tasks a {
			text-transform: capitalize;
			display: flex;
			flex-wrap: nowrap;
			justify-content: flex-start;
			align-items: center;
			white-space: nowrap;
			text-overflow: ellipsis;
			overflow: hidden;
		}

		section.tasks small {
			margin-left: 0.25rem;
			padding: 0 0.1rem;
			transform: translateY(-5px);
			white-space: nowrap;
		}
		
		section.tasks p {
			display: flex;
			align-items: flex-end;
			justify-content: space-between;
		}
	}

	@media (max-width: 750px) { section.tasks { width: 100%; } }

	section.tasks {
		border-width: 1px;
		border-style: solid;
		margin-left: var(--shadow);
	}

	section.tasks p:nth-of-type(2n) { margin-bottom: 1em; }

	:global(section.tasks *::selection) {
		background-color: var(--turquoise);
		color: var(--blueberry);
	}

	section.tasks::after {
		content: '';
		position: absolute;
		z-index: -1;
		top: var(--shadow);
		left: calc(var(--shadow) * -1);
		right: var(--shadow);
		bottom: calc(var(--shadow) * -1);
		border: 1px solid currentColor;
		border-radius: var(--rounded);
	}

	.tasks p { margin-top: 0.4em; }

	:global(section.tasks h3.subtasks) { display: none; }

	:global(section.tasks:has(p) h3), :global(section.show h3) { display: block !important; }

	@media (min-width: 60em) { section.tasks { min-width: 26rem; } }
</style>
