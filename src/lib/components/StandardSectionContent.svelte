<script lang="ts">
	interface Link {
		text: string;
		href: string;
	}

	export let links: Link[];
	export let title: string;
</script>

<h2>{title}</h2>
<ol>
	{#each links as link}
		<li>
			<a href={link.href}>{link.text}</a>
		</li>
	{/each}
</ol>

<style>
	h2 {
		border-bottom: 3px solid #000;
		padding: 1rem;
		font-size: 1.25rem;
	}

	div ol li {
		padding: 0.15rem 1rem;
	}

	ol {
		list-style-position: inside;
		margin: 0.75rem 0;
	}

	@media (min-width: 70rem) {
		h2 {
			padding: 1rem 2rem;
			font-size: 1.5rem;
		}

		div ol li {
			padding: 0.15rem 2rem;
		}
	}
</style>
