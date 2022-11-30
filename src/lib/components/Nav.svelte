<script>
	import AnimatedHamburger from "./AnimatedHamburger.svelte";
	import { fly } from "svelte/transition";
	export let open = false;
	export let onClick = () => {
		open = !open;
	};
</script>
    <ul>
		<li>Beoogde leerresultaten</li>
		<li>Onderwijsleeromgeving</li>
		<li>Toetsing</li>
		<li>Gerealiseerde Leerresultaten</li>
	</ul>
	<AnimatedHamburger {open} {onClick} />
    {#if open}
		<nav transition:fly={{ y: -200, duration: 400 }}>
			<a transition:fly={{y:-1000, duration:1100}} href="./beoogde-leerresultaten">1.0 Beoogde leerresultaten</a>
			<a transition:fly={{y:-800, duration:1100}} href="./onderwijsleeromgeving">2.0 Onderwijsleeromgeving</a>
			<a transition:fly={{y:- 600, duration:1100}}  href="./toetsing">3.0 Toetsing</a>
			<a transition:fly={{y:-400, duration:1100}}  href="./gerealiseerde-leerresultaten"
				>4.0 Gerealiseerde Leerresultaten</a
			>
		</nav>
	{/if}

<style>
    ul{
        list-style: none;
        display: none;
    }

	nav {
		position: fixed;
		display: flex;
		gap: 2em;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		background-color: #000;
		width: 100%;
		height: 100%;
		top: 0;
		left: 0;
	}
    nav > a {
		margin: .5em;
		font-size: 1.5em;
		text-decoration: none;
		color: white;
		transition: all 0.2s ease-in-out;
	}
	nav :hover {
		box-shadow: inset 17em 0 0 0 #fff021;
		transition: inset 6s;
		color: black;
	}
 

    @media (min-width:70rem){
        ul{
            display: inline;
        }

    li{
        display: flex;
     margin-bottom: .5em;
    }
}
</style>