<script lang="ts">
	import { quadInOut } from 'svelte/easing';
	import { tweened } from 'svelte/motion';
	import CarouselButton from './CarouselButton.svelte';
	import Slide from './Slide.svelte';

	interface Slide {
		image: string;
		heading: string;
		subtitle: string;
	}

	interface Transition {
		duration: number;
		easing: (t: number) => number;
	}

	const defaultTransition: Transition = { duration: 300, easing: quadInOut };

	export let slides: Slide[];
	export let automatic = false;
	export let automaticDuration = 5000;
	export let transition: Transition = defaultTransition;

	const xTransition = { ...defaultTransition, ...transition };

	const clones = 2;
	let index = 0;
	const shiftAmount = 100 / (slides.length + clones);
	const slideOffset = tweened(-shiftAmount, xTransition);
	let canShift = true;
	let interval: ReturnType<typeof setInterval> | null = null;

	if (automatic) {
		interval = setInterval(() => {
			shift(1, true);
		}, automaticDuration);
	}

	function shift(direction: -1 | 1, auto: boolean = false, amount: number = 1) {
		if (!auto && interval) clearInterval(interval);
		if (!canShift) return;
		canShift = false;
		if (direction == 1) {
			index++;
			slideOffset.set(-(index + 1) * shiftAmount);
		} else {
			index--;
			slideOffset.set(-(index + 1) * shiftAmount);
		}
		setTimeout(() => {
			checkIndex();
			if (!auto && automatic) {
				interval = setInterval(() => {
					shift(1, true);
				}, automaticDuration);
			}
		}, xTransition.duration + 100);
	}

	function checkIndex() {
		if (index === -1) {
			index = slides.length - 1;
			slideOffset.set(-(index + 1) * shiftAmount, { duration: 0 });
		}

		if (index === slides.length) {
			index = 0;
			slideOffset.set(-(index + 1) * shiftAmount, { duration: 0 });
		}

		canShift = true;
	}
</script>

<div class="container">
	<div class="wrapper">
		{#if slides}
			<ul
				class="slides"
				style="width: calc({slides.length +
					clones} * var(--slide-width)); transform: translateX(calc({$slideOffset}% ))"
			>
				<Slide
					image={slides[slides.length - 1].image}
					heading={slides[slides.length - 1].heading}
					subtitle={slides[slides.length - 1].subtitle}
				/>
				{#each slides as slide}
					<Slide image={slide.image} heading={slide.heading} subtitle={slide.subtitle} />
				{/each}
				<Slide image={slides[0].image} heading={slides[0].heading} subtitle={slides[0].subtitle} />
			</ul>
		{/if}
	</div>
	<CarouselButton on:click={() => shift(-1)} facing="left" />
	<CarouselButton on:click={() => shift(1)} style="right: 0" facing="right" />
</div>

<style>
	:root {
		--slide-width: 100%;
		--slide-height: 80vh;
	}

	.container {
		display: inline-flex;
		align-items: center;
		position: relative;
		margin: 3rem 0;
	}

	.wrapper {
		overflow: hidden;
		margin: 0 auto;
		position: relative;
		width: var(--slide-width);
		height: var(--slide-height);
		min-height: 550px;
		background-color: transparent;
		z-index: 1;
	}

	.slides {
		display: flex;
		position: relative;
		top: 0;
		height: 100%;
	}
</style>
