<script>
	import RestService from '$services/rest';
	import { form2, mailSent } from '$services/store';
	import '$src/app.css';
	import Modal from 'svelte-simple-modal';
	import { modal,modal2, landingPage, shared, reviews, videos, desktop } from '$services/store';
	import { isDesktop } from '$src/lib/utils/isDesktop.js';
	import Header from '$src/lib/components/Layouts/Header.svelte';
	import Footer from '$src/lib/components/Layouts/Footer.svelte';
	import WhatsappButtonReal from '$src/lib/components/WhatsappButtonReal.svelte';
	import Seo from '$src/lib/components/Seo.svelte';
	import SideForm from '$src/lib/components/SideForm.svelte';

	export let data;
	let stopScrollAction;
	desktop.set(isDesktop());
	const getLandingPages = async (lpPerma) => {
		let getLandingPagesResponse = await RestService.getLandingPages(lpPerma);
		if (getLandingPagesResponse['landingPages'] && getLandingPagesResponse['landingPages'][0]) {
			landingPage.set(
				getLandingPagesResponse['landingPages'] && getLandingPagesResponse['landingPages'][0]
			);
			getShareds(getLandingPagesResponse['landingPages'][0].lang);
			getReviews(
				getLandingPagesResponse['landingPages'][0].lang,
				getLandingPagesResponse['landingPages'][0].treatment,
				getLandingPagesResponse['landingPages'][0].treatmentGroup
			);
			getVideos(
				getLandingPagesResponse['landingPages'][0].lang,
				getLandingPagesResponse['landingPages'][0].treatment,
				getLandingPagesResponse['landingPages'][0].treatmentGroup
			);
		}
	};
	const getReviews = async (lang, treatment, treatmentGroup) => {
		let getReviewsResponse = await RestService.getReviews(
			lang,
			undefined,
			undefined,
			treatment,
			treatmentGroup
		);
		reviews.set(getReviewsResponse['reviews']);
	};
	const getShareds = async (lang) => {
		let getSharedsResponse = await RestService.getShareds(lang);
		shared.set(getSharedsResponse['shareds'] && getSharedsResponse['shareds'][0]);
	};
	const getVideos = async (lang, treatment, treatmentGroup) => {
		let getVideosResponse = await RestService.getVideos(
			lang,
			undefined,
			undefined,
			treatment,
			treatmentGroup
		);
		videos.set(getVideosResponse['videos'] && getVideosResponse['videos']);
	};

	getLandingPages(data.lpPerma);


	let scrollPosition;
</script>

<svelte:window bind:scrollY={scrollPosition} />
<Seo metaDescription={$landingPage?.companyShortDesc} metaTitle={$landingPage?.lpTitle} />
<Modal show={$modal} />
<Modal show={$modal2} />

<Header />
<div
	class="w-56 z-40 rounded text-white bottom-5 left-4 transition-all duration-1000 fixed  {scrollPosition >
	100
		? 'opacity-100'
		: 'opacity-0'}"
>
	<WhatsappButtonReal landingPage={$landingPage} />
</div>
<slot />
<Footer />
<div
	class="fixed z-40 -right-20 font-semibold rounded bg-primary top-96 rotate-[270deg] text-white items-center w-52 flex justify-center p-2 cursor-pointer"
	on:click={() => form2.set(!$form2)}
	on:click={() => mailSent.set(!$form2)}
	on:click={() => (stopScrollAction = true)}
	on:keyup
>
	Get Free Consultation
</div>

<div class="fixed top-48 z-30 right-0">
	<SideForm bind:scrollPosition {stopScrollAction} />
</div>
