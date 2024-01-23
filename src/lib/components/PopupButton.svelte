<script>
	import { modal } from '$services/store';
	import PopupForm from './PopupForm.svelte';
	const showModal = () => modal.set(PopupForm);
	export let buttonText;
	export let customCss;
	export let buttonColor;
	export let textColor;
	buttonColor = buttonColor;
	textColor = textColor;
</script>

<!-- {`bg-[${style}]`} -->

<button
	style="--button-color: {buttonColor}; --text-color:{textColor}"
	class="a {customCss} shadow-xl"
	on:click={() => showModal()}
>
	<h3 class="font-bold">{buttonText}</h3>
</button>

<style>
	:global(.a) {
		background-color: var(--button-color);
		color: var(--text-color);
	}
</style>
