<section class="section__wrapper">
	<section>
		<a href="/">1.0 Beoogde leerresultaten</a>
		<ul>
			<li><slot /></li>
		</ul>
	</section>
	<section>
		<a href="/">2.0 Onderwijsleeromgeving</a>
		<ul>
			<li><slot /></li>
		</ul>
	</section>
	<section>
		<a href="/">3.0 Toetsing</a>
		<ul>
			<li><slot /></li>
		</ul>
	</section>
	<section>
		<a href="/">4.0 Gerealiseerde leerresultaten</a>
		<ul>
			<li><slot /></li>
		</ul>
	</section>
</section>

<style>
	* {
		font-family: 'Open Sans', sans-serif;
	}

	/* Styling standardSecrion component*/
	section {
		background-color: white;
	}
	.section__wrapper {
		max-width: 85rem;
		display: flex;
		flex-direction: column;
		gap: 1rem;
		margin: 0em 2.5em;
		margin: 0 auto;
		padding: 1rem;
		width: 90%;
	}

	@media (min-width: 60rem) {
		.section__wrapper {
			flex-direction: row;
			gap: 2em;
		}
	}

	/* Styling standard component*/
	section {
		display: flex;
		flex-direction: column;
		padding-bottom: 2.5em;
	}

	section a {
		font-size: 1.2rem;
		font-weight: bold;
		transition: 0.1s ease-in-out;
		padding-top: 1.5em;
		padding-bottom: 0.5em;
		background: linear-gradient(to right, rgba(255, 240, 33), rgba(255, 240, 33)),
			linear-gradient(to right, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5));
		background-size: 100% 3px, 0 3px;
		background-position: 100% 100%, 0 100%;
		background-repeat: no-repeat;
		transition: background-size 400ms;
	}

	section a:hover {
		background-size: 0 3px, 100% 3px;
	}

	@media (min-width: 60rem) {
		section {
			width: 100%;
		}
	}

	/* Styling standardChapter component*/
	ul {
		padding: 0;
	}
	li {
		list-style: none;
		margin-bottom: 0.5em;
	}
</style>
