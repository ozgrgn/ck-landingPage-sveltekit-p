<script>
	import { goto } from '$app/navigation';
	import { shared } from '$services/store';

</script>
{#if $shared}
<div class="w-full h-screen flex flex-col justify-center items-center text-center">
	<h2 class="font-semibold text-3xl text-secondary ">Thanks</h2>
	<p class="text-2xl">{$shared?.sent}</p>
    
	<button
		class="bg-button bg-secondary text-white rounded mt-4 w-64 font-semibold  w-56 py-1 px-1 mt-2"
		on:click={()=>goto('https://ckhealthturkey.com/')}
	>
		Home Page
	</button>
</div>
{/if}