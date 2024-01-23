<script>
	import InfoWithSliderSilder from './InfoWithSliderSilder.svelte';
	import Spot from './Spot.svelte';

	export let landingPage;
	export let translate;
	landingPage.infoWithSliderImages;
</script>

{#if landingPage}
	<div class="container mx-auto w-full md:flex gap-10 px-4 pt-10">
		<div class="md:flex flex-row lg:flex-column md:gap-8">
			<div class="lg:w-2/5 xl:w-2/6  h-full relative py-2">
				<InfoWithSliderSilder
					slides={[
						landingPage.infoWithSliderImage1,
						landingPage.infoWithSliderImage2,
						landingPage.infoWithSliderImage3
					]}
					altText={landingPage.infoWithSliderHeader}
				/>
			</div>

			<div
				class="lg:w-3/5 xl:w-3/5 2xl:w-2/5 h-auto flex flex-col items-center md:items-start justify-start  py-8 md:py-2 text-center md:text-left "
			>
				<Spot content={landingPage.infoWithSliderSpot} customCss="text-white bg-secondary px-1" />
				<div class="">
					<h2 class="font-bold  text-3xl leading-tight">
						{landingPage.infoWithSliderHeader}
					</h2>
				</div>
				<div class="text-sm xl:text-md font-medium text-black/80 leading-6 pt-4">
					<span>{@html landingPage.infoWithSliderText}</span>
				</div>
			</div>
		</div>
	</div>
{/if}
