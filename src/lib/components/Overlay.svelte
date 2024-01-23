<script>
	    import { overlay } from "$services/store";
		import { fade } from 'svelte/transition';

</script>
{#if $overlay}
<div transition:fade
		class="absolute top-0 h-full w-full bg-black {$overlay
			? 'opacity-70 z-30'
			: 'opacity-0'}"
	/>
	{/if}