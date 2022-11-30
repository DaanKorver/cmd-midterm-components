<script>
	import TitleTextAsset from '$lib/components/TitleTextAsset.svelte';
	import Header from '$lib/components/Header.svelte';
	import Link from '$lib/components/Link.svelte';
	import Cursor from '$lib/components/Cursor.svelte';
	import ChapterContent from '$lib/components/ChapterContent.svelte';
	import Mainhero from '$lib/components/Mainhero.svelte';
	import Carousel from '$lib/components/Carousel.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import FullCarousel from '$lib/components/FullCarousel/FullCarousel.svelte';
	import { expoOut } from 'svelte/easing';
</script>

<div>
	<Cursor />
	<Header title="CMD Mid-term" isYellow>
		<Link type="li" href="/">Some link</Link>
		<Link type="li" href="/">Some link</Link>
		<Link type="li" href="/">Some link</Link>
	</Header>

	<FullCarousel
		automatic
		automaticDuration={3500}
		transition={{ duration: 1000, easing: expoOut }}
		slides={[
			{
				heading: 'CMD Mid-term',
				subtitle:
					'Opleiding van de HvA. Zo vet cool dit wil je toch gewoon doen. Jij gaat nu CMD doen of anders',
				image: 'https://placekitten.com/1500/1500'
			},
			{
				heading: 'Creatieve vrijheid',
				subtitle: 'Maak websites enzo bro',
				image: 'https://placekitten.com/1500/1200'
			},
			{
				heading: 'Toffe internet dingetjes',
				subtitle: 'Memes enzo, die zijn toch cool?',
				image: 'https://placekitten.com/1800/1800'
			}
		]}
	/>

	<Mainhero
		title="Communcation and Multimedia Design"
		image="/assets/hero-image.jpeg"
		imageAlt="Woman with laptop"
		hasButtons="true"
		text="hwhwhw"
	/>

	<TitleTextAsset
		title="Een titel ofzo"
		text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas illum ad distinctio in dignissimos at esse alias repellendus debitis asperiores ipsa sint, possimus eos officia beatae quidem quod illo quasi unde laudantium cumque dolorum nam quas a! Eaque autem eius provident veritatis tempora quaerat tenetur possimus, consequuntur, asperiores illum error.  "
		src="https://placebear.com/500/300"
		altText="bear"
	/>

	<ChapterContent />

	<Carousel />

	<Footer />
</div>

<style>
	div {
		max-width: 85rem;
		margin: 0 auto;
	}

	@media (max-width: 40rem) {
		div {
			padding: 0 1rem;
		}
	}
</style>
