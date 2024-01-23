<script>
	import { Splide, SplideSlide } from '@splidejs/svelte-splide';
	import '@splidejs/svelte-splide/css';
	import PopupButton from '../PopupButton.svelte';
	import SliderText from '../Text/SliderText.svelte';
	import WhatsappButton from '../WhatsappButton.svelte';
	import { desktop } from '$services/store';
	import MobSliderText from '../Text/MobSliderText.svelte';

	export let landingPage;
</script>

<Splide
	aria-label="My Favorite Images"
	options={{
		type: 'slide',
		perPage: 1,
		arrows: false,
		pagination: false,
		autoplay: true
	}}
>
	{#if landingPage}
		<SplideSlide>
			<div class="h-screen overflow-hidden relative">
				<img
					class="im h-screen w-full object-cover transition-all ease-in delay-150 duration-1000 focus:scale-150"
					src={$desktop ? landingPage?.slider1Image : landingPage?.slider1MobileImage}
					alt={landingPage?.slider1Name}
				/>

				<div
					class="absolute bottom-5 md:top-72 {landingPage?.slider1Direction == 'left'
						? 'md:left-20'
						: landingPage?.slider1Direction == 'right'
						? 'md:right-20'
						: 'left-0'} w-full"
				>
					<div class={`text-${landingPage?.slider1Direction}`}>
						<div class="hidden md:block">
							<SliderText
								textColor={landingPage?.slider1TextColor}
								text={landingPage?.slider1Text}
							/>
						</div>
						<div class="px-4 block md:hidden">
							<MobSliderText
								textColor={landingPage?.slider1TextColor}
								text={landingPage?.slider1Text}
							/>
						</div>
						<div
							class="px-4 md:px-0 flex gap-4 pb-10 {landingPage?.slider1Direction == 'center'
								? 'justify-center'
								: ''}"
						>
							<PopupButton
								buttonText={landingPage?.slider1Button}
								customCss=" text-sm h-9 rounded px-4 py-2 text-white my-2 "
								buttonColor={landingPage?.slider1ButtonColor}
								textColor={landingPage?.slider1ButtonTextColor}
							/>
							{#if landingPage?.slider1Whatsapp}
								<WhatsappButton customCss="text-sm rounded h-9 px-4 text-white my-2" />
							{/if}
						</div>
					</div>
				</div>
			</div>
		</SplideSlide>
		{#if landingPage?.slider2Image}
		<SplideSlide>
			<div class="h-screen overflow-hidden relative">
				<img
					class="im h-screen w-full object-cover transition-all ease-in delay-150 duration-1000 focus:scale-150"
					src={$desktop ? landingPage?.slider2Image : landingPage?.slider2MobileImage}
					alt={landingPage?.slider2Name}
				/>

				<div
					class="absolute bottom-5 md:top-72 {landingPage?.slider2Direction == 'left'
						? 'md:left-20'
						: landingPage?.slider2Direction == 'right'
						? 'md:right-20'
						: 'left-0'} w-full"
				>
					<div class={`text-${landingPage?.slider2Direction}`}>
						<div class="hidden md:block">
							<SliderText
								textColor={landingPage?.slider2TextColor}
								text={landingPage?.slider2Text}
							/>
						</div>
						<div class="px-4 block md:hidden">
							<MobSliderText
								textColor={landingPage?.slider2TextColor}
								text={landingPage?.slider2Text}
							/>
						</div>
						<div
							class="px-4 md:px-0 flex gap-4 pb-10 {landingPage?.slider2Direction == 'center'
								? 'justify-center'
								: ''}"
						>
							<PopupButton
								buttonText={landingPage?.slider2Button}
								customCss=" text-sm h-9 rounded px-4 py-2 text-white my-2 "
								buttonColor={landingPage?.slider2ButtonColor}
								textColor={landingPage?.slider2ButtonTextColor}
							/>
							{#if landingPage?.slider2Whatsapp}
								<WhatsappButton customCss="text-sm rounded h-9 px-4 text-white my-2" />
							{/if}
						</div>
					</div>
				</div>
			</div>
		</SplideSlide>
		{/if}
		{#if landingPage?.slider3Image}
		<SplideSlide>
			<div class="h-screen overflow-hidden relative">
				<img
					class="im h-screen w-full object-cover transition-all ease-in delay-150 duration-1000 focus:scale-150"
					src={$desktop ? landingPage?.slider3Image : landingPage?.slider3MobileImage}
					alt={landingPage?.slider3Name}
				/>

				<div
					class="absolute bottom-5 md:top-72 {landingPage?.slider3Direction == 'left'
						? 'md:left-20'
						: landingPage?.slider3Direction == 'right'
						? 'md:right-20'
						: 'left-0'} w-full"
				>
					<div class={`text-${landingPage?.slider3Direction}`}>
						<div class="hidden md:block">
							<SliderText
								textColor={landingPage?.slider3TextColor}
								text={landingPage?.slider3Text}
							/>
						</div>
						<div class="px-4 block md:hidden">
							<MobSliderText
								textColor={landingPage?.slider3TextColor}
								text={landingPage?.slider3Text}
							/>
						</div>
						<div
							class="px-4 md:px-0 flex gap-4 pb-10 {landingPage?.slider3Direction == 'center'
								? 'justify-center'
								: ''}"
						>
							<PopupButton
								buttonText={landingPage?.slider3Button}
								customCss=" text-sm h-9 rounded px-4 py-2 text-white my-2 "
								buttonColor={landingPage?.slider3ButtonColor}
								textColor={landingPage?.slider3ButtonTextColor}
							/>
							{#if landingPage?.slider3Whatsapp}
								<WhatsappButton customCss="text-sm rounded h-9 px-4 text-white my-2" />
							{/if}
						</div>
					</div>
				</div>
			</div>
		</SplideSlide>
		{/if}
	{/if}
</Splide>

<style>
	.im {
		animation: zoom 30s infinite;
	}
	@keyframes -global-zoom {
		0%,
		100% {
			transform: scale(1);
		}
		50% {
			transform: scale(1.2);
		}
	}
</style>
