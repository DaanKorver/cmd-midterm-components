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

<section {...$$restProps}>
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
		grid-gap: 1rem;
		padding: 1rem;
	}

	ol {
		list-style: none;
	}

	div {
		border: 2px solid #000;
	}

	@media (min-width: 45rem) {
		section {
			grid-template-columns: auto auto;
			margin-top: 3rem;
			place-items: start stretch;
			grid-gap: 1.5rem;
		}
	}

	@media (min-width: 70rem) {
		section {
			grid-template-columns: 20fr 30fr;
			grid-gap: 2.5rem;
		}
	}
</style>
