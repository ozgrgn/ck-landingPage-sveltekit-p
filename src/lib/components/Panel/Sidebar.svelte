<script>
	import { panelDrawer } from '$services/store';
	import SideMenuButton from './SideMenuButton.svelte';

	let innerWidth;
	let oldInnerWidth;
	$: {
		if (oldInnerWidth != innerWidth) {
			if (innerWidth < 1000 && $panelDrawer) {
				panelDrawer.set(false);
			}
			if (innerWidth > 1000 && !$panelDrawer) {
				panelDrawer.set(true);
			}
		}
		oldInnerWidth = innerWidth;
	}
</script>

<svelte:window bind:innerWidth />
<div
	class="fixed transition-all z-[99999] 
  {!$panelDrawer ? 'w-0 hidden' : ''}
  {$panelDrawer ? 'w-[18rem]' : ''}
  bg-[#f6f8fa] h-screen flex flex-row z-[100]"
>
	<div class="w-[18rem] shadow-lg">
		<div class="pt-10 pb-5 flex justify-center">
			<img class=" h-16" src="/assets/img/logo-color.svg" alt="" />
		</div>

		<div class="overflow-y-auto h-[calc(100%-9.75rem)] px-4">
			<div class="rounded bg-neutral p-2 flex flex-col gap-1 mb-2">
				<h2 class="text-black text-bold border-b text-md py-1">LANDING PAGE</h2>
				<SideMenuButton title={'Genel Bilgiler'} href={'/panel/shared'} />
				<div class="" on:click={() => panelDrawer.set(false)}>
					<SideMenuButton title={'LP'} href={'/panel/landingPage'} />
				</div>
				<SideMenuButton title={'Yorumlar'} href={'/panel/review'} />
				<SideMenuButton title={'Videolar'} href={'/panel/video'} />
			</div>

			<!-- <div class="rounded bg-neutral p-2 flex flex-col gap-1 mb-2">
        <h2 class="text-black text-bold border-b text-md py-1">TANIMLAMALAR</h2>

        <SideMenuButton
          icon={"bi bi-tag"}
          title={"Kategoriler"}
          href={"/panel/cats"}
        />
        <SideMenuButton
        icon={"bi bi-bag-heart"}
        title={"Üyelikler"}
        href={"/panel/memberships"}
      />

        <SideMenuButton
        icon={"bi bi-award"}
          title={"Markalar"}
          href={"/panel/brands"}
        />

        <SideMenuButton
        icon={"bi bi-calculator"}
          title={"Birimler"}
          href={"/panel/units"}
        />
      </div>
      <div class="rounded bg-neutral p-2 flex flex-col gap-1 mb-2">
        <h2 class="text-black text-bold border-b text-md py-1">SATIŞ İŞLEMLERİ</h2>

        <SideMenuButton
          icon={"bi bi-cart4"}
          title={"Ürünler"}
          href={"/panel/products"}
        />

        <SideMenuButton
        icon={"bi bi-basket2"}
          title={"Satışlar"}
          href={"/panel/transactions"}
        />

      </div>
      <div class="rounded bg-neutral p-2 flex flex-col gap-1 mb-2">
        <h2 class="text-black text-bold border-b text-md py-1">SİTE VERİLERİ</h2>

        <SideMenuButton
          icon={"bi bi-images"}
          title={"Sliderlar"}
          href={"/panel/sliders"}
        />

      </div> -->
		</div>
	</div>
</div>
