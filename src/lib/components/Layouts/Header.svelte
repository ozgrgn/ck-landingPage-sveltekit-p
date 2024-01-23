<script>
	import Svg from '$assets/svg.json';

	import { navbar, landingPage, shared } from '$services/store';

	$: navbarOpen = false;
	const langTrigger = (_lang) => {
		document.documentElement.setAttribute('lang', _lang);
		setTimeout(() => {
			lang.set(_lang);
		}, 1); // cause svelte is faster than browser
	};
	const navbarTrigger = (_navbarOpen) => {
		document.documentElement.setAttribute('navbarOpen', _navbarOpen);
		setTimeout(() => {
			navbar.set(_navbarOpen);
		}, 1);
	};
	let showSubMenu = false;
	let showSub2Menu;

	function toggleModal() {
		showSubMenu = !showSubMenu;
	}
	function closeModal() {}
	export let menu;

	function setNavbarClose() {
		navbarOpen = false;
		navbarTrigger(navbarOpen);
	}

	function setNavbarOpen() {
		navbarOpen = !navbarOpen;
		navbarTrigger(navbarOpen);
	}
</script>

<!-- {$lang} -->

<!-- <p>{hakkimizda[`${$lang}_title`]}</p> -->
<nav
	class="top-0 absolute right-0 z-50 w-full flex  items-center justify-between px-4 lg:mr-3 my-3 navbar-expand-lg"
>
	<div class="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
		<div
			class="text-white text-sm font-bold leading-relaxed inline-block ml-6 py-2 whitespace-nowrap uppercase"
		>
			<img class="h-auto w-36" src={$shared?.logo} alt="ck-health" />
		</div>
		<button
			class="cursor-pointer text-xl text-white leading-none px-2 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
			type="button"
			on:click={setNavbarOpen}
		>
			<i class="fas fa-bars" />
		</button>
	</div>

	<ul class=" hidden lg:flex inline-block relative z-20 ">
		<li
			class="{$landingPage?.link1Perma
				? 'flex'
				: 'hidden'} text-white px-2 py-2 items-center text-sm uppercase font-bold"
		>
			<div class="{$landingPage?.link1 ? 'flex' : 'hidden'} cursor-pointer">
				<a href={`#${$landingPage?.link1Perma}`}>{$landingPage?.link1}</a>
			</div>
		</li>
		<li
			class="{$landingPage?.link2Perma
				? 'flex'
				: 'hidden'} text-white px-2 py-2 items-center text-sm uppercase font-bold"
		>
			<div class="{$landingPage?.link2 ? 'flex' : 'hidden'} cursor-pointer">
				<a href={`#${$landingPage?.link2Perma}`}>{$landingPage?.link2}</a>
			</div>
		</li>
		<li
			class="{$landingPage?.link3Perma
				? 'flex'
				: 'hidden'} text-white px-2 py-2 items-center text-sm uppercase font-bold"
		>
			<div class="{$landingPage?.link3 ? 'flex' : 'hidden'} cursor-pointer">
				<a href={`#${$landingPage?.link3Perma}`}>{$landingPage?.link3}</a>
			</div>
		</li>
		<li
			class="{$landingPage?.link4Perma
				? 'flex'
				: 'hidden'} text-white px-2 py-2 items-center text-sm uppercase font-bold"
		>
			<div class=" {$landingPage?.link4 ? 'flex' : 'hidden'} cursor-pointer">
				<a href={`#${$landingPage?.link4Perma}`}>{$landingPage?.link4}</a>
			</div>
		</li>
		<li
			class="{$landingPage?.link5Perma
				? 'flex'
				: 'hidden'} text-white px-2 py-2  items-center text-sm uppercase font-bold"
		>
			<div class="{$landingPage?.link5 ? 'flex' : 'hidden'} cursor-pointer">
				<a href={`#${$landingPage?.link5Perma}`}>{$landingPage?.link5}</a>
			</div>
		</li>
	</ul>
</nav>
