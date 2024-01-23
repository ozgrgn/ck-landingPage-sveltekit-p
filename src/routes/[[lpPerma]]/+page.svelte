<script>
	import RestService from '$services/rest';
	import { page } from '$app/stores';
	import { goto } from '$app/navigation';

	import { landingPage, desktop } from '$services/store';
	import Seo from '$src/lib/components/Seo.svelte';
	import MainSlider from '$src/lib/components/sliders/MainSlider.svelte';
	import Info from '$src/lib/components/Info.svelte';
	import InTouch from '$src/lib/components/InTouch.svelte';
	import Features from '$src/lib/components/Features.svelte';
	import Testimonials from '$src/lib/components/Testimonials.svelte';
	import Videos from '$src/lib/components/Videos.svelte';
	import SideForm from '$src/lib/components/SideForm.svelte';
	import Form from '$src/lib/components/Form.svelte';
	import Spot from '$src/lib/components/Spot.svelte';
	import { onMount } from 'svelte';
	import InfoWithSlider from '$src/lib/components/InfoWithSlider.svelte';
	import InfoWithVideo from '$src/lib/components/InfoWithVideo.svelte';
	import BeforeAfters from '$src/lib/components/BeforeAfters.svelte';

	// $: if ($mailSent == true) {
	// 	setTimeout(() => {
	// 		form2.set(false);
	// 		mailSent.set(false);
	// 	}, 3000);
	// }
	onMount(() => {
		if ($page.url.hash) {
			setTimeout(() => {
				goto($page.url.href);
			}, 500);
		}
	});
</script>

<div class="w-full h-full relative">
	<MainSlider bind:landingPage={$landingPage} />
</div>
{#if $landingPage}
	<div id={$landingPage?.link3Perma} class="pt-10 md:py-20">
		<Info landingPage={$landingPage} />
	</div>
	{#if $desktop}
		<div id={$landingPage?.link2Perma} class="hidden md:block">
			<InTouch landingPage={$landingPage} />
		</div>
	{/if}
	<div id={$landingPage?.link2Perma} class="block md:hidden m-4 mt-10 pt-10 shadow">
		<div class="flex flex-col  justify-center items-center">
			<Spot content={$landingPage.formSpot} customCss="text-white bg-primary px-1" />
			<p class="py-5 text-4xl font-medium text-black/80">{$landingPage.formHeader}</p>
		</div>
		<div class="px-10">
			<Form landingPage={$landingPage} />
		</div>
	</div>
	<div id={$landingPage?.link1Perma} class="pt-10 md:pt-20 xl:px-20">
		<Features landingPage={$landingPage} />
	</div>
	<div id={$landingPage?.link4Perma} class="pt-10">
		<Testimonials landingPage={$landingPage} />
	</div>
	{#if $landingPage?.infoWithSliderHeader}
		<div id={$landingPage?.link5Perma} class="pt-20">
			<InfoWithSlider landingPage={$landingPage} />
		</div>
	{/if}
	{#if $landingPage?.firstBefore}
		<div id={$landingPage?.link6Perma} class="pt-32">
			<BeforeAfters landingPage={$landingPage} />
		</div>
	{/if}

	<div id="5" class="pt-10 md:pt-20">
		<Videos landingPage={$landingPage} />
	</div>

	<div id={$landingPage?.link7Perma} class="pt-10">
		<InfoWithVideo landingPage={$landingPage} />
	</div>
{/if}
