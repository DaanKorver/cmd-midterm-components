<script lang="ts">
	import StandardSectionButton from './StandardSectionButton.svelte';
	import StandardSectionContent from './StandardSectionContent.svelte';

	let index = 0;

	interface Link {
		text: string;
		href: string;
	}

	interface SectionType {
		title: string;
		links: Link[];
	}

	export let sections: SectionType[] = [];
</script>

<section>
	<ol>
		{#each sections as section, i}
			<StandardSectionButton active={index === i} on:click={() => (index = i)}
				>{section.title}</StandardSectionButton
			>
		{/each}
	</ol>

	<div>
		{#each sections as section, i}
			{#if index === i}
				<StandardSectionContent title={section.title} links={section.links} />
			{/if}
		{/each}
	</div>
</section>

<style>
	section {
		display: grid;
		/* grid-template-columns: 20rem 30rem; */
		/* grid-gap: 2.5rem; */
		grid-gap: 1rem;
		/* margin-top: 3rem; */
		/* place-items: start stretch;	 */
		padding: 1rem;
	}

	ol {
		list-style: none;
	}

	div {
		border: 2px solid #000;
		padding-bottom: 1rem;
	}

	@media (min-width: 45rem) {
		section {
			grid-template-columns: 20rem 30rem;
			margin-top: 3rem;
			place-items: start stretch;
		}
	}
</style>
