<script>
	import { Splide, SplideSlide } from '@splidejs/svelte-splide';
	import '@splidejs/svelte-splide/css';
	import Spot from '../Spot.svelte';
	export let shared;
</script>

<Splide
	aria-label="My Favorite Images"
	options={{
		type: 'loop',
		perPage: 1,
		arrows: false,
		pagination: false,
		autoplay: true,
        interval: 3000,
	}}
>


	<SplideSlide>
		<div class="w-full">
			<div class="flex items-center justify-center">
				<img class="h-full w-20 pt-2" src="/assets/img/reviews/Google.svg" alt="" />
				<div class="ratings flex pt-1">
					{shared?.googleRate}
					<div class="one-star-tp text-custom-gcolor  pl-1" />
				</div>
			</div>
		</div>
	</SplideSlide>
	<SplideSlide>
        <div class="w-full">
			<div class="flex items-center justify-center">
				<img class="h-full w-24 pt-1 pb-1 " src="/assets/img/reviews/TrustPilot.svg" alt="" />
				<div class="ratings flex pl-1 pt-1 ">
					{shared?.trustPilotRate}
					<div class="one-star-tp text-custom-tcolor  pl-1" />
				</div>
			</div>
		</div>
	</SplideSlide>
	<SplideSlide>
        <div class="w-full">
			<div class="flex items-center justify-center">
                <img class="h-full w-24 " src="/assets/img/reviews/facebook.svg" alt="" />
                <div class="ratings flex justify-center  ">
                    {shared?.facebookRate}
                    <div class="one-star-tp text-md text-custom-fcolor pl-1" />
                </div>
			</div>
		</div>
	</SplideSlide>
</Splide>
<style>
    	.one-star-tp:before {
            content: '\2605\2605\2605\2605\2605';
	}
</style>