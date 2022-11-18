<script>
	export let type = 'default';
	export let href = '/';
</script>

{#if type === 'default'}
	<li><a {href} rel="noopener noreferrer"><slot /></a></li>
{:else}
	<a {href} rel="noopener noreferrer"><slot /></a>
{/if}
