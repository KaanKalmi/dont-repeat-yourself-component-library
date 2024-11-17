<script>
	// Aggregate *.fdnd.nl names from github.com/fdnd
	import Logo from '$lib/atoms/HvaPayoff.svelte' 
</script>

<footer>
	<nav>
		<h2>Archief</h2>
		<p>
			Hier kun je het programma van voorgaande studiejaren bekijken. 
		</p>
		<ul>
			<li><a href="https://2223.programma.fdnd.nl">Programma 2022-2023</a></li>
			<li><a href="https://2324.programma.fdnd.nl">Programma 2023-2024</a></li>
		</ul>
	</nav>

	<nav>
		<h2>FDND Microsites</h2>
		<p>
			FDND maakt gebruik van microsites. 
			Microsites zijn kleine websites ter ondersteuning van een campagne, informatie over een product, dienst of voor een ander specifiek doel.
		</p>
		<ul>
			<li><a href="https://fdnd.nl">FDND.nl</a></li>
			<li><a href="https://contact.fdnd.nl">Contact en routebeschrijving</a></li>
			<li><a href="https://programma.fdnd.nl">Programma</a></li>
			<li><a href="https://partners.fdnd.nl">Partners</a></li>
			<li><a href="https://niveaumatrix.fdnd.nl">Niveaumatrix</a></li>
			<li><a href="https://docs.fdnd.nl">Documenten</a></li>
		</ul>
	</nav>
</footer>

<Logo />

<style>
	footer {
		display: flex;
		justify-content: center;
		font-size: 1rem;
		padding: 0 0 2rem 0;
	}

	h2 {
		margin: 0;
	}

	p {
		margin: 0 0 1em 0;
		max-width: 58ch;
	}

	ul {
		padding: 0;
		margin: 0;
		display: flex;
		flex-wrap: wrap;
		max-width: 30em;
	}

	ul li {
		padding: 0.7em 0.2em;
	}

	ul li a {
		position: relative;
		color: var(--blueberry);
		font-weight: 700;
		padding: 0.4em 0.6em;
		border: 1px solid var(--blueberry);
		border-radius: var(--rounded);
		text-decoration: none;
		background: var(--white);
	}

	li a:focus-visible, li a:hover {
		background-color: var(--call-to-action);
		right: 1px;
        top: 1px;
		transition: all .4s ease-out;
	}

	li a:focus-visible::before, li a:hover::before {
		background-color: #b1b073;
		right: 1px;
    	top: 1px;
	}
</style>
