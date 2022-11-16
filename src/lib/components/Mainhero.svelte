<script>
	export let title;
	export let text;
	export let image;
    import "../styles/global.css";
</script>

<section>
	<!-- <img src="/assets/hero-image.jpeg" alt="woman with laptop" /> -->
	<h2>Communication<br /> and Multimedia<br /> Design</h2>
        <img src="/assets/hero-image.jpeg" alt="woman with laptop" />
        <p>Midterm</p>
        <p>Currulicum 2022-2024</p>
</section>


<style>

	section {
		display: flex;
		flex-direction: column;
        align-items: flex-start;
		border-bottom: 4px solid #000;
        gap: 1em;
        padding-bottom: 2em;
		margin: 0.4em 2.5em;
     
	}

	section :nth-child(3) {
		font-size: 1em;
		font-weight: bold;
	}
	p {
		font-size: 1em;
		margin: 0.4em 0.1em;
		padding: 1em 3em;
		background-color: black;
		color: white;
	}
	h2 {
		transition: 0.4s cubic-bezier(0.4, 0.4, 0, 1);
		padding-top: 0.2em;
		font-size: 2.5em;
		z-index: -2;
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
           gap: 2em;
			/* border-bottom: 4px solid #000; */
			padding-bottom: 5em;
			margin: 0.4em 6em;
		}

		section :nth-child(3) {
			font-size: 1.1em;
			font-weight: bold;
		}

		p {
			font-size: 1.1em;
			margin: 0.5em;
			padding: 1em 1.5em;
			background-color: black;
			color: white;
		}


		img {
            position: absolute;
            transform: translateX(20%);
            max-width: 50em;
            margin: 11em;
            margin-top: 11em;
            padding-bottom: 3em;
    
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