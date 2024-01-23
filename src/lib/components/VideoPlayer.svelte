<script>
	import { videoLink,desktop,noSideBar } from '$services/store';
	import { onDestroy, onMount } from 'svelte';

	onMount(() => {
		noSideBar.set(true)
	})
	onDestroy(() => {
		noSideBar.set(false)
	})
</script>

{#if $videoLink}
{#if $desktop}
	<div class="hidden md:block h-full w-full px-7">
		<iframe
			width="550"
			height="315"
			src={`https://www.youtube.com/embed/${$videoLink}?autoplay=1;controls=1`}
			title="YouTube video player"
			frameborder="0"
			allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
			allowfullscreen
		/>
	</div>
	{:else}
	<div class="block md:hidden flex justify-center h-full w-full pt-8">
		<iframe
			width="320"
			height="300"
			src={`https://www.youtube.com/embed/${$videoLink}?autoplay=1;controls=1`}
			title="YouTube video player"
			frameborder="0"
			allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
			allowfullscreen
		/>
	</div>
	{/if}
{/if}
