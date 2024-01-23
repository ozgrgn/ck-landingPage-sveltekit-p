<script>
	import Spot from './Spot.svelte';
	import Reviews from './Reviews.svelte';
	import GradientBg from './GradientBg.svelte';
	import { shared, reviews } from '$services/store';
	import { Splide, SplideSlide } from '@splidejs/svelte-splide';
	import MobRateSlider from './sliders/MobRateSlider.svelte';

	export let landingPage;
</script>

<div class="relative w-full">
	<div class="">
		<GradientBg />
	</div>
	<img class="z-10 h-[35rem] md:h-[40rem]" src="/assets/img/pr-10.jpg" alt="" />

	<div class="absolute w-full top-0 left-0 z-10 ">
		<div class="container mx-auto my-14 px-4">
			<div class="flex flex-col items-center text-center justify-center ">
				{#if landingPage}
					<Spot content={landingPage?.testimonialSpot} customCss=" text-white bg-secondary px-1" />
					<div>
						<h2 class="font-bold text-3xl md:text-4xl leading-tight text-white pt-1	text-center">
							{landingPage?.testimonialHeader}
						</h2>
					</div>
				{/if}
			</div>

			<div
				class="hidden md:flex justify-center bg-white  shadow-sm rounded-lg border w-full md:w-full h-10 mt-10  md:gap-10 "
			>
				<div class="w-40 flex items-center  justify-around">
					<img class="h-full pt-2" src="/assets/img/reviews/Google.svg" alt="" />
					<div class="ratings flex pt-1">
						{$shared?.googleRate}
						<div class="one-star-tp text-custom-gcolor " />
					</div>
				</div>
				<div class="w-48 flex items-center justify-around">
					<img class="h-full pt-2 pb-2" src="/assets/img/reviews/TrustPilot.svg" alt="" />
					<div class="ratings flex pt-1">
						{$shared?.trustPilotRate}
						<div class="one-star-tp text-custom-gcolor " />
					</div>
				</div>
				<div class="flex items-center justify-around">
					<img class="h-full" src="/assets/img/reviews/facebook.svg" alt="" />
					<div class="ratings flex pl-1 pt-1">
						{$shared?.facebookRate}
						<div class="one-star-tp text-md text-custom-gcolor " />
					</div>
				</div>
			</div>
			<div
				class="flex md:hidden  overflow-hidden justify-center bg-white  shadow-sm rounded-lg border w-full md:w-full h-10 mt-10  md:gap-10 "
			>
			{#if $shared}
				<MobRateSlider shared={$shared} />
				{/if}
			</div>

			<div class="relative w-full h-full">
				{#if landingPage && $reviews}
				<Reviews {landingPage} reviews={$reviews} />
				{/if}
			</div>
		</div>
	</div>
</div>

<style>
	.one-star-tp:before {
		content: '\2605';
	}
</style>
