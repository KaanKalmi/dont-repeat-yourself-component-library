<script>
	import Content from '$lib/organisms/ContentSprint.svelte';
	import Tasks from '$lib/organisms/Tasks.svelte';
	import Schedule from '$lib/organisms/Schedule.svelte';

	export let data;

	const {title, sprintNumber, startdate, content, weekPlans, topics, tasks } = data
</script>

<div>
	<Content {title} {sprintNumber} {content} {startdate} {topics} />
</div>

<Tasks {tasks} />
<Schedule {weekPlans} />

<style>
	div {
		display: flex;
		flex-direction: column;
		gap: 1.5rem;
	}

	:global(section) {
		padding: 1rem;
	}

	:global(section h3) {
		font-size: 1.2em;
		margin-top: 3rem;
		font-weight: normal;
	}

	:global(section ul) {
		margin: 0;
		list-style: none !important;
	}

	:global(section ul li) {
		list-style: none !important;
	}

	@media (min-width: 40em) {
		div {
			flex-direction: row;
			align-items: stretch;
		}
	}
</style>
