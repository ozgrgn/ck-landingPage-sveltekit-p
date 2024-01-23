<script>
	import FeaturesText from './Text/FeaturesText.svelte';

	export let landingPage;
	let activeTab;
</script>

<div class="flex flex-row  font-semibold justify-between text-primary w-full">
	{#if landingPage}
		<h4
			on:click={() => (activeTab = landingPage?.tab1Header)}
			on:keyup
			class="{landingPage?.tab1Header || !activeTab
				? ''
				: 'hidden'} p-2 py-2 w-full transition-all cursor-pointer rounded text-sm  shadow 
       
        {activeTab == landingPage?.tab1Header || !activeTab ? 'border-b-4 border-secondary' : ''} "
		>
			{landingPage?.tab1Header}
		</h4>
		<h4
			on:click={() => (activeTab = landingPage?.tab2Header)}
			on:keyup
			class="{landingPage?.tab2Header
				? ''
				: 'hidden'} p-2 py-2 w-full transition-all cursor-pointer rounded text-sm  shadow 
   
	{activeTab == landingPage?.tab2Header ? 'border-b-4 border-secondary' : ''} "
		>
			{landingPage?.tab2Header}
		</h4>
		<h4
			on:click={() => (activeTab = landingPage?.tab3Header)}
			on:keyup
			class="{landingPage?.tab3Header
				? ''
				: 'hidden'} p-2 py-2 w-full transition-all cursor-pointer rounded text-sm  shadow 

{activeTab == landingPage?.tab3Header ? 'border-b-4 border-secondary' : ''} "
		>
			{landingPage?.tab3Header}
		</h4>
		<h4
			on:click={() => (activeTab = landingPage?.tab4Header)}
			on:keyup
			class="{landingPage?.tab4Header
				? ''
				: 'hidden'} p-2 py-2 w-full transition-all cursor-pointer rounded text-sm  shadow 

{activeTab == landingPage?.tab4Header ? 'border-b-4 border-secondary' : ''} "
		>
			{landingPage?.tab4Header}
		</h4>
		<!-- {#each tabs as tab, i}
			<h4
				on:click={() => (activeTab = tab._id)}
				on:keyup
				class="p-2 py-2 w-full transition-all cursor-pointer rounded text-sm  shadow 
       
        {activeTab == tab._id ? 'border-b-4 border-secondary' : ''} "
			>
				{tab.header}
			</h4>
		{/each} -->
	{/if}
</div>
<div
	class="{activeTab == landingPage?.tab1Header || !activeTab ? '' : 'hidden'} bg-white py-4 h-auto"
>
	<div class="md:flex gap-8">
		<div class="text-sm {landingPage?.tab1Text2 ? 'w-full md:w-1/2' : 'w-full'}">
			<FeaturesText text={landingPage?.tab1Text1} />
		</div>
		<div class={landingPage?.tab1Text2 ? 'text-sm w-full md:w-1/2 pt-4 md:pt-0' : 'hidden'}>
			<FeaturesText text={landingPage?.tab1Text2} />
		</div>
	</div>
</div>
<div class="{activeTab && activeTab == landingPage?.tab2Header ? '' : 'hidden'} bg-white py-4 h-auto">
	<div class="flex gap-8">
		<div class="text-sm {landingPage?.tab2Text2 ? 'w-1/2' : 'w-full'}">
			<FeaturesText text={landingPage?.tab2Text1} />
		</div>
		<div class={landingPage?.tab2Text2 ? 'text-sm w-1/2' : 'hidden'}>
			{@html landingPage?.tab2Text2}
		</div>
	</div>
</div>
<div class="{activeTab && activeTab == landingPage?.tab3Header ? '' : 'hidden'} bg-white py-4 h-auto">
	<div class="flex gap-8">
		<div class="text-sm {landingPage?.tab3Text2 ? 'w-1/2' : 'w-full'}">
			<FeaturesText text={landingPage?.tab3Text1} />
		</div>
		<div class={landingPage?.tab3Text2 ? 'text-sm w-1/2' : 'hidden'}>
			<FeaturesText text={landingPage?.tab3Text2} />
		</div>
	</div>
</div>
<div class="{activeTab && activeTab == landingPage?.tab4Header ? '' : 'hidden'} bg-white py-4 h-full">
	<div class="flex gap-8">
		<div class="text-sm {landingPage?.tab4Text2 ? 'w-1/2' : 'w-full'}">
			<FeaturesText text={landingPage?.tab4Text1} />
		</div>
		<div class={landingPage?.tab4Text2 ? 'text-sm w-1/2' : 'hidden'}>
			<FeaturesText text={landingPage?.tab4Text2} />
		</div>
	</div>
</div>

<!-- {#each tabs as tab, i}
	{#if activeTab == tab._id}
		<div class="bg-white py-4 h-60">
			<div class="flex">
				<div class="text-sm {tab.text2 ? 'w-1/2' : 'w-full'}">
					{@html tab.text1}
				</div>
			</div>
		</div>
	{/if}
{/each} -->
