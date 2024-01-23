<script>
	export let text;
	export let customCss;
</script>

<div class="text {customCss}">
	{@html text}
</div>

<style>
	:global(.text) {
		color: rgb(0 0 0 / 0.8);
		-webkit-font-smoothing: antialiased;
	}
	:global(.text h1) {
		line-height: 2rem;
		font-weight: 600;
		font-size: 1.8rem;
		padding-bottom: 0.5rem;
	}
	:global(.text h2) {
		padding-top: 0.4rem;
		line-height: 2rem;
		font-weight: 600;
		font-size: 1.5rem;
		padding-bottom: 0.2rem;
	}
	:global(.text h3) {
		padding-top: 4px;
		line-height: 1.5rem;
		font-weight: 600;
		font-size: 1.3rem;
		padding-bottom: 0.5rem;
	}
	:global(.text p) {
		line-height: 1.5rem;
		font-size: 0.875rem;
	}
	:global(.text ul) {
		list-style: none;
		/* list-style-position: inside;
	
		list-style-image: url("/assets/interface-71.svg"); */
	}
	:global(.text li::before) {
		padding-right: 3px;
		content: '✓';
	}
	:global(.text a) {
		color: #65bdc2 !important;
		font-weight: bold;
	}
	:global(.text p) {
		line-height: 1.5;
	}
</style>
