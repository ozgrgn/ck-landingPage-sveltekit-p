<script>
	export let text;
	export let customCss;
	export let textColor;
	textColor = textColor;
	console.log(textColor);
</script>

<div style="--text-color:{textColor}" class="mobSlider {customCss} ">
	{@html text}
</div>

<style>
	:global(.mobSlider) {
		color: var(--text-color);
		-webkit-font-smoothing: antialiased;
	}
	:global(.mobSlider h1) {
		line-height: 2.2rem;
		font-weight: 600;
		font-size: 2.2rem;;
	}
	:global(.mobSlider h2) {
		line-height: 1.3rem;
		font-weight: 600;
		font-size: 1.3rem;
	}
		:global(.mobSlider h2:first-of-type) {
		padding-top:1rem;
	}

	:global(.mobSlider h3) {
		padding-top: 1rem;
		line-height: 2rem;
		font-weight: 600;
		font-size: 1.3rem;
		padding-bottom: 0.5rem;
	}

	:global(.mobSlider p) {
 		line-height: 1rem;
		font-size: 0.9rem;
	}
	:global(.mobSlider ul) {
		list-style: none;
		line-height: 1.3rem;
		font-size: 0.9rem;
		padding-top:0.2rem;
		margin-bottom:0.5rem
		/* list-style-position: inside;
	
		list-style-image: url("/assets/interface-71.svg"); */
	}
	:global(.mobSlider li:first-of-type) {
		padding-top: 0.2rem;
	}
	:global(.mobSlider li::before) {
		padding-right: 3px;
		content: '✓';

	}

	:global(.mobSlider a) {
		color: #65bdc2 !important;
		font-weight: bold;
	}
</style>
