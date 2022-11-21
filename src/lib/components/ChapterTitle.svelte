<script>
	export let number;
	export let title;
</script>

<div>
	<span>{number}</span>
	<h3>{title}</h3>
</div>

<style>
	div {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		transform: translateY(calc(-1.5rem - 6px));
	}

	span {
		background-color: #fff021;
		padding: 0.25rem;
		font-size: 1.3rem;
		display: inline-block;
		margin-bottom: -2px;
		border: 2px solid #000;
		width: 1.5rem;
		height: 1.5rem;
	}

	h3 {
		font-size: 1.3rem;
		border: 2px solid #000;
		padding: 0.25rem;
		margin: 0 0 1rem 0;
	}
</style>
