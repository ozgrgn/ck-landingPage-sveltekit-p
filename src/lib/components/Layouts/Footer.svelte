<script>
	import Svg from '$assets/svg.json';
	import GradientBg from '../GradientBg.svelte';
	import { shared, landingPage } from '$services/store';
</script>

{#if $landingPage}
	<footer
		class="relative bg-primary xl:bg-secondary mt-20 px-4 xl:px-0"
		aria-labelledby="footer-heading"
	>
		<GradientBg customCss="opacity-60 hidden xl:block" />
		<!-- <img
		class="absolute opacity-10 h-full w-full object-cover  object-top z-1"
		src="/assets/img/pr-02.jpg"
		alt=""
	/> -->

		<div class="max-w-7xl mx-auto pt-8 pb-4 :py-12  ">
			<div class="md:pb-8 xl:grid xl:grid-cols-6 xl:gap-6">
				<div class="xl:grid xl:col-span-3">
					<div class="first z-20">
						<a
							class="text-white text-sm font-bold leading-relaxed inline-block  whitespace-nowrap uppercase"
							href={'/'}
						>
							<img class="h-14" src={$shared?.logo} alt="ck-health" />
						</a>
						<div class="px-2 pt-2 md:pt-5 ">
							<p class="text-md tracking-tight leading-7 text-white shadows ">
								{$landingPage?.companyShortDesc}
							</p>
						</div>
					</div>
				</div>
				<div class="second z-20 ">
					<h3
						class="h-10 md:h-14  flex flex-col justify-end md:justify-center  text-xl font-semibold text-white"
					>
						{$shared?.links}
					</h3>
					<div class="px-2 lg:pt-5">
						{#if $landingPage}
							<ul>
								<li class="pt-1 {$landingPage.link1 ? 'flex' : 'hidden'}">
									<a
										href={`#${$landingPage?.link1Perma}`}
										class=" text-white text-sm font-semibold pb-1 "
									>
										{$landingPage?.link1}
									</a>
								</li>
								<li class="pt-2 {$landingPage.link2 ? 'flex' : 'hidden'}">
									<a
										href={`#${$landingPage?.link2Perma}`}
										class="{$landingPage.link2Perma
											? 'flex'
											: 'hidden'} text-white text-sm font-semibold pb-1 "
									>
										{$landingPage?.link2}
									</a>
								</li>
								<li class="pt-2 {$landingPage.link3 ? 'flex' : 'hidden'}">
									<a
										href={`#${$landingPage?.link3Perma}`}
										class="{$landingPage.link3Perma
											? 'flex'
											: 'hidden'} text-white text-sm font-semibold pb-1 "
									>
										{$landingPage?.link3}
									</a>
								</li>
								<li class="pt-2 {$landingPage.link4 ? 'flex' : 'hidden'}">
									<a
										href={`#${$landingPage?.link4Perma}`}
										class="{$landingPage.link4Perma
											? 'flex'
											: 'hidden'} text-white text-sm font-semibold pb-1 "
									>
										{$landingPage?.link4}
									</a>
								</li>
								<li class="pt-2 {$landingPage.link5 ? 'flex' : 'hidden'}">
									<a
										href={`#${$landingPage?.link5Perma}`}
										class="{$landingPage.link5Perma
											? 'flex'
											: 'hidden'} text-white text-sm font-semibold pb-1 "
									>
										{$landingPage?.link5}
									</a>
								</li>
							</ul>
						{/if}
					</div>
				</div>
				<div class="third z-20 col-span-2 ">
					<h3
						class="h-10 md:h-14 flex flex-col justify-end md:justify-center text-xl font-semibold text-white"
					>
						{$shared?.contactT}
					</h3>
					<div class="px-2 lg:pt-5 ">
						<ul class="text-white text-sm">
							<li class="">
								<span class="font-semibold pb-1"
									>{$shared?.addressT}:
								</span>{$landingPage?.address1}
								{$landingPage?.address2}
							</li>
							<li class="pt-2">
								<span class="font-semibold pb-1"> {$shared?.emailT}: </span>
								<a href={`mailto:${$landingPage?.email}`}>{$landingPage?.email}</a>
							</li>
							<li class="pt-2">
								<span class="font-semibold pb-1"> {$shared?.phoneT}: </span><a
									href={`tel:${$landingPage?.phone}`}>{$landingPage?.phone}</a
								>
							</li>
							<li class="pt-2">
								<span class="font-semibold pb-1"> {$shared?.whatsappT}: </span><a
									href="https://wa.me/{$landingPage?.whatsapp}"
									>{$landingPage?.whatsapp}
								</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	</footer>
	<div
		class="bg-primary h-20 md:h-12 text-xs flex justify-center items-center text-white py-2 px-2"
	>
		<div class="font-semibold">
			{@html $shared?.copright}
		</div>
	</div>
{/if}

<!-- <div
		class="h-full text-xs md:text-md flex flex-col md:flex-row justify-between items-center container mx-auto"
	>
		<div class="font-semibold pb-2">
			{@html $shared?.copright}
		</div>
		<div class="flex justify-center">
			<a href={$shared?.facebook} class="cursor-pointer pr-6 self-center">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class=" "
					width="25"
					height="25"
					fill="#bc74a5"
					viewBox="0 0 35 35"
				>
					{@html Svg.facebook}
				</svg>
			</a>
			<a href={$shared?.instagram} class="pr-6 self-center">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class=" "
					width="25"
					height="25"
					fill="#0E3055"
					viewBox="0 0 35 35"
				>
					{@html Svg.instagram}
				</svg>
			</a>
			<a href="https://wa.me/{$landingPage?.whatsapp1}" class="pr-6 self-center">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class=""
					width="25"
					height="25"
					fill="#0E3055"
					viewBox="0 0 68 68"
				>
					{@html Svg.whatsapp2}
				</svg>
			</a>
			<a href={$landingPage?.youtube} class="pr-5 self-center">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class=" "
					width="25"
					height="25"
					viewBox="0 0 108 108"
				>
					{@html Svg.youtube}
				</svg>
			</a>
		</div>
	</div> -->
