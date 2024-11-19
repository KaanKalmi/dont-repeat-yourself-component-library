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
	<div><Logo /> | Frontend Design & Development</div>
	<nav>
		<a href="/" class="home-btn">FDND</a>

		<ul>
			{#each navItems as item}
				<li>
					<a class:active={$page.url.pathname === item.href} href={item.href} target="_self"> {item.title} </a>
				</li>
			{/each}
		</ul>
	</nav>
</header>

<style>
	header {
		height: 15vh;
		padding-top: .5em;

		div {
			display: flex;
			align-items: center;
			width: 100%;
			height: 2.25em;
			font-size: 0.95em;
		}

		nav {
			display: flex;
			justify-content: right;
			align-items: baseline;
			background-color: var(--lavender);
			font-weight: 600;
			
			.home-btn {
				text-decoration: none;
				color: var(--blueberry);
				background-color: var(--white);
				margin-right: 1em;
				padding: 0.25em 1em;
				border: 2px solid var(--turquoise);
				border-radius: var(--rounded);
			}


			ul::before {
				content: "";
				position: absolute;
				width: 1.5em;
				aspect-ratio: 1;
				left: -1.5em;
				border-radius: 0 0 50% 0;
				bottom: 0;
				box-shadow: 0.5em 0.5em 0 0 var(--grey);
			}

			ul {
				position: relative;
				display: flex;
				background-color: var(--grey);
				padding: 1.25em 1em;
				border-radius: 15px 15px 0 0;
				gap: .5em;

				li {
					a {
						text-decoration: none;
						color: var(--blueberry);
						padding: 0.25em .5em;
						border: 2px solid var(--turquoise);
						border-radius: var(--rounded);
						box-shadow: -4px 4px var(--lavender);
					}

					a:focus-visible, a:hover { background-color: var(--turquoise); }

					a.active, a.active:focus-visible, a.active:hover {
						background-color: var(--turquoise);
						color: var(--blueberry);
					}
				}
			}
		}
	}

	@media (375px <= width <= 385px) {header {height: 16.5vh;}}
	@media (386px <= width <= 399px) {header {height: 13vh;}}
	@media (400px <= width <= 430px) {header {height: 12vh;}}
	@media (430px <= width <= 600px) {header {height: 12vh;}}
	@media (601px <= width <= 768px) {header {height: 10.7vh;}}
	@media (769px <= width <= 820px) {header {height: 9.5vh;}}
	@media (821px <= width <= 1024px) {header {height: 8.15vh;}}
	@media (1025px <= width) {
		header {
			height: 10.85vh;

			div { font-size: 1em; }

			nav {

				.home-btn {
					margin-right: 2em;
					padding: 0.5em 1.25em;
				}

				ul {
					padding: 1.25em 2.25em;
					border-radius: 15px 15px 0 0;
					gap: 2em;

					a { padding: 0.5em 1.25em; }
				}
			}
		}
	}
</style>
