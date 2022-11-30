<script lang="ts">
	interface Link {
		text: string;
		href: string;
	}

	export let links: Link[];
	export let title: string;
</script>

<div>
	<h2>{title}</h2>
	<ol>
		{#each links as link}
			<li>
				<a href={link.href}>{link.text}</a>
			</li>
		{/each}
	</ol>
</div>

<style>
	h2 {
		border-bottom: 3px solid #000;
		padding: 1rem 2rem;
	}

	div ol {
		margin-top: 0.5rem;
	}

	div ol li {
		padding: 0.15rem 2rem;
	}

	ol {
		list-style-position: inside;
	}
</style>
