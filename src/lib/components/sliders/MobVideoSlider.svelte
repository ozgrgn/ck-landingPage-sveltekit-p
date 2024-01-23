<script>
	import { Splide, SplideSlide } from '@splidejs/svelte-splide';
	import { modal, videoLink } from '$services/store';

	import '@splidejs/svelte-splide/css';
	import VideoPlayer from '../VideoPlayer.svelte';
	export let videos;
	const showModal = (link) => {
		console.log(link);
		videoLink.set(link);
		modal.set(VideoPlayer);
	
	};
</script>

<Splide
	aria-label="My Favorite Images"
	options={{
		type: 'loop',
		arrows: false,
		pagination: true,
		autoplay: true,
		interval: 3000,
		classes: {
			pagination: 'splide__pagination main-slider-pagination',
			page: 'splide__pagination__page main-slider-page'
		}
	}}
>
{#if videos}
	{#each videos as video}
		<SplideSlide>
			<div class="relative" >
				
				<img
					class="h-full w-full object-cover rounded"
					src={video.videoImage}
					alt={video.videoName}
				/>
				<div
					class="absolute top-0 left-0 w-full h-full flex justify-center items-center cursor-pointer" 
				>
					<div class="w-12" on:click={() => showModal(video?.videoLink)} on:keydown>
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="-35.20005 -41.33325 305.0671 247.9995"
							><path
								d="M229.763 25.817c-2.699-10.162-10.65-18.165-20.748-20.881C190.716 0 117.333 0 117.333 0S43.951 0 25.651 4.936C15.553 7.652 7.6 15.655 4.903 25.817 0 44.236 0 82.667 0 82.667s0 38.429 4.903 56.85C7.6 149.68 15.553 157.681 25.65 160.4c18.3 4.934 91.682 4.934 91.682 4.934s73.383 0 91.682-4.934c10.098-2.718 18.049-10.72 20.748-20.882 4.904-18.421 4.904-56.85 4.904-56.85s0-38.431-4.904-56.85"
								fill="red"
							/><path d="M93.333 117.559l61.333-34.89-61.333-34.894z" fill="#fff" /></svg
						>
					</div>
				</div>
			</div>
		</SplideSlide>
	{/each}
	{/if}
</Splide>

<style>
	:global(.mobVideo .main-slider-page) {
		background-color: #65bdc2 !important;
	}
	:global(.mobVideo .main-slider-page.is-active) {
		background-color: #0e3055 !important;
	}
</style>
