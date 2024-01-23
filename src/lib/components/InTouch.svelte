<script>
	import Form from '$components/Form.svelte';
	import GradientBg from '$components//GradientBg.svelte';
	import Spot from '$components//Spot.svelte';
export let landingPage;


</script>

<div id="guess" />

<div class="flex w-full relative md:h-[40rem] lg:h-screen  items-center justify-center ">
	<img class="hidden md:block h-full object-cover w-full" src="/assets/img/formBg.jpg" alt="" />

	<div class="absolute">
		<div class="relative w-full flex justify-center ">
			<div class="flex ">
				<div class="relative h-[35rem] w-[22rem] hidden lg:block">
					<GradientBg />
					<div
						class="absolute uppercase w-full text-white/90 px-20 py-48 text-center text-2xl font-bold top-0 leading-16"
					>
						<h4>
							<span class="text-6xl">{landingPage?.formSlogan1}</span>
						</h4>
						<h2 class="text-2xl">{landingPage?.formSlogan2}<br />{landingPage?.formSlogan3}</h2>
						<a href="https://wa.me/{landingPage?.whatsapp}?text={landingPage?.formWhatsappText}">
							<button
								class="w-full bg-primary  shadow border-white  text-sm text-white  font-semibold py-2 rounded my-5"
							>
								{landingPage?.formButton}
							</button>
						</a>
					</div>
				</div>
				<div class="relative h-[35rem] w-full md:w-[44rem] bg-white/90">
					<div class="absolute left-0 w-full md:w-[44rem] py-20">
						<div class=" flex flex-col justify-center items-center">
							<Spot content={landingPage?.formSpot} customCss="text-white bg-primary px-1" />

							<p class="py-5 text-5xl font-medium text-black/80">{landingPage?.formHeader}</p>
						</div>
						<div class="mx-12 ">
							<Form />
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
