<script>
	import Spot from './Spot.svelte';
	import InfoText from './Text/InfoText.svelte';
	import { modal2, shared,videoLink } from '$services/store';
	import Svg from '$assets/svg.json';
	import VideoPlayer from './VideoPlayer.svelte';

	export let landingPage;
	let second = false;
	const showModal = (link) => {
		modal2.set(VideoPlayer);
		videoLink.set(link);
	};
</script>

<div class="container mx-auto w-full md:flex gap-10 px-4  ">
	<div class="w-full  md:w-3/4 md:flex flex-col justify-evenly">
		<Spot content={landingPage?.infoSpot} customCss="text-white bg-secondary px-1 " />
		<!-- <div class="pt-1">
			<h2 class="font-semibold text-4xl tracking-wide">How Can CK Health Turkey Help Me?</h2>
		</div> -->
		{#if landingPage?.infoVideoLink && landingPage?.infoVideoImage}
		<div class="relative h-[135px] w-[240px] pt-2">
			<img class="h-full w-full object-cover" src={landingPage.infoVideoImage} alt="" />
			<div
			class="absolute top-0 left-0 w-full h-full flex justify-center items-center cursor-pointer"
			on:click={() => showModal(landingPage.infoVideoLink)}
			on:keydown
		>
			<div class="w-10">{@html Svg.youtubePlay}</div>
		</div></div>
		{/if}
		<InfoText text={landingPage?.infoText1} />
		<span
			on:click={() => (second = true)}
			on:keydown
			class={!second && landingPage.infoText2?.length > 20
				? 'text-black text-xs pt-1 italic block md:hidden'
				: 'hidden'}>{$shared?.readMore}</span
		>
		<div class={!second || !landingPage.infoText2 ? 'hidden md:block' : 'md:block'}>
			{#if landingPage.infoText2 > 5}
				<InfoText text={landingPage?.infoText2} />
			{/if}
		</div>
	</div>
	<div class="w-full h-auto md:w-1/4 pt-10 md:pt-0">
		<img class="h-full object-cover w-fit" src={landingPage?.infoImage} alt="" />
	</div>
</div>
