
<script>
	import { modal, videos, videoLink } from '$services/store';
	import VideoPlayer from './VideoPlayer.svelte';
	import Svg from '$assets/svg.json';
	import Spot from './Spot.svelte';
	import MobVideoSlider from './sliders/MobVideoSlider.svelte';
	
	export let landingPage;
	const showModal = (link) => {
		modal.set(VideoPlayer);
		videoLink.set(link);
	};
</script>

<div class="container mx-auto px-2 md:px-0">
	<div class="flex flex-col items-center text-center justify-center ">
		{#if landingPage}
			<Spot content={landingPage?.videoSpot} customCss=" text-white bg-primary px-1" />
			<div>
				<h2 class="font-bold text-3xl md:text-4xl leading-tight text-black/80 pt-1 text-center pb-4 md:pb-0">
					{landingPage?.videoHeader}
				</h2>
			</div>
		{/if}
	</div>
	<div class="hidden md:grid grid-cols-3 grid-rows-2 gap-10 mt-10 px-2 md:px-10">
		{#if $videos}
			{#each Array(6) as _, i }
			{#if $videos[i] }
				<div class="relative">
					<img
						class="h-full w-full object-cover rounded"
						src={$videos[i]?.videoImage}
						alt={$videos[i]?.videoName}
					/>
					<div
						class="absolute top-0 left-0 w-full h-full flex justify-center items-center cursor-pointer"
						on:click={() => showModal($videos[i]?.videoLink)}
						on:keydown
					>
						<div class="w-12">{@html Svg.youtubePlay}</div>
					</div>
				</div>
				{/if}
			{/each}
		{/if}
	</div>
	{#if $videos}
	<div class="mobVideo block md:hidden">
		<MobVideoSlider videos={$videos}/>
	</div>
	{/if}
</div>
