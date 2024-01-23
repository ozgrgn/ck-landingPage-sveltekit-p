<script>
	export let text;
	export let customCss;
</script>

<div class="features text-black/70 {customCss}">
	{@html text}
</div>

<style>
	:global(.features) {
		
		-webkit-font-smoothing: antialiased;
	}
	:global(.features h1) {
		line-height: 2rem;
		font-weight: 600;
		font-size: 1.8rem;
		padding-bottom: 0.5rem;
	}
	:global(.features h2) {
		padding-top: 0.4rem;
		line-height: 2rem;
		font-weight: 600;
		font-size: 1.5rem;
		padding-bottom: 0.2rem;
	}
	:global(.features h3) {
		padding-top: 4px;
		line-height: 1.5rem;
		font-weight: 600;
		font-size: 1.3rem;
		padding-bottom: 0.5rem;
	}
	:global(.slider li:first-of-type) {
		padding-top: 0;
	}
	:global(.features p) {
		line-height: 1.1rem;
		font-size: 0.8rem;
	}
	:global(.features ul) {
		list-style: none;
	}
	:global(.features li::before) {
		padding-right: 3px;
		content: '✓';
	}
	:global(.features a) {
		color: #65bdc2 !important;
		font-weight: bold;
	}

</style>
