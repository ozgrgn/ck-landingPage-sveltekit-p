<script>
	import { modal, videoLink } from '$services/store';
	import VideoPlayer from './VideoPlayer.svelte';
	import Svg from '$assets/svg.json';
	import Spot from './Spot.svelte';

	export let landingPage;
	const showModal = (link) => {
		modal.set(VideoPlayer);
		videoLink.set(link);
	};
</script>

<div class="container mx-auto px-2 md:px-0">
	<div class="lg:grid grid-cols-3 gap-10 mt-10 px-2 md:px-10">
		{#if landingPage && landingPage.infoWithVideoVideoImage && landingPage.infoWithVideoVideoName && landingPage.infoWithVideoVideoLink && landingPage.infoWithVideoText}
			<div class="relative ">
				<img
					class="h-full w-full object-cover rounded"
					src={landingPage?.infoWithVideoVideoImage}
					alt={landingPage?.infoWithVideoVideoName}
				/>
				<div
					class="absolute top-0 left-0 w-full h-full flex justify-center items-center cursor-pointer"
					on:click={() => showModal(landingPage?.infoWithVideoVideoLink)}
					on:keydown
				>
					<div class=" hidden md:block w-12">{@html Svg.youtubePlay}</div>
					<div class="block md:hidden w-12">
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="-35.20005 -41.33325 305.0671 247.9995"
							><path
								d="M229.763 25.817c-2.699-10.162-10.65-18.165-20.748-20.881C190.716 0 117.333 0 117.333 0S43.951 0 25.651 4.936C15.553 7.652 7.6 15.655 4.903 25.817 0 44.236 0 82.667 0 82.667s0 38.429 4.903 56.85C7.6 149.68 15.553 157.681 25.65 160.4c18.3 4.934 91.682 4.934 91.682 4.934s73.383 0 91.682-4.934c10.098-2.718 18.049-10.72 20.748-20.882 4.904-18.421 4.904-56.85 4.904-56.85s0-38.431-4.904-56.85"
								fill="red"
							/><path d="M93.333 117.559l61.333-34.89-61.333-34.894z" fill="#fff" /></svg
						>
					</div>
				</div>
			</div>
			<div class="col-span-2 xl:w-[calc(75vw-600px)] 2xl:w-[calc(75vw-700px)]">
				<div class="flex flex-col items-left text-left justify-center ">
					{#if landingPage}
						<Spot
							content={landingPage?.infoWithVideoSpot}
							customCss="text-white bg-secondary px-1 mt-10 lg:mt-0"
						/>
						<div>
							<h2
								class="font-bold text-3xl md:text-4xl leading-tight text-black/80 pt-1"
							>
								{landingPage?.infoWithVideoHeader}
							</h2>
						</div>
						<div class="text-sm xl:text-md font-medium text-black/80 leading-6 pt-4">
							<span>{@html landingPage.infoWithVideoText}</span>
						</div>
					{/if}
				</div>
			</div>
		{/if}
	</div>
</div>
