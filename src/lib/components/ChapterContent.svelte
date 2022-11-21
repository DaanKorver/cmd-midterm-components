<script>
	import ChapterText from './ChapterText.svelte';
	import ChapterTitle from './ChapterTitle.svelte';
</script>

<section>
	<ChapterTitle number="1.1" title="Humanity-centered digital designers" />
	<ChapterText>
		CMD Amsterdam leidt studenten op tot (junior) Humanity-centred ontwerpers van digitale,
		interactieve producten (zie ook visie CMD Amsterdam). Iedere student krijgt een stevige basis
		van techniek, interactie-ontwerp en vormgeving. Daarnaast brengen ze de context in kaart en
		kunnen ze ontwerpuitdagingen bevragen en helder verwoorden. Afhankelijk van interesse en ambitie
		verbreden of verdiepen studenten deze basiskennis en -vaardigheden.
	</ChapterText>
</section>

<style>
	section {
		margin: 3rem 0;
	}
	@media (min-width: 81rem) {
		section {
			display: grid;
			grid-gap: 3rem;
			grid-template-columns: 15rem auto;
		}
	}
</style>
