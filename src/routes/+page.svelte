<script>
	import TitleTextAsset from '$lib/components/TitleTextAsset.svelte';
	import Header from '$lib/components/Header.svelte';
	import Link from '$lib/components/Link.svelte';
	import Cursor from '$lib/components/Cursor.svelte';
	import ChapterContent from '$lib/components/ChapterContent.svelte';
	import Mainhero from '$lib/components/Mainhero.svelte';
</script>

<Cursor />
<Header title="CMD Mid-term">
	<Link type="li" href="/">Some link</Link>
	<Link type="li" href="/">Some link</Link>
	<Link type="li" href="/">Some link</Link>
</Header>

<Mainhero />

<TitleTextAsset
	title="Een titel ofzo"
	text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas illum ad distinctio in dignissimos at esse alias repellendus debitis asperiores ipsa sint, possimus eos officia beatae quidem quod illo quasi unde laudantium cumque dolorum nam quas a! Eaque autem eius provident veritatis tempora quaerat tenetur possimus, consequuntur, asperiores illum error.  "
	src="https://placebear.com/500/300"
	altText="bear"
/>

<ChapterContent />
>>>>>>> 6e8bd3661e2a25ac13059459147ab3f98f20a0bb
