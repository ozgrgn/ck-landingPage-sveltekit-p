<script>
	import { shared, landingPage } from '$services/store';
	import Form from './Form.svelte';
	import Spot from './Spot.svelte';
</script>

<div class="shadow my-10 p-4 pt-5">
	<div class=" flex flex-col justify-center items-center">
		<Spot content={$landingPage.formSpot} customCss="text-white bg-primary px-1" />

		<p class="py-5 text-4xl font-medium text-black/80">{$landingPage.formHeader}</p>
	</div>
	<Form translate={$shared} />
</div>
