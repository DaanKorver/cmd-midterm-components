<script>
	import Logo from "./Logo.svelte";
	import Nav from "./Nav.svelte";
</script>

<header>
	<Logo/>
	<Nav/>
</header>

<style>
header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin: 0.4em 2.5em;
		position: relative;
		border-bottom: 4px solid #000;
		transition: linear 0.4s;
		z-index: 2;
	}
</style>
