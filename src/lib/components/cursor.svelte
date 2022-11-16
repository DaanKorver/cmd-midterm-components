<div class="cursor" />

<style>
	div {
		background-color: rgba(255, 240, 33, 0.5);
		width: 50px;
		height: 50px;
		position: fixed;
		transition: cubic-bezier(0.17, 0.67, 0.83, 0.67);
		transition-duration: 200ms;
		transition-timing-function: ease-out;
		border-radius: 50%;
		pointer-events: none;
		/* Comment these out to hide the cursor. */
		left: -50px;
		top: 0;
		top: 1rem;
		z-index: 999;
		visibility: visible;
	}

	@media (min-width: 68.75rem) {
		div {
			visibility: visible;
		}
	}
</style>
