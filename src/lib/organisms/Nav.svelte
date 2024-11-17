<script>
	import { page } from "$app/stores";

	let navItems = [
		{
			href: "/static-web/look-and-feel",
			title: "Sprint 4",
		},
		{
			href: "/workflow-tooling-frameworks/dont-repeat-yourself",
			title: "Sprint 16",
		},
	];

	import Logo from "$lib/atoms/HvaLogo.svelte";
</script>

<header>
	<div>
		<Logo />
		<p>Frontend Design & Development</p>
	</div>
	<a href="/" class="home-btn">FDND</a>
	<div>
		<nav>
			<ul>
				{#each navItems as item}
					<li>
						<a class:active={$page.url.pathname === item.href} href={item.href} target="_self" data-sveltekit-preload-data="hover"> {item.title} </a>
					</li>
				{/each}
			</ul>
		</nav>
	</div>
</header>

<style>
	@media (max-width: 750px) { nav ul { font-size: 0.75em; } }
	@media (min-width: 22em) { nav { font-size: 1rem; } }

	header {
		div {
			display: flex;
			max-width: var(--max-width);
			flex-wrap: nowrap;
			align-items: baseline;
			justify-content: flex-end;
		}

		div:first-of-type {
			justify-content: start;
			align-items: center;
			padding-bottom: 1em;
		}

		p {
			color: var(--blueberry);
			border-left: 1px solid var(--blueberry);
			padding: 0 1em;
			font-size: 1.2em;
			letter-spacing: -0.03em;
		}

		a {
			position: relative;
			z-index: 1;
			padding: 0.75rem;
			background-color: var(--white);
			border-radius: 10px;
			border: 1px solid var(--attention);
			color: var(--attention);
			font-weight: 700;
			text-decoration: none;
		}

		a::before {
			content: "";
			z-index: -10;
			position: absolute;
			width: 100%;
			height: 100%;
			border: 1px solid var(--attention);
			background-color: var(--grey);
			border-radius: 10px;
			color: var(--attention);
			right: 4px;
			top: 4px;
		}
	}

	nav::before {
		content: "";
		position: absolute;
		width: 1.5em;
		aspect-ratio: 1;
		left: -1.5em;
		border-radius: 0 0 50% 0;
		bottom: 0;
		box-shadow: 0.5em 0.5em 0 0 var(--grey);
	}

	nav {
		position: relative;
		font-size: .95rem;
		background-color: var(--grey);
		color: var(--blueberry);
		padding: 0.75em 0;
		border-radius: 15px 15px 0 0;

		ul {
			display: flex;
			font-weight: 500;
			padding: 0 3em;
			gap: 2em;

			li a:focus-visible, li a:hover {
				background-color: var(--call-to-action);
				right: 1px;
				top: 2px;
			}

			li a:focus-visible::before, li a:hover::before {
				background-color: #b1b073;
				right: 2px;
				top: 2px;
			}

			li a.active {
				background-color: var(--turquoise);
				color: var(--attention);
			}

			li a.active::before {
				background-color: #56ad93;
				color: var(--attention);
			}

			li a.active:hover, li a.active:focus-visible {
				background-color: var(--call-to-action);
				color: var(--attention);
			}
			li a.active:hover::before, li a.active:focus-visible::before {
				background-color: #b1b073;
				color: var(--attention);
			}
		}
	}

	.home-btn{
		margin-inline-start: 3em;
		font-size: 1.5em;
	}
</style>