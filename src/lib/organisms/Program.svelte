<script>
	import Heading from '$lib/organisms/Heading.svelte';

	export let title, content;
</script>

<section class="rounded col-span-2">
	<Heading {title} />
	{@html content.html}
</section>

<style>
	section {
		position: relative;
		background-color: var(--grey);
		color: var(--blueberry);
		border-radius: 15px 15px 0 0;
	}

    :global(section h2::selection, section p::selection) {
        background-color: var(--lavender);
        color: var(--lavender);
    }

	:global(section h2) {
		font-size: 2.25rem;
		padding: 3rem 0 0.5rem 3rem;
	}

	:global(section p) {
		padding: 0 3em;
		font-size: 1rem;
		margin: 0;
		max-width: 65ch;
		letter-spacing: -0.04em;
	}
</style>