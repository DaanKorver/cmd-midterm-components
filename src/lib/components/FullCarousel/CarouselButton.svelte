<script lang="ts">
	export let width = 24;
	export let height = 24;
	export let facing = 'right';
</script>

<button on:click style="transform: rotate({facing === 'right' ? 0 : 180}deg)" {...$$restProps}>
	<svg
		xmlns="http://www.w3.org/2000/svg"
		{width}
		{height}
		viewBox="0 0 24 24"
		fill="none"
		stroke="currentColor"
		stroke-width="2"
		stroke-linecap="round"
		stroke-linejoin="round"><polyline points="9 18 15 12 9 6" /></svg
	>
</button>

<style>
	button {
		display: flex;
		cursor: pointer;
		padding: 1rem;
		background-color: var(--color-black);
		color: var(--color-cmd-yellow);
		position: absolute;
		z-index: 10;
		outline: none;
		border: 1px solid transparent;
	}

	button:focus-visible {
		border-color: var(--color-cmd-yellow);
	}

	svg {
		transition: 0.2s transform ease-out;
	}

	button:active svg {
		transform: scale(0.7);
	}

	@media (max-width: 40rem) {
		button {
			bottom: 0;
		}
	}
</style>
