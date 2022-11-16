<script>
	export let title;

	let isOpen = false;
</script>

<nav class:active={isOpen}>
	<a href="/">{title}</a>
	<ul>
		<slot />
	</ul>
	<button on:click={() => (isOpen = !isOpen)}>
		<span />
		<span />
		<span />
	</button>
</nav>

<style>
	nav {
		display: flex;
		max-width: 85rem;
		width: 90%;
		justify-content: space-between;
		align-items: center;
		border-bottom: 4px solid currentColor;
		margin: 0 auto;
		padding: 1rem 0;
	}

	:global(a),
	a {
		text-decoration: none;
		color: currentColor;
	}

	nav > a {
		font-weight: bold;
		font-size: 1.5rem;
	}

	ul {
		display: flex;
		align-items: center;
		justify-content: flex-end;
		list-style-type: none;
		margin: 0;
		padding: 0;
		gap: 1em;
	}

	button {
		display: none;
		width: 30px;
		height: 16px;
		background-color: transparent;
		border: none;
		position: relative;
		padding: 0;
	}

	button span {
		display: block;
		width: 30px;
		height: 2px;
		background-color: currentColor;
		position: absolute;
		transition: 300ms transform ease-in-out, 300ms top ease-in-out, 300ms bottom ease-in-out,
			300ms opacity ease-out;
	}

	button span:first-child {
		top: 0;
	}

	button span:nth-child(2) {
		top: 50%;
		transform: translateY(-50%);
	}

	button span:last-child {
		bottom: 0;
	}

	@media (max-width: 45rem) {
		nav.active {
			color: white;
		}

		ul {
			position: fixed;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			justify-content: center;
			flex-direction: column;
			background-color: black;
			z-index: 9;
			opacity: 0;
			pointer-events: none;
			transform: translateY(-5%);
			transition-duration: 500ms;
			transition-property: transform, opacity;
			transition-timing-function: cubic-bezier(0.16, 1, 0.3, 1);
			font-size: 1.2rem;
		}

		nav.active ul {
			opacity: 1;
			transform: translateY(0);
			pointer-events: all;
		}

		button {
			display: block;
		}

		nav.active button {
			color: white;
		}

		nav.active button span:first-child {
			top: 50%;
			transform: translateY(-50%) rotate(45deg);
		}

		nav.active button span:nth-child(2) {
			opacity: 0;
		}

		nav.active button span:last-child {
			bottom: 50%;
			transform: translateY(50%) rotate(-45deg);
		}

		button,
		nav > a {
			z-index: 10;
		}
	}
</style>
