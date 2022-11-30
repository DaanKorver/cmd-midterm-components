<script lang="ts">
	export let image: string;
	export let heading = '';
	export let subtitle = '';
</script>

<li class="slide">
	<div class="content">
		<h2>{heading}</h2>
		<p>{subtitle}</p>
	</div>
	<img src={image} alt="cat" />
</li>

<style>
	.slide {
		display: block;
		width: 100%;
		height: 100%;
		position: relative;
	}

	h2 {
		font-size: clamp(1.5rem, 7vw, 4rem);
	}

	p {
		font-size: clamp(1rem, 4vw, 1.25rem);
		max-width: 30em;
	}

	.slide::after {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		width: 100%;
		height: 100%;
		background-color: rgba(0, 0, 0, 0.5);
		z-index: 2;
	}

	.content {
		width: 80%;
		height: 100%;
		position: absolute;
		display: flex;
		justify-content: center;
		align-items: flex-start;
		flex-direction: column;
		color: var(--color-white);
		z-index: 100;
		left: 50%;
		transform: translateX(-50%);
	}

	.slide img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	@media (max-width: 40rem) {
		.content {
			width: 90%;
		}
	}
</style>
