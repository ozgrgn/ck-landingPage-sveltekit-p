<script>
	import FaqDetail from './FaqDetail.svelte';
	import Spot from './Spot.svelte';
	export let landingPage;
	console.log(landingPage)
</script>

<div class="w-full flex flex-col justify-center items-center">
	<!-- <Spot content={landingPage?.faqSpot} customCss="block md:hidden text-white bg-secondary px-1" />
	<div>
		<h2 class="block md:hidden font-bold text-3xl md:text-4xl leading-tight	text-center">{landingPage?.faqHeader}</h2>
	</div> -->
	<div class="w-full">
		<FaqDetail {landingPage} />
	</div>
</div>
