<script>
	import { goto } from '$app/navigation';
	import RestService from '$services/rest';
	import Input from '$src/lib/components/Form/Input.svelte';
	import Select from '$src/lib/components/Form/Select.svelte';
	import { TranslateApiMessage, Translate } from '$services/language';
	import ToastService from '$services/toast';
	import Image from '$src/lib/components/Form/Image.svelte';
	import TextEditor from '$src/lib/components/Form/TextEditor.svelte';
	import Textarea from '$src/lib/components/Form/Textarea.svelte';
	import Switch from '$src/lib/components/Form/Switch.svelte';
	import ColorInput from '$src/lib/components/Form/ColorInput.svelte';

	const deleteLandingPageApprove = (landingPageId) => {
		modal.set(
			bind(Alert, {
				message: 'Bu işlemi onaylıyor musunuz ?',
				answer: (message) => {
					if (message) {
						deleteLandingPage(landingPageId);
					}
					modal.set(null);
				}
			})
		);
	};
	let langs;
	const getLangs = async () => {
		let response = await RestService.getLanguages(undefined, undefined);
		langs = response['languages'];
	};
	getLangs();
	export let data;

	let landingPage;

	let values = [
		{ key: 'lang', customValue: null },
		{ key: 'lpPerma', customValue: null },
		{ key: 'lpName', customValue: null },
		{ key: 'lpTitle', customValue: null },
		{ key: 'treatment', customValue: null },
		{ key: 'treatmentGroup', customValue: null },

		{ key: 'infoSpot', customValue: null },
		{ key: 'infoText1', customValue: null },
		{ key: 'infoText2', customValue: null },
		{ key: 'infoImage', customValue: null },
		{ key: 'infoVideoLink', customValue: null },
		{ key: 'infoVideoImage', customValue: null },

		{ key: 'slider1Name', customValue: null },
		{ key: 'slider1Image', customValue: null },
		{ key: 'slider1MobileImage', customValue: null },
		{ key: 'slider1Text', customValue: null },
		{ key: 'slider1Button', customValue: null },
		{ key: 'slider1Whatsapp', customValue: null },
		{ key: 'slider1ButtonColor', customValue: null },
		{ key: 'slider1Direction', customValue: null },
		{ key: 'slider1ButtonTextColor', customValue: null },
		{ key: 'slider1TextColor', customValue: null },

		{ key: 'slider2Name', customValue: null },
		{ key: 'slider2Image', customValue: null },
		{ key: 'slider2MobileImage', customValue: null },
		{ key: 'slider2Text', customValue: null },
		{ key: 'slider2Button', customValue: null },
		{ key: 'slider2Whatsapp', customValue: null },
		{ key: 'slider2ButtonColor', customValue: null },
		{ key: 'slider2Direction', customValue: null },
		{ key: 'slider2ButtonTextColor', customValue: null },
		{ key: 'slider2TextColor', customValue: null },

		{ key: 'slider3Name', customValue: null },
		{ key: 'slider3Image', customValue: null },
		{ key: 'slider3MobileImage', customValue: null },
		{ key: 'slider3Text', customValue: null },
		{ key: 'slider3Button', customValue: null },
		{ key: 'slider3Whatsapp', customValue: null },
		{ key: 'slider3ButtonColor', customValue: null },
		{ key: 'slider3Direction', customValue: null },
		{ key: 'slider3ButtonTextColor', customValue: null },
		{ key: 'slider3TextColor', customValue: null },

		{ key: 'formSlogan1', customValue: null },
		{ key: 'formSlogan2', customValue: null },
		{ key: 'formSlogan3', customValue: null },
		{ key: 'formButton', customValue: null },
		{ key: 'formSpot', customValue: null },
		{ key: 'formHeader', customValue: null },
		{ key: 'formWhatsappText', customValue: null },

		{ key: 'featuresSpot', customValue: null },
		{ key: 'featuresHeader', customValue: null },
		{ key: 'features1Image', customValue: null },
		{ key: 'features1Header', customValue: null },
		{ key: 'features1Text', customValue: null },
		{ key: 'features2Image', customValue: null },
		{ key: 'features2Header', customValue: null },
		{ key: 'features2Text', customValue: null },

		{ key: 'isFaq', customValue: null },
		{ key: 'faq1q', customValue: null },
		{ key: 'faq1a', customValue: null },
		{ key: 'faq2q', customValue: null },
		{ key: 'faq2a', customValue: null },
		{ key: 'faq3q', customValue: null },
		{ key: 'faq3a', customValue: null },
		{ key: 'faq4q', customValue: null },
		{ key: 'faq4a', customValue: null },
		{ key: 'faq5q', customValue: null },
		{ key: 'faq5a', customValue: null },

		{ key: 'isTab', customValue: null },
		{ key: 'tab1Header', customValue: null },
		{ key: 'tab1Text1', customValue: null },
		{ key: 'tab1Text2', customValue: null },
		{ key: 'tab1Image', customValue: null },
		{ key: 'tab2Header', customValue: null },
		{ key: 'tab2Text1', customValue: null },
		{ key: 'tab2Text2', customValue: null },
		{ key: 'tab2Image', customValue: null },
		{ key: 'tab3Header', customValue: null },
		{ key: 'tab3Text1', customValue: null },
		{ key: 'tab3Text2', customValue: null },
		{ key: 'tab3Image', customValue: null },
		{ key: 'tab4Header', customValue: null },
		{ key: 'tab4Text1', customValue: null },
		{ key: 'tab4Text2', customValue: null },
		{ key: 'tab4Image', customValue: null },

		{ key: 'testimonialSpot', customValue: null },
		{ key: 'testimonialHeader', customValue: null },
		{ key: 'videoSpot', customValue: null },
		{ key: 'videoHeader', customValue: null },
		{ key: 'link1', customValue: null },
		{ key: 'link1Perma', customValue: null },
		{ key: 'link2', customValue: null },
		{ key: 'link2Perma', customValue: null },
		{ key: 'link3', customValue: null },
		{ key: 'link3Perma', customValue: null },
		{ key: 'link4', customValue: null },
		{ key: 'link4Perma', customValue: null },

		{ key: 'companyShortDesc', customValue: null },
		{ key: 'address1', customValue: null },
		{ key: 'address2', customValue: null },
		{ key: 'email', customValue: null },
		{ key: 'phone', customValue: null },
		{ key: 'whatsapp', customValue: null },
		{ key: 'wpMessage', customValue: null },
		{ key: 'infoWithSliderImage1', customValue: null },
		{ key: 'infoWithSliderImage2', customValue: null },
		{ key: 'infoWithSliderImage3', customValue: null },
		{ key: 'infoWithSliderSpot', customValue: null },
		{ key: 'infoWithSliderHeader', customValue: null },
		{ key: 'infoWithSliderText', customValue: null },

		{ key: 'infoWithVideoSpot', customValue: null },
		{ key: 'infoWithVideoHeader', customValue: null },
		{ key: 'infoWithVideoVideoImage', customValue: null },
		{ key: 'infoWithVideoVideoName', customValue: null },
		{ key: 'infoWithVideoVideoLink', customValue: null },
		{ key: 'infoWithVideoText', customValue: null },
		
		{ key: 'beforeAfterHeader', customValue: null },
		{ key: 'beforeAfterSpot', customValue: null },
		{ key: 'firstBefore', customValue: null },
		{ key: 'firstAfter', customValue: null },
		{ key: 'secondBefore', customValue: null },
		{ key: 'secondAfter', customValue: null },
		{ key: 'thirdBefore', customValue: null },
		{ key: 'thirdAfter', customValue: null }
	];
	let directions = [
		{ key: 'left', value: 'Sol' },
		{ key: 'center', value: 'Orta' },
		{ key: 'right', value: 'Sağ' }
	];
	let treatments;
	let treatmentGroups;
	const updateLandingPage = async () => {
		let editedLandingPage = {};
		values.map((v) => {
			editedLandingPage[v.key] = landingPage[v.key].value;
		});

		let response = await RestService.updateLandingPage(landingPage._id, editedLandingPage);
		if (response['status']) {
			ToastService.success('Kayıt Başarılı');
			goto('/panel/landingPage');
		} else {
			ToastService.error($TranslateApiMessage(response.message));
		}
	};

	const getLandingPage = async () => {
		let response = await RestService.getLandingPage(data.landingPageId);

		if (response['status']) {
			values.map((v) => {
				if (v.customValue) {
					response['landingPage'][v.key] = {
						value: response['landingPage'][v.key][v.customValue]
					};
				} else {
					response['landingPage'][v.key] = { value: response['landingPage'][v.key] };
				}
			});
			landingPage = {
				...response['landingPage']
			};
		} else {
			ToastService.error($TranslateApiMessage(response.message));
		}
	};

	getLandingPage();

	const deleteLandingPage = async (landingPageId) => {
		let response = await RestService.deleteLandingPage(landingPageId);
		if (response['status']) {
			ToastService.success('İşlem başarılı');
			navigate('/panel/landingPage');
		} else {
			ToastService.success('İşlem başarılı');
		}
	};
	const getTreatments = async () => {
		let response = await RestService.getTreatments(undefined, undefined);
		treatments = response['treatments'];
	};
	getTreatments();

	const getTreatmentGroups = async () => {
		let response = await RestService.getTreatmentGroups(undefined, undefined);
		treatmentGroups = response['treatmentGroups'];
	};
	getTreatmentGroups();
	let page = 'genel';
</script>

<div class="flex flex-wrap mt-4 h-screen relative">
	<div class="w-full mb-12 px-2 lg:px-4 ">
		<div class="flex justify-between">
			<button
				class="bg-white text-blue-600 hover:text-red-700 mb-2 border rounded font-bold text-xs px-4 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 "
				type="button"
				on:click={() => {
					goto('/panel/landingPage');
				}}
			>
				<i class="fa fa-arrow-left" />
				Geri
			</button>

			<button
				class="bg-white text-blue-600 hover:text-red-700 mb-2 border rounded font-bold text-xs px-4 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 "
				type="button"
				on:click={() => deleteLandingPageApprove(data.landingPageId)}
			>
				<i class="fa fa-trash" />
				Sil
			</button>
		</div>

		<div
			class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded bg-gray-100"
		>
			<div class="flex justify-center pt-2">
				<button
					class="{page == 'genel'
						? 'border-primary bg-primary'
						: 'bg-secondary border-secondary hover:text-primary hover:shadow-lg '} text-white   mb-2 border  rounded font-bold  text-xs px-4 py-2 rounded shadow outline-none focus:outline-none mr-1 "
					type="button"
					on:click={() => {
						page = 'genel';
					}}
				>
					Genel
				</button>
				<button
					class="{page == 'slider'
						? 'border-primary bg-primary'
						: 'bg-secondary border-secondary hover:text-primary hover:shadow-lg '} text-white   mb-2 border  rounded font-bold  text-xs px-4 py-2 rounded shadow outline-none focus:outline-none mr-1 "
					type="button"
					on:click={() => {
						page = 'slider';
					}}
				>
					Slider
				</button>
				<button
					class="{page == 'info'
						? 'border-primary bg-primary'
						: 'bg-secondary border-secondary hover:text-primary hover:shadow-lg '} text-white   mb-2 border  rounded font-bold  text-xs px-4 py-2 rounded shadow outline-none focus:outline-none mr-1 "
					type="button"
					on:click={() => {
						page = 'info';
					}}
				>
					Info
				</button>
				<button
					class="{page == 'form'
						? 'border-primary bg-primary'
						: 'bg-secondary border-secondary hover:text-primary hover:shadow-lg '} text-white   mb-2 border  rounded font-bold  text-xs px-4 py-2 rounded shadow outline-none focus:outline-none mr-1 "
					type="button"
					on:click={() => {
						page = 'form';
					}}
				>
					Form
				</button>
				<button
					class="{page == 'features'
						? 'border-primary bg-primary'
						: 'bg-secondary border-secondary hover:text-primary hover:shadow-lg '} text-white   mb-2 border  rounded font-bold  text-xs px-4 py-2 rounded shadow outline-none focus:outline-none mr-1 "
					type="button"
					on:click={() => {
						page = 'features';
					}}
				>
					Özellikler
				</button>
				<button
					class="{page == 'faq'
						? 'border-primary bg-primary'
						: 'bg-secondary border-secondary hover:text-primary hover:shadow-lg '} text-white   mb-2 border  rounded font-bold  text-xs px-4 py-2 rounded shadow outline-none focus:outline-none mr-1 "
					type="button"
					on:click={() => {
						page = 'faq';
					}}
				>
					SSS {landingPage && landingPage.isFaq.value == true ? '*' : ''}
				</button>
				<button
					class="{page == 'tab'
						? 'border-primary bg-primary'
						: 'bg-secondary border-secondary hover:text-primary hover:shadow-lg '} text-white   mb-2 border  rounded font-bold  text-xs px-4 py-2 rounded shadow outline-none focus:outline-none mr-1 "
					type="button"
					on:click={() => {
						page = 'tab';
					}}
				>
					TAB {landingPage && landingPage.isTab.value == true ? '*' : ''}
				</button>
				<button
					class="{page == 'reviews'
						? 'border-primary bg-primary'
						: 'bg-secondary border-secondary hover:text-primary hover:shadow-lg '} text-white   mb-2 border  rounded font-bold  text-xs px-4 py-2 rounded shadow outline-none focus:outline-none mr-1 "
					type="button"
					on:click={() => {
						page = 'reviews';
					}}
				>
					Yorum
				</button>
				<button
					class="{page == 'links'
						? 'border-primary bg-primary'
						: 'bg-secondary border-secondary hover:text-primary hover:shadow-lg '} text-white   mb-2 border  rounded font-bold  text-xs px-4 py-2 rounded shadow outline-none focus:outline-none mr-1 "
					type="button"
					on:click={() => {
						page = 'links';
					}}
				>
					Linkler
				</button>

				<button
					class="{page == 'sliderInfo'
						? 'border-primary bg-primary'
						: 'bg-secondary border-secondary hover:text-primary hover:shadow-lg '} text-white   mb-2 border  rounded font-bold  text-xs px-4 py-2 rounded shadow outline-none focus:outline-none mr-1 "
					type="button"
					on:click={() => {
						page = 'sliderInfo';
					}}
				>
					Sliderlı Info
				</button>
				<button
					class="{page == 'videoInfo'
						? 'border-primary bg-primary'
						: 'bg-secondary border-secondary hover:text-primary hover:shadow-lg '} text-white   mb-2 border  rounded font-bold  text-xs px-4 py-2 rounded shadow outline-none focus:outline-none mr-1 "
					type="button"
					on:click={() => {
						page = 'videoInfo';
					}}
				>
					Videolu Info
				</button>
				<button
					class="{page == 'beforeAfter'
						? 'border-primary bg-primary'
						: 'bg-secondary border-secondary hover:text-primary hover:shadow-lg '} text-white   mb-2 border  rounded font-bold  text-xs px-4 py-2 rounded shadow outline-none focus:outline-none mr-1 "
					type="button"
					on:click={() => {
						page = 'beforeAfter';
					}}
				>
					Before After
				</button>
			</div>
			<div class="rounded-t mb-0 px-4 py-3 border-0">
				<!-- <div class="text-center flex justify-between">
					<h3 class="font-semibold text-lg text-blueGray-700">Genel Bilgileri güncelle</h3>
				</div> -->
			</div>
			{#if landingPage}
				<div class="flex-auto px-4 lg:px-10 py-10 pt-0">
					<div class="{page == 'slider' ? 'flex' : 'hidden'}  flex-wrap my-4">
						<div class="w-full lg:w-6/12 flex flex-wrap">
							<div class="w-full lg:w-9/12 px-4 ">
								<div class="relative w-full mb-3">
									<label class="block text-blueGray-600 text-xs font-bold mb-2" for="grid-name">
										Slide 1 İsim
									</label>
									<Input
										bind:value={landingPage.slider1Name.value}
										bind:isValid={landingPage.slider1Name.isValid}
										placeholder={'Slide 1 İsim'}
										required={false}
									/>
								</div>
							</div>
							<div class="w-full lg:w-3/12 px-4">
								<div class="relative w-full mb-3">
									<label class="block text-blueGray-600 text-xs font-bold mb-2" for="grid-name">
										Metin Rengi
									</label>
									<ColorInput
										bind:value={landingPage.slider1TextColor.value}
										bind:isValid={landingPage.slider1TextColor.isValid}
										required={false}
									/>
								</div>
							</div>
							<div class="w-full lg:w-6/12 px-4">
								<div class="relative w-full mb-3">
									<label class="block text-blueGray-600 text-xs font-bold mb-2" for="grid-name">
										Slide 1 Button
									</label>
									<Input
										bind:value={landingPage.slider1Button.value}
										bind:isValid={landingPage.slider1Button.isValid}
										placeholder={'Slide 1 Button'}
										required={false}
									/>
								</div>
							</div>
							<div class="w-full lg:w-3/12 px-4">
								<div class="relative w-full mb-3">
									<label class="block text-blueGray-600 text-xs font-bold mb-2" for="grid-name">
										Fon Rengi
									</label>
									<ColorInput
										bind:value={landingPage.slider1ButtonColor.value}
										bind:isValid={landingPage.slider1ButtonColor.isValid}
										required={false}
									/>
								</div>
							</div>
							<div class="w-full lg:w-3/12 px-4">
								<div class="relative w-full mb-3">
									<label class="block text-blueGray-600 text-xs font-bold mb-2" for="grid-name">
										Yazı Rengi
									</label>
									<ColorInput
										bind:value={landingPage.slider1ButtonTextColor.value}
										bind:isValid={landingPage.slider1ButtonTextColor.isValid}
										required={false}
									/>
								</div>
							</div>

							<div class="w-full lg:w-6/12 px-4">
								<div class="relative w-full mb-3">
									<label class="block text-blueGray-600 text-xs font-bold mb-2" for="grid-name">
										Whatsapp
									</label>
									<Switch bind:value={landingPage.slider1Whatsapp.value} required={false} />
								</div>
							</div>

							<div class="w-full lg:w-6/12 px-4">
								<div class="relative w-full mb-3">
									<label class="block text-blueGray-600 text-xs font-bold mb-2" for="grid-name">
										Slide 1 Yönü
									</label>
									<Select
										bind:value={landingPage.slider1Direction.value}
										bind:isValid={landingPage.slider1Direction.isValid}
										values={directions}
										title={'Yön Seçin'}
										valuesKey={'key'}
										valuesTitleKey={'value'}
										customClass={'w-full'}
									/>
								</div>
							</div>
							<div class="w-full lg:w-6/12 px-4">
								<div class="relative w-full mb-3">
									<label class="block text-blueGray-600 text-xs font-bold mb-2" for="grid-name">
										Slide 1 Resim Desktop (1512x467)
									</label>
									<Image
										bind:value={landingPage.slider1Image.value}
										bind:isValid={landingPage.slider1Image.isValid}
									/>
								</div>
							</div>

							<div class="w-full lg:w-6/12 px-4">
								<div class="relative w-full mb-3">
									<label class="block text-blueGray-600 text-xs font-bold mb-2" for="grid-name">
										Slide 1 Resim Mobile (-)
									</label>
									<Image
										bind:value={landingPage.slider1MobileImage.value}
										bind:isValid={landingPage.slider1MobileImage.isValid}
									/>
								</div>
							</div>
						</div>
						<div class="w-full lg:w-6/12 px-4 self-center">
							<div class="relative w-full mb-3">
								<label class="block text-blueGray-600 text-xs font-bold mb-2" for="grid-name">
									Slider 1 Metin
								</label>
								<TextEditor
									bind:value={landingPage.slider1Text.value}
									bind:incomingValue={landingPage.slider1Text.value}
									placeholder={'Slider 1 Metin'}
									required={false}
								/>
							</div>
						</div>
						<!-- SLİDE 2 -->

						<div class="w-full lg:w-6/12 flex flex-wrap">
							<div class="w-full lg:w-9/12 px-4 ">
								<div class="relative w-full mb-3">
									<label class="block text-blueGray-600 text-xs font-bold mb-2" for="grid-name">
										Slide 2 İsim
									</label>
									<Input
										bind:value={landingPage.slider2Name.value}
										bind:isValid={landingPage.slider2Name.isValid}
										placeholder={'Slide 2 İsim'}
										required={false}
									/>
								</div>
							</div>
							<div class="w-full lg:w-3/12 px-4">
								<div class="relative w-full mb-3">
									<label class="block text-blueGray-600 text-xs font-bold mb-2" for="grid-name">
										Metin Rengi
									</label>
									<ColorInput
										bind:value={landingPage.slider2TextColor.value}
										bind:isValid={landingPage.slider2TextColor.isValid}
										required={false}
									/>
								</div>
							</div>
							<div class="w-full lg:w-6/12 px-4">
								<div class="relative w-full mb-3">
									<label class="block text-blueGray-600 text-xs font-bold mb-2" for="grid-name">
										Slide 2 Button
									</label>
									<Input
										bind:value={landingPage.slider2Button.value}
										bind:isValid={landingPage.slider2Button.isValid}
										placeholder={'Slide 2 Button'}
										required={false}
									/>
								</div>
							</div>
							<div class="w-full lg:w-3/12 px-4">
								<div class="relative w-full mb-3">
									<label class="block text-blueGray-600 text-xs font-bold mb-2" for="grid-name">
										Fon Rengi
									</label>
									<ColorInput
										bind:value={landingPage.slider2ButtonColor.value}
										bind:isValid={landingPage.slider2ButtonColor.isValid}
										required={false}
									/>
								</div>
							</div>
							<div class="w-full lg:w-3/12 px-4">
								<div class="relative w-full mb-3">
									<label class="block text-blueGray-600 text-xs font-bold mb-2" for="grid-name">
										Yazı Rengi
									</label>
									<ColorInput
										bind:value={landingPage.slider2ButtonTextColor.value}
										bind:isValid={landingPage.slider2ButtonTextColor.isValid}
										required={false}
									/>
								</div>
							</div>

							<div class="w-full lg:w-6/12 px-4">
								<div class="relative w-full mb-3">
									<label class="block text-blueGray-600 text-xs font-bold mb-2" for="grid-name">
										Whatsapp
									</label>
									<Switch bind:value={landingPage.slider2Whatsapp.value} required={false} />
								</div>
							</div>

							<div class="w-full lg:w-6/12 px-4">
								<div class="relative w-full mb-3">
									<label class="block text-blueGray-600 text-xs font-bold mb-2" for="grid-name">
										Slide 2 Yönü
									</label>
									<Select
										bind:value={landingPage.slider2Direction.value}
										bind:isValid={landingPage.slider2Direction.isValid}
										values={directions}
										title={'Yön Seçin'}
										valuesKey={'key'}
										valuesTitleKey={'value'}
										customClass={'w-full'}
									/>
								</div>
							</div>
							<div class="w-full lg:w-6/12 px-4">
								<div class="relative w-full mb-3">
									<label class="block text-blueGray-600 text-xs font-bold mb-2" for="grid-name">
										Slide 2 Resim Desktop (1512x467)
									</label>
									<Image
										bind:value={landingPage.slider2Image.value}
										bind:isValid={landingPage.slider2Image.isValid}
									/>
								</div>
							</div>

							<div class="w-full lg:w-6/12 px-4">
								<div class="relative w-full mb-3">
									<label class="block text-blueGray-600 text-xs font-bold mb-2" for="grid-name">
										Slide 2 Resim Mobile (-)
									</label>
									<Image
										bind:value={landingPage.slider2MobileImage.value}
										bind:isValid={landingPage.slider2MobileImage.isValid}
									/>
								</div>
							</div>
						</div>
						<div class="w-full lg:w-6/12 px-4 self-center">
							<div class="relative w-full mb-3">
								<label class="block text-blueGray-600 text-xs font-bold mb-2" for="grid-name">
									Slider 2 Metin
								</label>
								<TextEditor
									bind:value={landingPage.slider2Text.value}
									bind:incomingValue={landingPage.slider2Text.value}
									placeholder={'Slider 1 Metin'}
									required={false}
								/>
							</div>
						</div>
						<!-- SLİDE 3 -->

						<div class="w-full lg:w-6/12 flex flex-wrap">
							<div class="w-full lg:w-9/12 px-4 ">
								<div class="relative w-full mb-3">
									<label class="block text-blueGray-600 text-xs font-bold mb-2" for="grid-name">
										Slide 3 İsim
									</label>
									<Input
										bind:value={landingPage.slider3Name.value}
										bind:isValid={landingPage.slider3Name.isValid}
										placeholder={'Slide 3 İsim'}
										required={false}
									/>
								</div>
							</div>
							<div class="w-full lg:w-3/12 px-4">
								<div class="relative w-full mb-3">
									<label class="block text-blueGray-600 text-xs font-bold mb-2" for="grid-name">
										Metin Rengi
									</label>
									<ColorInput
										bind:value={landingPage.slider3TextColor.value}
										bind:isValid={landingPage.slider3TextColor.isValid}
										required={false}
									/>
								</div>
							</div>
							<div class="w-full lg:w-6/12 px-4">
								<div class="relative w-full mb-3">
									<label class="block text-blueGray-600 text-xs font-bold mb-2" for="grid-name">
										Slide 3 Button
									</label>
									<Input
										bind:value={landingPage.slider3Button.value}
										bind:isValid={landingPage.slider3Button.isValid}
										placeholder={'Slide 3 Button'}
										required={false}
									/>
								</div>
							</div>
							<div class="w-full lg:w-3/12 px-4">
								<div class="relative w-full mb-3">
									<label class="block text-blueGray-600 text-xs font-bold mb-2" for="grid-name">
										Fon Rengi
									</label>
									<ColorInput
										bind:value={landingPage.slider3ButtonColor.value}
										bind:isValid={landingPage.slider3ButtonColor.isValid}
										required={false}
									/>
								</div>
							</div>
							<div class="w-full lg:w-3/12 px-4">
								<div class="relative w-full mb-3">
									<label class="block text-blueGray-600 text-xs font-bold mb-2" for="grid-name">
										Yazı Rengi
									</label>
									<ColorInput
										bind:value={landingPage.slider3ButtonTextColor.value}
										bind:isValid={landingPage.slider3ButtonTextColor.isValid}
										required={false}
									/>
								</div>
							</div>

							<div class="w-full lg:w-6/12 px-4">
								<div class="relative w-full mb-3">
									<label class="block text-blueGray-600 text-xs font-bold mb-2" for="grid-name">
										Whatsapp
									</label>
									<Switch bind:value={landingPage.slider3Whatsapp.value} required={false} />
								</div>
							</div>

							<div class="w-full lg:w-6/12 px-4">
								<div class="relative w-full mb-3">
									<label class="block text-blueGray-600 text-xs font-bold mb-2" for="grid-name">
										Slide 3 Yönü
									</label>
									<Select
										bind:value={landingPage.slider3Direction.value}
										bind:isValid={landingPage.slider3Direction.isValid}
										values={directions}
										title={'Yön Seçin'}
										valuesKey={'key'}
										valuesTitleKey={'value'}
										customClass={'w-full'}
									/>
								</div>
							</div>
							<div class="w-full lg:w-6/12 px-4">
								<div class="relative w-full mb-3">
									<label class="block text-blueGray-600 text-xs font-bold mb-2" for="grid-name">
										Slide 3 Resim Desktop (1512x467)
									</label>
									<Image
										bind:value={landingPage.slider3Image.value}
										bind:isValid={landingPage.slider3Image.isValid}
									/>
								</div>
							</div>

							<div class="w-full lg:w-6/12 px-4">
								<div class="relative w-full mb-3">
									<label class="block text-blueGray-600 text-xs font-bold mb-2" for="grid-name">
										Slide 3 Resim Mobile (-)
									</label>
									<Image
										bind:value={landingPage.slider3MobileImage.value}
										bind:isValid={landingPage.slider3MobileImage.isValid}
									/>
								</div>
							</div>
						</div>
						<div class="w-full lg:w-6/12 px-4 self-center">
							<div class="relative w-full mb-3">
								<label class="block text-blueGray-600 text-xs font-bold mb-2" for="grid-name">
									Slider 3 Metin
								</label>
								<TextEditor
									bind:value={landingPage.slider3Text.value}
									bind:incomingValue={landingPage.slider3Text.value}
									placeholder={'Slider 1 Metin'}
									required={false}
								/>
							</div>
						</div>
					</div>
					<div class="{page == 'genel' ? 'flex' : 'hidden'}  flex-wrap my-4">
						<div class="w-full lg:w-12/12 flex flex-wrap">
							<div class="w-full lg:w-2/12 px-4 self-center">
								<div class="relative w-full mb-3">
									<label class="block text-blueGray-600 text-xs font-bold mb-2" for="grid-name">
										Dil
									</label>
									{#if langs}
										<Select
											bind:value={landingPage.lang.value}
											bind:isValid={landingPage.lang.isValid}
											values={langs}
											title={'Dil Seçin'}
											valuesKey={'lang'}
											valuesTitleKey={'name'}
											customClass={'w-full'}
										/>
									{/if}
								</div>
							</div>
							<div class="w-full lg:w-2/12 px-4 ">
								<div class="relative w-full mb-3">
									<label class="block text-blueGray-600 text-xs font-bold mb-2" for="grid-name">
										Lp Perma
									</label>
									<Input
										bind:value={landingPage.lpPerma.value}
										bind:isValid={landingPage.lpPerma.isValid}
										placeholder={'(bariatric-surgery)'}
										required={false}
									/>
								</div>
							</div>
							<div class="w-full lg:w-3/12 px-4 ">
								<div class="relative w-full mb-3">
									<label class="block text-blueGray-600 text-xs font-bold mb-2" for="grid-name">
										Lp İsmi (Bilgi İçin)
									</label>
									<Input
										bind:value={landingPage.lpName.value}
										bind:isValid={landingPage.lpName.isValid}
										placeholder={'Bariatric Surgery İlk Kampanya'}
										required={false}
									/>
								</div>
							</div>

							<div class="w-full lg:w-2/12 px-4 self-center">
								<div class="relative w-full mb-3">
									<label class="block text-blueGray-600 text-xs font-bold mb-2" for="grid-name">
										Tedavi Kategorisi
									</label>
									{#if treatmentGroups}
										<Select
											bind:value={landingPage.treatmentGroup.value}
											bind:isValid={landingPage.treatmentGroup.isValid}
											values={treatmentGroups}
											title={'Tedavi Kategorisi Seçin'}
											valuesKey={'_id'}
											valuesTitleKey={'name'}
											customClass={'w-full'}
										/>
									{/if}
								</div>
							</div>
							<div class="w-full lg:w-3/12 px-4 self-center">
								<div class="relative w-full mb-3">
									<label class="block text-blueGray-600 text-xs font-bold mb-2" for="grid-name">
										Tedavi
									</label>
									{#if treatments}
										<Select
											bind:value={landingPage.treatment.value}
											bind:isValid={landingPage.treatment.isValid}
											values={treatments}
											title={'Tedavi Seçin'}
											valuesKey={'_id'}
											valuesTitleKey={'name'}
											customClass={'w-full'}
										/>
									{/if}
								</div>
							</div>
							<div class="w-full lg:w-12/12 px-4 ">
								<div class="relative w-full mb-3">
									<label class="block text-blueGray-600 text-xs font-bold mb-2" for="grid-name">
										Meta Başlığı Max 60 ({landingPage?.lpTitle?.value?.length
											? landingPage?.lpTitle?.value?.length
											: 0})
									</label>
									<Input
										bind:value={landingPage.lpTitle.value}
										bind:isValid={landingPage.lpTitle.isValid}
										placeholder={'(Bariatric Surgery Turkey | CK Health Turkey)'}
										required={false}
									/>
								</div>
							</div>
							<div class="w-full lg:w-12/12 px-4 ">
								<div class="relative w-full mb-3">
									<label class="block text-blueGray-600 text-xs font-bold mb-2" for="grid-name">
										Şirket Kısa Açıklaması Max 250 ({landingPage?.companyShortDesc?.value?.length
											? landingPage?.companyShortDesc?.value?.length
											: 0})
									</label>
									<Textarea
										bind:value={landingPage.companyShortDesc.value}
										bind:isValid={landingPage.companyShortDesc.isValid}
										placeholder={'Şirket Kısa Açıklaması (Footer İçin)'}
										required={false}
									/>
								</div>
							</div>
							<div class="w-full lg:w-6/12 px-4 ">
								<div class="relative w-full mb-3">
									<label class="block text-blueGray-600 text-xs font-bold mb-2" for="grid-name">
										Adres 1
									</label>
									<Input
										bind:value={landingPage.address1.value}
										bind:isValid={landingPage.address1.isValid}
										placeholder={'Adres 1'}
										required={false}
									/>
								</div>
							</div>
							<div class="w-full lg:w-6/12 px-4 ">
								<div class="relative w-full mb-3">
									<label class="block text-blueGray-600 text-xs font-bold mb-2" for="grid-name">
										Adres 2
									</label>
									<Input
										bind:value={landingPage.address2.value}
										bind:isValid={landingPage.address2.isValid}
										placeholder={'Adres 2'}
										required={false}
									/>
								</div>
							</div>
							<div class="w-full lg:w-4/12 px-4 ">
								<div class="relative w-full mb-3">
									<label class="block text-blueGray-600 text-xs font-bold mb-2" for="grid-name">
										E-mail
									</label>
									<Input
										bind:value={landingPage.email.value}
										bind:isValid={landingPage.email.isValid}
										placeholder={'info@ckhealthturkey.com'}
										required={false}
									/>
								</div>
							</div>
							<div class="w-full lg:w-4/12 px-4 ">
								<div class="relative w-full mb-3">
									<label class="block text-blueGray-600 text-xs font-bold mb-2" for="grid-name">
										Phone
									</label>
									<Input
										bind:value={landingPage.phone.value}
										bind:isValid={landingPage.phone.isValid}
										placeholder={'(+44 7488 818605)'}
										required={false}
									/>
								</div>
							</div>
							<div class="w-full lg:w-4/12 px-4 ">
								<div class="relative w-full mb-3">
									<label class="block text-blueGray-600 text-xs font-bold mb-2" for="grid-name">
										Whatsapp
									</label>
									<Input
										bind:value={landingPage.whatsapp.value}
										bind:isValid={landingPage.whatsapp.isValid}
										placeholder={'(+905422656402)'}
										required={false}
									/>
								</div>
							</div>
							<div class="w-full lg:w-12/12 px-4 ">
								<div class="relative w-full mb-3">
									<label class="block text-blueGray-600 text-xs font-bold mb-2" for="grid-name">
										Whatsapp Mesajı
									</label>
									<Input
										bind:value={landingPage.wpMessage.value}
										bind:isValid={landingPage.wpMessage.isValid}
										placeholder={'(I want to get information about weight loss surgery prices)'}
										required={false}
									/>
								</div>
							</div>
						</div>
					</div>
					<div class="{page == 'info' ? 'flex' : 'hidden'}  flex-wrap my-4">
						<div class="w-full lg:w-12/12 flex flex-wrap">
							<div class="w-full lg:w-3/12 px-4 ">
								<div class="relative w-full mb-3">
									<label class="block text-blueGray-600 text-xs font-bold mb-2" for="grid-name">
										Info Spot
									</label>
									<Input
										bind:value={landingPage.infoSpot.value}
										bind:isValid={landingPage.infoSpot.isValid}
										placeholder={'(WHEIGHT LOSS SURGERY)'}
										required={false}
									/>
								</div>
							</div>
							<div class="w-full lg:w-3/12 px-4">
								<div class="relative w-full mb-3">
									<label class="block text-blueGray-600 text-xs font-bold mb-2" for="grid-name">
										Info Resim (306x428)
									</label>
									<Image
										bind:value={landingPage.infoImage.value}
										bind:isValid={landingPage.infoImage.isValid}
									/>
								</div>
							</div>
							<div class="w-full lg:w-3/12 px-4 ">
								<div class="relative w-full mb-3">
									<label class="block text-blueGray-600 text-xs font-bold mb-2" for="grid-name">
										Video Linki
									</label>
									<Input
										bind:value={landingPage.infoVideoLink.value}
										bind:isValid={landingPage.infoVideoLink.isValid}
										placeholder={'(JUHM4ek9K08)'}
										required={false}
									/>
								</div>
							</div>
							<div class="w-full lg:w-3/12 px-4">
								<div class="relative w-full mb-3">
									<label class="block text-blueGray-600 text-xs font-bold mb-2" for="grid-name">
										Video Resim (640x360)
									</label>
									<Image
										bind:value={landingPage.infoVideoImage.value}
										bind:isValid={landingPage.infoVideoImage.isValid}
									/>
								</div>
							</div>
							<div class="w-full lg:w-6/12 px-4 ">
								<div class="relative w-full mb-3">
									<label class="block text-blueGray-600 text-xs font-bold mb-2" for="grid-name">
										Info Text 1
									</label>
									<TextEditor
										bind:value={landingPage.infoText1.value}
										bind:incomingValue={landingPage.infoText1.value}
										placeholder={'Info Metin 1'}
										required={false}
									/>
								</div>
							</div>
							<div class="w-full lg:w-6/12 px-4 ">
								<div class="relative w-full mb-3">
									<label class="block text-blueGray-600 text-xs font-bold mb-2" for="grid-name">
										Info Text 2 (Mobilde Gizli)
									</label>
									<TextEditor
										bind:value={landingPage.infoText2.value}
										bind:incomingValue={landingPage.infoText2.value}
										placeholder={'Info Metin 2'}
										required={false}
									/>
								</div>
							</div>
						</div>
					</div>
					<div class="{page == 'form' ? 'flex' : 'hidden'}  flex-wrap my-4">
						<div class="w-full lg:w-12/12 flex flex-wrap">
							<div class="w-full lg:w-4/12 px-4 ">
								<div class="relative w-full mb-3">
									<label class="block text-blueGray-600 text-xs font-bold mb-2" for="grid-name">
										From Spot
									</label>
									<Input
										bind:value={landingPage.formSpot.value}
										bind:isValid={landingPage.formSpot.isValid}
										placeholder={'(STAY IN CONTACT)'}
										required={false}
									/>
								</div>
							</div>
							<div class="w-full lg:w-6/12 px-4 ">
								<div class="relative w-full mb-3">
									<label class="block text-blueGray-600 text-xs font-bold mb-2" for="grid-name">
										Form Başlığı
									</label>
									<Input
										bind:value={landingPage.formHeader.value}
										bind:isValid={landingPage.formHeader.isValid}
										placeholder={'(Get in Touch)'}
										required={false}
									/>
								</div>
							</div>
							<div class="w-full lg:w-3/12 px-4 ">
								<div class="relative w-full mb-3">
									<label class="block text-blueGray-600 text-xs font-bold mb-2" for="grid-name">
										Form Slogan 1
									</label>
									<Input
										bind:value={landingPage.formSlogan1.value}
										bind:isValid={landingPage.formSlogan1.isValid}
										placeholder={'(GET)'}
										required={false}
									/>
								</div>
							</div>
							<div class="w-full lg:w-6/12 px-4 ">
								<div class="relative w-full mb-3">
									<label class="block text-blueGray-600 text-xs font-bold mb-2" for="grid-name">
										From Slogan 2
									</label>
									<Input
										bind:value={landingPage.formSlogan2.value}
										bind:isValid={landingPage.formSlogan2.isValid}
										placeholder={'(DETAILED INFORMATION ABOUT)'}
										required={false}
									/>
								</div>
							</div>
							<div class="w-full lg:w-3/12 px-4 ">
								<div class="relative w-full mb-3">
									<label class="block text-blueGray-600 text-xs font-bold mb-2" for="grid-name">
										From Slogan 3
									</label>
									<Input
										bind:value={landingPage.formSlogan3.value}
										bind:isValid={landingPage.formSlogan3.isValid}
										placeholder={'(WHEIGHT LOSS SURGERY)'}
										required={false}
									/>
								</div>
							</div>

							<div class="w-full lg:w-6/12 px-4 ">
								<div class="relative w-full mb-3">
									<label class="block text-blueGray-600 text-xs font-bold mb-2" for="grid-name">
										Form Button
									</label>
									<Input
										bind:value={landingPage.formButton.value}
										bind:incomingValue={landingPage.formButton.value}
										placeholder={'Form Button'}
										required={false}
									/>
								</div>
							</div>
							<div class="w-full lg:w-6/12 px-4 ">
								<div class="relative w-full mb-3">
									<label class="block text-blueGray-600 text-xs font-bold mb-2" for="grid-name">
										Whatsapp Mesajı
									</label>
									<Textarea
										bind:value={landingPage.formWhatsappText.value}
										placeholder={'Whatsapp Mesajı'}
										required={false}
									/>
								</div>
							</div>
						</div>
					</div>
					<div class="{page == 'features' ? 'flex' : 'hidden'}  flex-wrap my-4">
						<div class="w-full lg:w-12/12 flex flex-wrap">
							<div class="w-full lg:w-4/12 px-4 ">
								<div class="relative w-full mb-3">
									<label class="block text-blueGray-600 text-xs font-bold mb-2" for="grid-name">
										Özellikler Spot
									</label>
									<Input
										bind:value={landingPage.featuresSpot.value}
										bind:isValid={landingPage.featuresSpot.isValid}
										placeholder={'(WEIGHT LOSS SURGERY)'}
										required={false}
									/>
								</div>
							</div>
							<div class="w-full lg:w-8/12 px-4 ">
								<div class="relative w-full mb-3">
									<label class="block text-blueGray-600 text-xs font-bold mb-2" for="grid-name">
										Özellikler Başlığı
									</label>
									<Input
										bind:value={landingPage.featuresHeader.value}
										bind:isValid={landingPage.formHeader.isValid}
										placeholder={'(Why should you choose CK Health Turkey?)'}
										required={false}
									/>
								</div>
							</div>
							<div class="w-full lg:w-6/12 flex flex-wrap">
								<div class="w-full lg:w-12/12 px-4 ">
									<div class="relative w-full mb-3">
										<label class="block text-blueGray-600 text-xs font-bold mb-2" for="grid-name">
											Özellik 1 Başlığı
										</label>
										<Input
											bind:value={landingPage.features1Header.value}
											bind:isValid={landingPage.features1Header.isValid}
											placeholder={'(Best Hospital Options)'}
											required={false}
										/>
									</div>
								</div>
								<div class="w-full lg:w-12/12 px-4">
									<div class="relative w-full mb-3">
										<label class="block text-blueGray-600 text-xs font-bold mb-2" for="grid-name">
											Özellik 1 Resim (304x203)
										</label>
										<Image
											bind:value={landingPage.features1Image.value}
											bind:isValid={landingPage.features1Image.isValid}
										/>
									</div>
								</div>
							</div>
							<div class="w-full lg:w-6/12 px-4 ">
								<div class="relative w-full mb-3">
									<label class="block text-blueGray-600 text-xs font-bold mb-2" for="grid-name">
										Özellik 1 Text
									</label>
									<TextEditor
										bind:value={landingPage.features1Text.value}
										bind:incomingValue={landingPage.features1Text.value}
										placeholder={'Özellik 1 Metin'}
										required={false}
									/>
								</div>
							</div>
							<div class="w-full lg:w-6/12 flex flex-wrap">
								<div class="w-full lg:w-12/12 px-4 ">
									<div class="relative w-full mb-3">
										<label class="block text-blueGray-600 text-xs font-bold mb-2" for="grid-name">
											Özellik 2 Başlığı
										</label>
										<Input
											bind:value={landingPage.features2Header.value}
											bind:isValid={landingPage.features2Header.isValid}
											placeholder={'(Super Mega Doctors)'}
											required={false}
										/>
									</div>
								</div>
								<div class="w-full lg:w-12/12 px-4">
									<div class="relative w-full mb-3">
										<label class="block text-blueGray-600 text-xs font-bold mb-2" for="grid-name">
											Özellik 2 Resim (304x203)
										</label>
										<Image
											bind:value={landingPage.features2Image.value}
											bind:isValid={landingPage.features2Image.isValid}
										/>
									</div>
								</div>
							</div>
							<div class="w-full lg:w-6/12 px-4 ">
								<div class="relative w-full mb-3">
									<label class="block text-blueGray-600 text-xs font-bold mb-2" for="grid-name">
										Özellik 2 Text
									</label>
									<TextEditor
										bind:value={landingPage.features2Text.value}
										bind:incomingValue={landingPage.features2Text.value}
										placeholder={'Özellik 2 Metin'}
										required={false}
									/>
								</div>
							</div>
						</div>
					</div>
					<div class="{page == 'faq' ? 'flex' : 'hidden'}  flex-wrap my-4">
						<div class="w-full lg:w-12/12 flex flex-wrap">
							<div class="w-full lg:w-12/12 px-4 self-center ">
								<div class="relative w-full mb-3 flex flex-col items-center ">
									<label class="block text-blueGray-600 text-xs font-bold mb-2" for="grid-name">
										Faq Mı Çıksın?
									</label>
									<Switch bind:value={landingPage.isFaq.value} />
								</div>
							</div>
							<div class="w-full lg:w-12/12 px-4 ">
								<div class="relative w-full mb-3">
									<label class="block text-blueGray-600 text-xs font-bold mb-2" for="grid-name">
										Soru 1
									</label>
									<Input
										bind:value={landingPage.faq1q.value}
										bind:isValid={landingPage.faq1q.isValid}
										placeholder={'Soru 1'}
										required={false}
									/>
								</div>
							</div>
							<div class="w-full lg:w-12/12 px-4 ">
								<div class="relative w-full mb-3">
									<label class="block text-blueGray-600 text-xs font-bold mb-2" for="grid-name">
										Cevap 1
									</label>
									<Textarea
										customClass="h-20"
										bind:value={landingPage.faq1a.value}
										bind:isValid={landingPage.faq1a.isvalid}
										type="text"
										name="message"
										placeholder={'Cevap 1'}
									/>
								</div>
							</div>
							<div class="w-full lg:w-12/12 px-4 ">
								<div class="relative w-full mb-3">
									<label class="block text-blueGray-600 text-xs font-bold mb-2" for="grid-name">
										Soru 1
									</label>
									<Input
										bind:value={landingPage.faq2q.value}
										bind:isValid={landingPage.faq2q.isValid}
										placeholder={'Soru 2'}
										required={false}
									/>
								</div>
							</div>
							<div class="w-full lg:w-12/12 px-4 ">
								<div class="relative w-full mb-3">
									<label class="block text-blueGray-600 text-xs font-bold mb-2" for="grid-name">
										Cevap 2
									</label>
									<Textarea
										customClass="h-20"
										bind:value={landingPage.faq2a.value}
										bind:isValid={landingPage.faq2a.isvalid}
										type="text"
										name="message"
										placeholder={'Cevap 2'}
									/>
								</div>
							</div>
							<div class="w-full lg:w-12/12 px-4 ">
								<div class="relative w-full mb-3">
									<label class="block text-blueGray-600 text-xs font-bold mb-2" for="grid-name">
										Soru 3
									</label>
									<Input
										bind:value={landingPage.faq3q.value}
										bind:isValid={landingPage.faq3q.isValid}
										placeholder={'Soru 3'}
										required={false}
									/>
								</div>
							</div>
							<div class="w-full lg:w-12/12 px-4 ">
								<div class="relative w-full mb-3">
									<label class="block text-blueGray-600 text-xs font-bold mb-2" for="grid-name">
										Cevap 3
									</label>
									<Textarea
										customClass="h-20"
										bind:value={landingPage.faq3a.value}
										bind:isValid={landingPage.faq3a.isvalid}
										type="text"
										name="message"
										placeholder={'Cevap 3'}
									/>
								</div>
							</div>
							<div class="w-full lg:w-12/12 px-4 ">
								<div class="relative w-full mb-3">
									<label class="block text-blueGray-600 text-xs font-bold mb-2" for="grid-name">
										Soru 4
									</label>
									<Input
										bind:value={landingPage.faq4q.value}
										bind:isValid={landingPage.faq4q.isValid}
										placeholder={'Soru 4'}
										required={false}
									/>
								</div>
							</div>
							<div class="w-full lg:w-12/12 px-4 ">
								<div class="relative w-full mb-3">
									<label class="block text-blueGray-600 text-xs font-bold mb-2" for="grid-name">
										Cevap 4
									</label>
									<Textarea
										customClass="h-20"
										bind:value={landingPage.faq4a.value}
										bind:isValid={landingPage.faq4a.isvalid}
										type="text"
										name="message"
										placeholder={'Cevap 4'}
									/>
								</div>
							</div>
							<div class="w-full lg:w-12/12 px-4 ">
								<div class="relative w-full mb-3">
									<label class="block text-blueGray-600 text-xs font-bold mb-2" for="grid-name">
										Soru 5
									</label>
									<Input
										bind:value={landingPage.faq5q.value}
										bind:isValid={landingPage.faq5q.isValid}
										placeholder={'Soru 5'}
										required={false}
									/>
								</div>
							</div>
							<div class="w-full lg:w-12/12 px-4 ">
								<div class="relative w-full mb-3">
									<label class="block text-blueGray-600 text-xs font-bold mb-2" for="grid-name">
										Cevap 5
									</label>
									<Textarea
										customClass="h-20"
										bind:value={landingPage.faq5a.value}
										bind:isValid={landingPage.faq5a.isvalid}
										type="text"
										name="message"
										placeholder={'Cevap 5'}
									/>
								</div>
							</div>
						</div>
					</div>
					<div class="{page == 'tab' ? 'flex' : 'hidden'}  flex-wrap my-4">
						<div class="w-full lg:w-12/12 flex flex-wrap">
							<div class="w-full lg:w-12/12 px-4 self-center ">
								<div class="relative w-full mb-3 flex flex-col items-center ">
									<label class="block text-blueGray-600 text-xs font-bold mb-2" for="grid-name">
										Tab Mı Çıksın?
									</label>
									<Switch bind:value={landingPage.isTab.value} />
								</div>
							</div>
							<div class="w-full lg:w-12/12 ">
								<div class="w-full lg:w-6/12 px-4 ">
									<div class="relative w-full mb-3">
										<label class="block text-blueGray-600 text-xs font-bold mb-2" for="grid-name">
											Tab 1 Başlık
										</label>
										<Input
											bind:value={landingPage.tab1Header.value}
											bind:isValid={landingPage.tab1Header.isValid}
											placeholder={'(Credit Options)'}
											required={false}
										/>
									</div>
								</div>
							</div>
							<div class="w-full lg:w-6/12 px-4 self-center">
								<div class="relative w-full mb-3">
									<label class="block text-blueGray-600 text-xs font-bold mb-2" for="grid-name">
										Tab 1 Text 1
									</label>
									<TextEditor
										bind:value={landingPage.tab1Text1.value}
										bind:incomingValue={landingPage.tab1Text1.value}
										placeholder={'Tab 1 1.Metin'}
										required={false}
									/>
								</div>
							</div>
							<div class="w-full lg:w-6/12 px-4 self-center">
								<div class="relative w-full mb-3">
									<label class="block text-blueGray-600 text-xs font-bold mb-2" for="grid-name">
										Tab1 Text 2
									</label>
									<TextEditor
										bind:value={landingPage.tab1Text2.value}
										bind:incomingValue={landingPage.tab1Text2.value}
										placeholder={'Tab 1 2.Metin'}
										required={false}
									/>
								</div>
							</div>

							<div class="w-full lg:w-12/12 ">
								<div class="w-full lg:w-6/12 px-4 ">
									<div class="relative w-full mb-3">
										<label class="block text-blueGray-600 text-xs font-bold mb-2" for="grid-name">
											Tab 2 Başlık
										</label>
										<Input
											bind:value={landingPage.tab2Header.value}
											bind:isValid={landingPage.tab2Header.isValid}
											placeholder={'(Credit Options)'}
											required={false}
										/>
									</div>
								</div>
							</div>
							<div class="w-full lg:w-6/12 px-4 self-center">
								<div class="relative w-full mb-3">
									<label class="block text-blueGray-600 text-xs font-bold mb-2" for="grid-name">
										Tab2 Text 1
									</label>
									<TextEditor
										bind:value={landingPage.tab2Text1.value}
										bind:incomingValue={landingPage.tab2Text1.value}
										placeholder={'Tab 2 1.Metin'}
										required={false}
									/>
								</div>
							</div>
							<div class="w-full lg:w-6/12 px-4 self-center">
								<div class="relative w-full mb-3">
									<label class="block text-blueGray-600 text-xs font-bold mb-2" for="grid-name">
										Tab2 Text 2
									</label>
									<TextEditor
										bind:value={landingPage.tab2Text2.value}
										bind:incomingValue={landingPage.tab2Text2.value}
										placeholder={'Tab 2 2.Metin'}
										required={false}
									/>
								</div>
							</div>
							<div class="w-full lg:w-12/12 ">
								<div class="w-full lg:w-6/12 px-4 ">
									<div class="relative w-full mb-3">
										<label class="block text-blueGray-600 text-xs font-bold mb-2" for="grid-name">
											Tab 3 Başlık
										</label>
										<Input
											bind:value={landingPage.tab3Header.value}
											bind:isValid={landingPage.tab3Header.isValid}
											placeholder={'(Credit Options)'}
											required={false}
										/>
									</div>
								</div>
							</div>
							<div class="w-full lg:w-6/12 px-4 self-center">
								<div class="relative w-full mb-3">
									<label class="block text-blueGray-600 text-xs font-bold mb-2" for="grid-name">
										Tab3 Text 1
									</label>
									<TextEditor
										bind:value={landingPage.tab3Text1.value}
										bind:incomingValue={landingPage.tab3Text1.value}
										placeholder={'Tab 3 1.Metin'}
										required={false}
									/>
								</div>
							</div>
							<div class="w-full lg:w-6/12 px-4 self-center">
								<div class="relative w-full mb-3">
									<label class="block text-blueGray-600 text-xs font-bold mb-2" for="grid-name">
										Tab3 Text 2
									</label>
									<TextEditor
										bind:value={landingPage.tab3Text2.value}
										bind:incomingValue={landingPage.tab3Text2.value}
										placeholder={'Tab 3 2.Metin'}
										required={false}
									/>
								</div>
							</div>
							<div class="w-full lg:w-12/12 ">
								<div class="w-full lg:w-6/12 px-4 ">
									<div class="relative w-full mb-3">
										<label class="block text-blueGray-600 text-xs font-bold mb-2" for="grid-name">
											Tab 4 Başlık
										</label>
										<Input
											bind:value={landingPage.tab4Header.value}
											bind:isValid={landingPage.tab4Header.isValid}
											placeholder={'(Credit Options)'}
											required={false}
										/>
									</div>
								</div>
							</div>
							<div class="w-full lg:w-6/12 px-4 self-center">
								<div class="relative w-full mb-3">
									<label class="block text-blueGray-600 text-xs font-bold mb-2" for="grid-name">
										Tab1 Text 4
									</label>
									<TextEditor
										bind:value={landingPage.tab4Text1.value}
										bind:incomingValue={landingPage.tab4Text1.value}
										placeholder={'Tab 4 1.Metin'}
										required={false}
									/>
								</div>
							</div>
							<div class="w-full lg:w-6/12 px-4 self-center">
								<div class="relative w-full mb-3">
									<label class="block text-blueGray-600 text-xs font-bold mb-2" for="grid-name">
										Tab4 Text 2
									</label>
									<TextEditor
										bind:value={landingPage.tab4Text2.value}
										bind:incomingValue={landingPage.tab4Text2.value}
										placeholder={'Tab 4 2.Metin'}
										required={false}
									/>
								</div>
							</div>
						</div>
					</div>
					<div class="{page == 'reviews' ? 'flex' : 'hidden'}  flex-wrap my-4">
						<div class="w-full lg:w-12/12 flex flex-wrap">
							<div class="w-full lg:w-6/12 px-4 ">
								<div class="relative w-full mb-3">
									<label class="block text-blueGray-600 text-xs font-bold mb-2" for="grid-name">
										Yorum Spot
									</label>
									<Input
										bind:value={landingPage.testimonialSpot.value}
										bind:isValid={landingPage.testimonialSpot.isValid}
										placeholder={'(WEIGHT LOSS)'}
										required={false}
									/>
								</div>
							</div>
							<div class="w-full lg:w-6/12 px-4 ">
								<div class="relative w-full mb-3">
									<label class="block text-blueGray-600 text-xs font-bold mb-2" for="grid-name">
										Yorum Header
									</label>
									<Input
										bind:value={landingPage.testimonialHeader.value}
										bind:isValid={landingPage.testimonialHeader.isValid}
										placeholder={'(Reviews From Our Patients)'}
										required={false}
									/>
								</div>
							</div>
						</div>
						<div class="w-full lg:w-12/12 flex flex-wrap">
							<div class="w-full lg:w-6/12 px-4 ">
								<div class="relative w-full mb-3">
									<label class="block text-blueGray-600 text-xs font-bold mb-2" for="grid-name">
										Yorum Spot
									</label>
									<Input
										bind:value={landingPage.videoSpot.value}
										bind:isValid={landingPage.videoSpot.isValid}
										placeholder={'(WEIGHT LOSS)'}
										required={false}
									/>
								</div>
							</div>
							<div class="w-full lg:w-6/12 px-4 ">
								<div class="relative w-full mb-3">
									<label class="block text-blueGray-600 text-xs font-bold mb-2" for="grid-name">
										Yorum Header
									</label>
									<Input
										bind:value={landingPage.videoHeader.value}
										bind:isValid={landingPage.videoHeader.isValid}
										placeholder={'(Videos From Our Patients)'}
										required={false}
									/>
								</div>
							</div>
						</div>
					</div>
					<div class="{page == 'links' ? 'flex' : 'hidden'}  flex-wrap my-4">
						<div class="w-full lg:w-12/12 flex flex-wrap">
							<div class="w-full lg:w-3/12 px-4 ">
								<div class="relative w-full mb-3">
									<label class="block text-blueGray-600 text-xs font-bold mb-2" for="grid-name">
										About Link
									</label>
									<Input
										bind:value={landingPage.link1.value}
										bind:isValid={landingPage.link1.isValid}
										placeholder={'(CK Health Turkey)'}
										required={false}
									/>
								</div>
							</div>
							<div class="w-full lg:w-3/12 px-4 ">
								<div class="relative w-full mb-3">
									<label class="block text-blueGray-600 text-xs font-bold mb-2" for="grid-name">
										About Perma
									</label>
									<Input
										bind:value={landingPage.link1Perma.value}
										bind:isValid={landingPage.link1Perma.isValid}
										placeholder={'(ck-health-turkey)'}
										required={false}
									/>
								</div>
							</div>
							<div class="w-full lg:w-3/12 px-4 ">
								<div class="relative w-full mb-3">
									<label class="block text-blueGray-600 text-xs font-bold mb-2" for="grid-name">
										Form Link
									</label>
									<Input
										bind:value={landingPage.link2.value}
										bind:isValid={landingPage.link2.isValid}
										placeholder={'(Get in Touch)'}
										required={false}
									/>
								</div>
							</div>
							<div class="w-full lg:w-3/12 px-4 ">
								<div class="relative w-full mb-3">
									<label class="block text-blueGray-600 text-xs font-bold mb-2" for="grid-name">
										Form Perma
									</label>
									<Input
										bind:value={landingPage.link2Perma.value}
										bind:isValid={landingPage.link2Perma.isValid}
										placeholder={'(get-in-touch)'}
										required={false}
									/>
								</div>
							</div>
							<div class="w-full lg:w-3/12 px-4 ">
								<div class="relative w-full mb-3">
									<label class="block text-blueGray-600 text-xs font-bold mb-2" for="grid-name">
										Treatment Link
									</label>
									<Input
										bind:value={landingPage.link3.value}
										bind:isValid={landingPage.link3.isValid}
										placeholder={'(Weight Loss Surgery)'}
										required={false}
									/>
								</div>
							</div>
							<div class="w-full lg:w-3/12 px-4 ">
								<div class="relative w-full mb-3">
									<label class="block text-blueGray-600 text-xs font-bold mb-2" for="grid-name">
										Treatment Perma
									</label>
									<Input
										bind:value={landingPage.link3Perma.value}
										bind:isValid={landingPage.link3Perma.isValid}
										placeholder={'(weight-loss-surgery)'}
										required={false}
									/>
								</div>
							</div>
							<div class="w-full lg:w-3/12 px-4 ">
								<div class="relative w-full mb-3">
									<label class="block text-blueGray-600 text-xs font-bold mb-2" for="grid-name">
										Testimonials Link
									</label>
									<Input
										bind:value={landingPage.link4.value}
										bind:isValid={landingPage.link4.isValid}
										placeholder={'(Testimonials)'}
										required={false}
									/>
								</div>
							</div>
							<div class="w-full lg:w-3/12 px-4 ">
								<div class="relative w-full mb-3">
									<label class="block text-blueGray-600 text-xs font-bold mb-2" for="grid-name">
										Testimonials Perma
									</label>
									<Input
										bind:value={landingPage.link4Perma.value}
										bind:isValid={landingPage.link4Perma.isValid}
										placeholder={'(testimonials)'}
										required={false}
									/>
								</div>
							</div>
						</div>
					</div>
					<div class="{page == 'sliderInfo' ? 'flex' : 'hidden'}  flex-wrap my-4">
						<div class="w-full lg:w-12/12 flex flex-wrap">
							<div class="w-full lg:w-4/12 px-4 ">
								<div class="relative w-full mb-3">
									<label class="block text-blueGray-600 text-xs font-bold mb-2" for="grid-name">
										Sliderlı Info Spot
									</label>
									<Input
										bind:value={landingPage.infoWithSliderSpot.value}
										bind:isValid={landingPage.infoWithSliderSpot.isValid}
										placeholder={'(Our Doctors)'}
										required={false}
									/>
								</div>
							</div>
							<div class="w-full lg:w-8/12 px-4 ">
								<div class="relative w-full mb-3">
									<label class="block text-blueGray-600 text-xs font-bold mb-2" for="grid-name">
										Sliderlı Info Başlık
									</label>
									<Input
										bind:value={landingPage.infoWithSliderHeader.value}
										bind:isValid={landingPage.infoWithSliderHeader.isValid}
										placeholder={'(Our Doctors Are Very Good)'}
										required={false}
									/>
								</div>
							</div>

							<div class="w-full lg:w-4/12 px-4">
								<div class="relative w-full mb-3">
									<label class="block text-blueGray-600 text-xs font-bold mb-2" for="grid-name">
										Sliderlı Info Resim (416x582)
									</label>
									<Image
										bind:value={landingPage.infoWithSliderImage1.value}
										bind:isValid={landingPage.infoWithSliderImage1.isValid}
									/>
								</div>
							</div>
							<div class="w-full lg:w-4/12 px-4">
								<div class="relative w-full mb-3">
									<label class="block text-blueGray-600 text-xs font-bold mb-2" for="grid-name">
										Sliderlı Info Resim (416x582)
									</label>
									<Image
										bind:value={landingPage.infoWithSliderImage2.value}
										bind:isValid={landingPage.infoWithSliderImage2.isValid}
									/>
								</div>
							</div>
							<div class="w-full lg:w-4/12 px-4">
								<div class="relative w-full mb-3">
									<label class="block text-blueGray-600 text-xs font-bold mb-2" for="grid-name">
										Sliderlı Info Resim (416x582)
									</label>
									<Image
										bind:value={landingPage.infoWithSliderImage3.value}
										bind:isValid={landingPage.infoWithSliderImage3.isValid}
									/>
								</div>
							</div>
							<div class="w-full lg:w-12/12 px-4 ">
								<div class="relative w-full mb-3">
									<label class="block text-blueGray-600 text-xs font-bold mb-2" for="grid-name">
										Sliderlı Info Metin
									</label>
									<TextEditor
										bind:value={landingPage.infoWithSliderText.value}
										bind:incomingValue={landingPage.infoWithSliderText.value}
										placeholder={'Info Metin 1'}
										required={false}
									/>
								</div>
							</div>
						</div>
					</div>
					<div class="{page == 'videoInfo' ? 'flex' : 'hidden'} flex-wrap my-4">
						<div class="flex flex-wrap my-4">
							<div class="w-full lg:w-3/12 px-4 self-center">
								<div class="relative w-full mb-3">
									<label class="block text-blueGray-600 text-xs font-bold mb-2" for="grid-name">
										Videolu Info Spot
									</label>
									<Input
										bind:value={landingPage.infoWithVideoSpot.value}
										bind:isValid={landingPage.infoWithVideoSpot.isValid}
										placeholder={'Videolu Slider Spot'}
										required={false}
									/>
								</div>
							</div>
							<div class="w-full lg:w-3/12 px-4 self-center">
								<div class="relative w-full mb-3">
									<label class="block text-blueGray-600 text-xs font-bold mb-2" for="grid-name">
										Videolu Info Başlık
									</label>
									<Input
										bind:value={landingPage.infoWithVideoHeader.value}
										bind:isValid={landingPage.infoWithVideoHeader.isValid}
										placeholder={'Videolu Slider Başlık'}
										required={false}
									/>
								</div>
							</div>
							<div class="w-full lg:w-3/12 px-4 self-center">
								<div class="relative w-full mb-3">
									<label class="block text-blueGray-600 text-xs font-bold mb-2" for="grid-name">
										Video İsmi
									</label>
									<Input
										bind:value={landingPage.infoWithVideoVideoName.value}
										bind:isValid={landingPage.infoWithVideoVideoName.isValid}
										placeholder={'Video İsmi'}
										required={false}
									/>
								</div>
							</div>
							<div class="w-full lg:w-3/12 px-4 self-center">
								<div class="relative w-full mb-3">
									<label class="block text-blueGray-600 text-xs font-bold mb-2" for="grid-name">
										Video Linki
									</label>
									<Input
										bind:value={landingPage.infoWithVideoVideoLink.value}
										bind:isValid={landingPage.infoWithVideoVideoLink.isValid}
										placeholder={'(JUHM4ek9K08)'}
										required={false}
									/>
								</div>
							</div>
							<div class="w-full lg:w-6/12 px-4">
								<div class="relative w-full mb-3">
									<label class="block text-blueGray-600 text-xs font-bold mb-2" for="grid-name">
										Videolu Info Metin
									</label>
									<TextEditor
										bind:value={landingPage.infoWithVideoText.value}
										bind:incomingValue={landingPage.infoWithVideoText.value}
										placeholder={'Info Metin 1'}
										required={false}
									/>
								</div>
							</div>
							<div class="w-full lg:w-6/12 px-4">
								<div class="relative w-full mb-3">
									<label class="block text-blueGray-600 text-xs font-bold mb-2" for="grid-name">
										Video Resmi (373x211)
									</label>
									<Image bind:value={landingPage.infoWithVideoVideoImage.value} />
								</div>
							</div>
						</div>
					</div>
					<div class="{page == 'beforeAfter' ? 'flex' : 'hidden'} flex-wrap my-4">
						<div class="flex flex-wrap w-full my-4">
							<div class="w-full lg:w-6/12 px-4 self-center">
								<div class="relative w-full mb-3">
									<label class="block text-blueGray-600 text-xs font-bold mb-2" for="grid-name">
										Before After Spot
									</label>
									<Input
										bind:value={landingPage.beforeAfterSpot.value}
										bind:isValid={landingPage.beforeAfterSpot.isValid}
										placeholder={'Before After Spot'}
										required={false}
									/>
								</div>
							</div>
							<div class="w-full lg:w-6/12 px-4 self-center">
								<div class="relative w-full mb-3">
									<label class="block text-blueGray-600 text-xs font-bold mb-2" for="grid-name">
										Before After Başlık
									</label>
									<Input
										bind:value={landingPage.beforeAfterHeader.value}
										bind:isValid={landingPage.beforeAfterHeader.isValid}
										placeholder={'Before After Başlık'}
										required={false}
									/>
								</div>
							</div>
							<div class="w-full lg:w-6/12 px-4">
								<div class="relative w-full mb-3">
									<label class="block text-blueGray-600 text-xs font-bold mb-2" for="grid-name">
										1.Before (306 × 428 px)
									</label>
									<Image bind:value={landingPage.firstBefore.value} />
								</div>
							</div>
							<div class="w-full lg:w-6/12 px-4">
								<div class="relative w-full mb-3">
									<label class="block text-blueGray-600 text-xs font-bold mb-2" for="grid-name">
										1.After (306 × 428 px)
									</label>
									<Image bind:value={landingPage.firstAfter.value} />
								</div>
							</div>
							<div class="w-full lg:w-6/12 px-4">
								<div class="relative w-full mb-3">
									<label class="block text-blueGray-600 text-xs font-bold mb-2" for="grid-name">
										2.Before (306 × 428 px)
									</label>
									<Image bind:value={landingPage.secondBefore.value} />
								</div>
							</div>
							<div class="w-full lg:w-6/12 px-4">
								<div class="relative w-full mb-3">
									<label class="block text-blueGray-600 text-xs font-bold mb-2" for="grid-name">
										2.After (306 × 428 px)
									</label>
									<Image bind:value={landingPage.secondAfter.value} />
								</div>
							</div>
							<div class="w-full lg:w-6/12 px-4">
								<div class="relative w-full mb-3">
									<label class="block text-blueGray-600 text-xs font-bold mb-2" for="grid-name">
										3.Before (306 × 428 px)
									</label>
									<Image bind:value={landingPage.thirdBefore.value} />
								</div>
							</div>
							<div class="w-full lg:w-6/12 px-4">
								<div class="relative w-full mb-3">
									<label class="block text-blueGray-600 text-xs font-bold mb-2" for="grid-name">
										3.After (306 × 428 px)
									</label>
									<Image bind:value={landingPage.thirdAfter.value} />
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="flex flex-wrap px-8 pb-4">
					<div class="w-full lg:w-12/12 px-4 text-right mt-5">
						<button
							on:click={() => updateLandingPage()}
							disabled={!landingPage.lang.isValid}
							class="bg-green-500 disabled:bg-red-300 text-white active:bg-bred-400 font-bold  text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 "
							type="button"
						>
							Güncelle
						</button>
					</div>
				</div>{/if}
		</div>
	</div>
</div>
