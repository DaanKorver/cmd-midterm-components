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
		width: var(--slide-width);
		height: var(--slide-height);
		position: relative;
		font-size: 2rem;
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
		width: 100%;
		height: 100%;
		position: absolute;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		color: var(--color-white);
		z-index: 100;
	}

	.slide img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
</style>
