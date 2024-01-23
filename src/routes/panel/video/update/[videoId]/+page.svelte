<script>
	import { goto } from '$app/navigation';
	import RestService from '$services/rest';
	import Input from '$src/lib/components/Form/Input.svelte';
	import Select from '$src/lib/components/Form/Select.svelte';
	import { TranslateApiMessage, Translate } from '$services/language';
	import ToastService from '$services/toast';
	import Image from '$src/lib/components/Form/Image.svelte';


	const deleteVideoApprove = (videoId) => {
		modal.set(
			bind(Alert, {
				message: 'Bu işlemi onaylıyor musunuz ?',
				answer: (message) => {
					if (message) {
						deleteVideo(videoId);
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
	export let data

	let video;

	let values = [
		{ key: 'lang', customValue: null },
		{ key: 'videoName', customValue: null },
		{ key: 'videoImage', customValue: null },
		{ key: 'videoLink', customValue: null },
		{ key: 'order', customValue: null },
		{ key: 'treatment', customValue: null },
		{ key: 'treatmentGroup', customValue: null }
	];

	const updateVideo = async () => {
		let editedVideo = {};
		values.map((v) => {
			editedVideo[v.key] = video[v.key].value;
			console.log(editedVideo[v.key]);
		});

		let response = await RestService.updateVideo(video._id, editedVideo);
		if (response['status']) {
			ToastService.success('Kayıt Başarılı');
			goto('/panel/video');
		} else {
			ToastService.error($TranslateApiMessage(response.message));
		}
	};

	const getVideo = async () => {
		let response = await RestService.getVideo(data.videoId);

		if (response['status']) {
			values.map((v) => {
				if (v.customValue) {
					response['video'][v.key] = {
						value: response['video'][v.key][v.customValue]
					};
				} else {
					response['video'][v.key] = { value: response['video'][v.key] };
				}
			});
			video = {
				...response['video']
			};
		} else {
			ToastService.error($TranslateApiMessage(response.message));
		}
	};

	getVideo();

	const deleteVideo = async (videoId) => {
		let response = await RestService.deleteVideo(videoId);
		if (response['status']) {
			ToastService.success('İşlem başarılı');
			navigate('/panel/video');
		} else {
			ToastService.success('İşlem başarılı');
		}
	};
	let treatments;
	let treatmentGroups;
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

</script>

<div class="flex flex-wrap mt-4 h-screen relative">
	<div class="w-full mb-12 px-2 lg:px-4 ">
		<div class="flex justify-between">
			<button
				class="bg-white text-blue-600 hover:text-red-700 mb-2 border rounded font-bold text-xs px-4 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 "
				type="button"
				on:click={() => {
					goto('/panel/video');
				}}
			>
				<i class="fa fa-arrow-left" />
				Geri
			</button>

			<button
				class="bg-white text-blue-600 hover:text-red-700 mb-2 border rounded font-bold text-xs px-4 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 "
				type="button"
				on:click={() => deleteVideoApprove(data.videoId)}
			>
				<i class="fa fa-trash" />
				Sil
			</button>
		</div>

		<div
			class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded bg-gray-100"
		>
			<div class="rounded-t mb-0 px-4 py-3 border-0">
				<div class="text-center flex justify-between">
					<h3 class="font-semibold text-lg text-blueGray-700">Yorum güncelle</h3>
				</div>
			</div>
			<div class="flex-auto px-4 lg:px-10 py-10 pt-0">
				{#if video}
				<div class="flex flex-wrap my-4">
					<div class="w-full lg:w-3/12 px-4 self-center">
						<div class="relative w-full mb-3">
							<label class="block text-blueGray-600 text-xs font-bold mb-2" for="grid-name">
								Dil
							</label>
							{#if langs}
								<Select
									bind:value={video.lang.value}
									bind:isValid={video.lang.isValid}
									values={langs}
									title={'Dil Seçin'}
									valuesKey={'lang'}
									valuesTitleKey={'name'}
									customClass={'w-full'}
								/>
							{/if}
						</div>
					</div>

					<div class="w-full lg:w-3/12 px-4 self-center">
						<div class="relative w-full mb-3">
							<label class="block text-blueGray-600 text-xs font-bold mb-2" for="grid-name">
								Sıra
							</label>
							<Input
								bind:value={video.order.value}
								bind:isValid={video.order.isValid}
								placeholder={'Sıra'}
								required={false}
							/>
						</div>
					</div>

					<div class="w-full lg:w-3/12 px-4 self-center">
						<div class="relative w-full mb-3">
							<label class="block text-blueGray-600 text-xs font-bold mb-2" for="grid-name">
								Tedavi Kategorisi
							</label>
							{#if treatmentGroups}
								<Select
									bind:value={video.treatmentGroup.value}
									bind:isValid={video.treatmentGroup.isValid}
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
									bind:value={video.treatment.value}
									bind:isValid={video.treatment.isValid}
									values={treatments}
									title={'Tedavi Seçin'}
									valuesKey={'_id'}
									valuesTitleKey={'name'}
									customClass={'w-full'}
								/>
							{/if}
						</div>
					</div>
					<div class="w-full lg:w-4/12 px-4 self-center">
						<div class="relative w-full mb-3">
							<label class="block text-blueGray-600 text-xs font-bold mb-2" for="grid-name">
								Video İsmi
							</label>
							<Input
								bind:value={video.videoName.value}
								bind:isValid={video.videoName.isValid}
								placeholder={'Video İsmi'}
								required={false}
							/>
						</div>
					</div>
					<div class="w-full lg:w-4/12 px-4 self-center">
						<div class="relative w-full mb-3">
							<label class="block text-blueGray-600 text-xs font-bold mb-2" for="grid-name">
								Video Linki
							</label>
							<Input
								bind:value={video.videoLink.value}
								bind:isValid={video.videoLink.isValid}
								placeholder={'(JUHM4ek9K08)'}
								required={false}
							/>
						</div>
					</div>
					<div class="w-full lg:w-4/12 px-4 self-center">
						<div class="relative w-full mb-3">
							<label class="block text-blueGray-600 text-xs font-bold mb-2" for="grid-name">
								Video Resmi (373x211)
							</label>
							<Image bind:value={video.videoImage.value} />
						</div>
					</div>
				</div>
					<div class="flex flex-wrap">
						<div class="w-full lg:w-12/12 px-4 text-right mt-5">
							<button
								on:click={() => updateVideo()}
								disabled={!video.lang.isValid}
								class="bg-green-500 disabled:bg-red-300 text-white active:bg-bred-400 font-bold  text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 "
								type="button"
							>
								Güncelle
							</button>
						</div>
					</div>
				{/if}
			</div>
		</div>
	</div>
</div>
