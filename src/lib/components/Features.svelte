<script>
	import HomeFaq from './HomeFaq.svelte';
	import PopupButton from './PopupButton.svelte';
	import Spot from './Spot.svelte';
	import Tabs from './Tabs.svelte';
	import FeaturesText from './Text/FeaturesText.svelte';

	export let landingPage;
</script>

<div class="container mx-auto  md:h-full  px-4 md:px-0">
	<div class="flex flex-col items-center text-center pb-5 md:pb-10">
		<Spot content={landingPage?.featuresSpot} customCss=" text-white bg-secondary px-1" />
		<div>
			<h2 class="font-bold text-3xl md:text-3xl leading-tight text-black/80	text-center">
				{landingPage?.featuresHeader}
			</h2>
		</div>
	</div>
	<div class="md:flex gap-8">
		<div class="w-full md:w-1/4">
			<div class="flex flex-col gap-2">
				<img class="drop-shadow" src={landingPage?.features1Image} alt="" />
				<h3 class="text-xl">{landingPage?.features1Header}</h3>
				<p class="text-black/80 text-xs"><FeaturesText text={landingPage?.features1Text} /></p>
			</div>
		</div>
		<div class="w-full md:w-1/4 pt-4 md:pt-0">
			<div class="flex flex-col gap-2">
				<img
					class="drop-shadow"
					src={landingPage?.features2Image}
					alt={landingPage?.features2Alt}
				/>
				<h3 class="text-xl">{landingPage?.features2Header}</h3>
				<p class="text-black/80 text-xs pt-0"><FeaturesText text={landingPage?.features2Text} /></p>
			</div>
		</div>
		<div class="{landingPage?.isFaq ? '' : 'hidden'} w-full md:w-1/2 pt-4 md:pt-0 ">
			<HomeFaq {landingPage} />
		</div>
		<div class="{landingPage?.isTab ? '' : 'hidden'} w-full md:w-1/2 pt-4 md:pt-0 ">
			<Tabs {landingPage} />
		</div>
	</div>
	<div class="block pt-10 w-full flex justify-center ">
		<PopupButton
			buttonColor="#65BDC2"
			textColor="#fff"
			customCss="bg-primary text-xs rounded px-4 py-2 text-white my-2"
			buttonText=" FREE CONSULTATION"
		/>
	</div>
</div>
