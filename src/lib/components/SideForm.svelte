<script>
	import { fly } from 'svelte/transition';
	import { form2, landingPage, desktop,modal2 ,noSideBar} from '$services/store';
	import Form from './Form.svelte';
	import Spot from './Spot.svelte';
	form2.set(false);
	export let scrollPosition;
	$: console.log($modal2,"ödps")

	let screenSize;
	export let stopScrollAction;
	$: {
		if (((scrollPosition > -1 && scrollPosition < 10) || (scrollPosition > 4200 && screenSize > 1280)) && $desktop && !$noSideBar) {
			form2.set(true)
		} else {
			if (!stopScrollAction && scrollPosition > 200) {
				form2.set(false);
			}
		}
	}

	if ($desktop) {
		setTimeout(() => {
			form2.set(true);
		}, 1000);
	}
</script>

<svelte:window bind:innerWidth={screenSize} />
{#if $form2 && $landingPage}
	<div transition:fly={{ x: 500, opacity: 1 }} class="">
		<div class="bg-white p-10 mr-12 md:mr-20 shadow-xl rounded-xl">
			<div class=" flex flex-col justify-center items-center ">
				<Spot content={$landingPage?.formSpot} customCss="text-white bg-primary px-1" />

				<p class="py-5 text-4xl font-medium text-black/80">{$landingPage?.formHeader}</p>
			</div>
			<div class="w-[13.5rem] h-68 flex justify-center">
				<Form />
			</div>
		</div>
	</div>
{/if}
