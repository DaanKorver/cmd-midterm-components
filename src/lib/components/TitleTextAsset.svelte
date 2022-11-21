<script>
	export let title;
	export let text;
	export let src;
	export let altText;
	export let imageLeft = false;
</script>

<div class="container">
	<div class:right={!imageLeft}>
		<h2>{title}</h2>
		<p>{text}</p>
	</div>
	<img {src} alt={altText} />
</div>

<style>
	.container {
		display: flex;
		gap: 2rem;
		margin: 5rem auto;
		justify-content: center;
		line-height: 1.7;
	}

	.container > div {
		order: 2;
		flex-basis: 50%;
	}

	.container > div.right {
		order: 0;
	}

	img {
		max-width: 50%;
	}

	@media (max-width: 60rem) {
		.container {
			flex-direction: column;
			max-width: 40rem;
		}

		img {
			max-width: 100%;
		}
	}
</style>
