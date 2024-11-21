<script>
	import IconLink from '$lib/atoms/Link.svelte';
    
	/**
	 * @typedef {Object} Props
	 * @property {any} title
	 * @property {string} [subtitle]
	 */

	/** @type {Props} */
	let { title, subtitle = '' } = $props();

	let id = title
	  ? title.replace(/[^\w\s]/gi, '').replace(/\s+/g, '-').toLowerCase()
	  : '';
</script>

<h2>
	<a {id} href="#{id}" class="anchor" aria-hidden="true">
		<IconLink />
	</a>
	<span>
		{title}
	</span>
	{#if subtitle !== ''}
		<strong>{subtitle}</strong>
	{/if}
</h2>

<style>
	h2 {
		font-weight: bold;
		letter-spacing: -0.04em;
		margin: 0;
		font-weight: 600;
	}

	h2 a.anchor {
		display: none;
		position: absolute;
		margin-left: -0.6em;
	}

	h2:hover a.anchor { display: none; }

	h2 > strong {
		display: block;
		white-space: nowrap;
	}
</style>