<script>
	import Nav from '$lib/components/Nav.svelte';
	import Footer from '$lib/components/Footer.svelte';
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
</style>