<script>
	import Spot from './Spot.svelte';
	import Reviews from './Reviews.svelte';
	import GradientBg from './GradientBg.svelte';
	import { shared, reviews } from '$services/store';
	import { Splide, SplideSlide } from '@splidejs/svelte-splide';
	import MobRateSlider from './sliders/MobRateSlider.svelte';
	import SoloSlider from './SoloSlider.svelte';

	export let landingPage;
</script>

<div class="relative w-full hidden md:block">
	<div class="">
		<GradientBg />
	</div>
	<img class="z-10 h-[35rem] md:h-[40rem]" src="/assets/img/pr-10.jpg" alt="" />

	<div class="absolute w-full h-full top-0 left-0 z-10 ">
		<div class="container mx-auto my-14 px-4">
			<div class="flex flex-col items-center text-center justify-center ">
				{#if landingPage}
					<Spot content={landingPage?.beforeAfterSpot} customCss=" text-white bg-secondary px-1" />
					<div>
						<h2 class="font-bold text-3xl md:text-3xl leading-tight text-white pt-1	text-center">
							{landingPage?.beforeAfterHeader}
						</h2>
					</div>
				{/if}
			</div>
			<div class="flex flex-col md:flex-row gap-2 md:gap-20 lg:gap-40 justify-center items-center mt-10 ">
				<div class=" ">
					{#if landingPage && $reviews}
						<SoloSlider slides={[landingPage.firstBefore,landingPage.firstAfter]} reviews={$reviews} />
					{/if}
				</div>
				<div class=" ">
					{#if landingPage && $reviews}
						<SoloSlider slides={[landingPage.secondBefore,landingPage.secondAfter]} reviews={$reviews} />
					{/if}
				</div>
				<div class="">
					{#if landingPage && $reviews}
						<SoloSlider slides={[landingPage.thirdBefore,landingPage.thirdAfter]} reviews={$reviews} />
					{/if}
				</div>
			</div>
		</div>
	</div>
</div>
