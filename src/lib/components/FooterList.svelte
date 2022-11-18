<section class="section__wrapper">
	<section>
		<a href="/">1.0 Beoogde leerresultaten</a>
		<ul>
			<li>1.01 Humanity-centered digital designers</li>
			<li>1.02 Competenties</li>
			<li>1.03 Werkveld en maatschappij</li>
			<li>1.04 Ontwikkelingen</li>
			<li>1.05 Ambities en dilemma’s</li>
		</ul>
	</section>
	<section>
		<a href="/">2.0 Onderwijsleeromgeving</a>
		<ul>
			<li>2.01 Onderwijsvisie en didactiek</li>
			<li>2.02 Curriculumopbouw</li>
			<li>2.03 Borging onderwijskwaliteit</li>
			<li>2.04 Onderwijs en praktijk</li>
			<li>2.05 Onderwijs en onderzoek</li>
			<li>2.06 Internationalisering</li>
			<li>2.07 Studenten begeleiding</li>
			<li>2.08 Digitale en analoge voorzieningen</li>
			<li>2.09 Ambities en dilemma's</li>
		</ul>
	</section>
	<section>
		<a href="/">3.0 Toetsing</a>
		<ul>
			<li>3.01 Toetsbeleid en -plan</li>
			<li>3.02 Toetsprogramma en -praktijk</li>
			<li>3.03 Toetsing en feedback</li>
			<li>3.04 Borging en kwaliteit</li>
			<li>3.05 Ambities en dilemma's</li>
		</ul>
	</section>
	<section>
		<a href="/">4.0 Gerealiseerde leerresultaten</a>
		<ul>
			<li>4.01 Afstudeerproces</li>
			<li>4.02 Borging afstudeerniveau vanuit examencommissie</li>
			<li>4.03 Ambities en dilemma's</li>
		</ul>
	</section>
</section>

<style>
    *{
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
    ul{
        padding: 0;
    }
    li {
		list-style: none;
        margin-bottom: .5em;
	}
</style>
