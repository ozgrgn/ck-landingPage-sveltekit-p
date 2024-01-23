<script>
	export let text;
	export let customCss;
	export let textColor;
	textColor = textColor;
	console.log(textColor);
</script>

<div style="--text-color:{textColor}" class="slider {customCss} ">
	{@html text}
</div>

<style>
	:global(.slider) {
		color: var(--text-color);
		-webkit-font-smoothing: antialiased;
	}
	:global(.slider h1) {
		line-height: 2.2rem;
		font-weight: 600;
		font-size: 2.7rem;
		padding-bottom: 0.5rem;
	}
	:global(.slider h2) {
		padding-top: 0.8rem;
		line-height: 0.7rem;
		font-weight: 600;
		font-size: 1.5rem;
	}

	:global(.slider h3) {
		padding-top: 1rem;
		line-height: 2rem;
		font-weight: 600;
		font-size: 1.3rem;
		padding-bottom: 0.5rem;
	}
	:global(.slider p:first-of-type) {
		padding-top: 0.8rem;
		line-height: 0.7rem;
	}
	:global(.slider p) {
		line-height: 1.5rem;
		font-size: 0.9rem;
	}
	:global(.slider ul) {
		list-style: none;
		line-height: 1.3rem;
		font-size: 0.9rem;
		padding-top:10px;
		padding-bottom:10px
		/* list-style-position: inside;
	
		list-style-image: url("/assets/interface-71.svg"); */
	}
	:global(.slider li:first-of-type) {
		padding-top: 0.6rem;
	}
	:global(.slider li::before) {
		padding-right: 3px;
		content: '✓';

	}

	:global(.slider a) {
		color: #65bdc2 !important;
		font-weight: bold;
	}
</style>
