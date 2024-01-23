<script>
	import { fly } from 'svelte/transition';
	import HtmlText from './HtmlText.svelte';
	import { landingPage } from '$services/store';


let faqs 



const changeFaq = async (landingPage) =>{
	 faqs = [
		{ _id: 1, active: true, question: landingPage?.faq1q, answer: landingPage?.faq1a },
		{ _id: 2, active: false, question: landingPage?.faq2q, answer: landingPage?.faq2a },
		{ _id: 3, active: false, question: landingPage?.faq3q, answer: landingPage?.faq3a },
		{ _id: 4, active: false, question: landingPage?.faq4q, answer: landingPage?.faq4a },
		{ _id: 5, active: false, question: landingPage?.faq5q, answer: landingPage?.faq5a },
		
	];
}
$:changeFaq ($landingPage) 
	const opened = (a) =>
		faqs.map((faq, index) => {
			if (faqs[index]._id == a) {
				faq.active = true;
			} else {
				faqs[index].active = false;
			}
		});
</script>

<div class="">
	{#if faqs}
		{#each faqs as faq}
			{#if faq.question}
				<div class="shadow mt-[0.1rem]  ">
					<button
						on:click={() => opened(faq._id)}
						on:keydown
						class="flex items-center justify-between text-left  w-full p-1"
					>
						<h2 class="text-[0.9rem] tracking-tight text-black w-full z-20 px-2 py-1">
							{faq.question}
						</h2>

						<span class="text-gray-400 bg-gray-200 rounded-full">
							{#if faq.active}
								<svg
									xmlns="http://www.w3.org/2000/svg"
									class="w-5 h-5"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M18 12H6"
									/>
								</svg>
							{:else}
								<svg
									xmlns="http://www.w3.org/2000/svg"
									class="w-5 h-5"
									fill="#005b70"
									viewBox="0 0 24 24"
									stroke="#005b70"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M12 6v6m0 0v6m0-6h6m-6 0H6"
									/>
								</svg>
							{/if}
						</span>
					</button>
					{#if faq.active}
						<div in:fly={{ y: 20, duration: 200 }} class="z-10 px-2">
							<hr class="border-gray-200 z-10" />
							<p class="p-1 text-[0.85rem] z-10">
								<HtmlText text={ faq.answer}/>
							</p>
						</div>
					{/if}
				</div>
			{/if}
		{/each}
	{/if}
</div>
