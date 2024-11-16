<script>
	import Nav from '$lib/organisms/Nav.svelte';
	import Footer from '$lib/organisms/Footer.svelte';
</script>

<svelte:head>
	<title>Frontend Design & Development | Programma</title>
</svelte:head>

<Nav />

<main>
	<slot />
</main>

<Footer />

<style>
	:global(body) {
		margin: 0 .75em;
	}

	:global(body), :global(body main) {
		display: block;
		background-color: var(--lavender);
	}

	:global(main) {
		max-width: var(--max-width);
		margin: auto;
	}

	:global(footer) {
		margin: auto;
		margin-top: 1rem;
		max-width: var(--max-width);
	}

	:global(footer nav) {
		padding: 1rem;
	}

	:global(footer nav h2) {
		margin: calc(-1rem - 1px) calc(-1rem - 1px) 1rem 2rem;
	}

	:global(footer nav p), :global(footer nav ul) {
		margin-left: .5rem;
	}
</style>