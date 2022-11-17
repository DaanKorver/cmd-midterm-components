<script>
	import ChapterText from './ChapterText.svelte';
	import ChapterTitle from './ChapterTitle.svelte';
</script>

<section>
	<ChapterTitle number="1.1" title="Humanity-centered digital designers" />
	<ChapterText />
</section>

<style>
	section {
		padding: 1rem;
		grid-template-columns: 0.3fr 1.1fr;
		font-family: 'Open Sans', sans-serif;
	}

	@media (min-width: 81.25rem) {
		section {
			padding: 2rem 5rem;
			display: grid;
			grid-gap: 3rem;
		}
	}
</style>
