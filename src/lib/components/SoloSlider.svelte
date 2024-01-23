<script>
	import { Splide, SplideSlide } from '@splidejs/svelte-splide';
	import '@splidejs/svelte-splide/css';
	export let slides;
	export let category;
</script>

<Splide
	aria-label="My Favorite Images"
	options={{
		type: 'slide',
		arrows: false,
		pagination: true,
		autoplay: false,

	}}
>
	{#each slides as slide}
		<SplideSlide>
			<div class="relative h-96">
				<div class="h-96">
					<img class="h-96 w-full object-contain" src={slide} alt={slide?.name} />
				</div>
			</div>
		</SplideSlide>
	{/each}
</Splide>
