<script>
	export let title;
	export let text;
	export let image;
	export let imageAlt;
	import '../styles/global.css';
	import '../styles/theme.css';
	export let hasButtons;
</script>

<section>
	<h2>{title}</h2>
	<img src={image} alt={imageAlt} />

	{#if text}
		<p>{text}</p>
	{/if}

	{#if hasButtons}
		<span>Midterm</span>
		<span>Currulicum 2022-2024</span>
	{/if}
	<hr />
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		gap: 1em;
		padding-bottom: 2em;
		background-color: var(--color-cmd-yellow);
		position: relative;
	}

	section:nth-child(3) {
		font-size: 1em;
		font-weight: bold;
	}

	h2 {
		color: var(--color-black);
		width: 65%;
	}

	span {
		font-size: 1em;
		margin: 0.4em 0.1em;
		padding: 1em 3em;
		background-color: black;
		color: white;
	}

	p {
		font-weight: 100;
	}
	h2 {
		transition: 0.4s cubic-bezier(0.4, 0.4, 0, 1);
		padding-top: 0.2em;
		font-size: 2.5em;
	}

	img {
		max-width: 100%;
		height: auto;
	}
	@media (min-width: 40em) {
		h2 {
			font-size: 4em;
		}
	}

	@media (min-width: 70em) {
		section {
			display: flex;
			flex-direction: column;
			align-items: flex-start;
			justify-content: center;
			gap: 1.5em;
			padding-bottom: 5em;
		}

		section :nth-child(3) {
			font-size: 1.1em;
			font-weight: bold;
		}

		span {
			font-size: 1.1em;
			margin: 0.5em;
			padding: 1em 1.5em;
			background-color: black;
			color: white;
		}

		img {
			position: absolute;
			max-width: 60em;
			right: 0;
			bottom: 4rem;
		}

		h2 {
			font-size: 6em;
		}
	}

	/* @media (min-width: 70em){
		section{
			padding-bottom: 6em;
		}
		 section > img{
			width: 67%;
			height: 25.5em;
		}
	}

	@media (min-width: 95em){
		section{
			padding-bottom: 8em;
		}
		 section > img{
			width: 75.5%;
			height: 28em;
		}
	} */
</style>
