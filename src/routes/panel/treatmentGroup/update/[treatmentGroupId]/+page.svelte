<script>
	import { goto } from '$app/navigation';
	import RestService from '$services/rest';
	import Input from '$src/lib/components/Form/Input.svelte';
	import Select from '$src/lib/components/Form/Select.svelte';
	import { TranslateApiMessage, Translate } from '$services/language';
	import ToastService from '$services/toast';
	import Image from '$src/lib/components/Form/Image.svelte';
	import Switch from '$src/lib/components/Form/Switch.svelte';

	const deleteTreatmentGroupApprove = (treatmentGroupId) => {
		modal.set(
			bind(Alert, {
				message: 'Bu işlemi onaylıyor musunuz ?',
				answer: (message) => {
					if (message) {
						deleteTreatmentGroup(treatmentGroupId);
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

	let treatmentGroup;

	let values = [
		{ key: 'lang', customValue: null },
		{ key: 'name', customValue: null },
		{ key: 'name_BIG', customValue: null },
		{ key: 'shortDesc', customValue: null },
		{ key: 'groupImage', customValue: null },
		{ key: 'group', customValue: null },
		{ key: 'order', customValue: null },
		{ key: 'perma', customValue: null }
	];

	const updateTreatmentGroup = async () => {
		let editedTreatmentGroup = {};
		values.map((v) => {
			editedTreatmentGroup[v.key] = treatmentGroup[v.key].value;
		});

		let response = await RestService.updateTreatmentGroup(treatmentGroup._id, editedTreatmentGroup);
		if (response['status']) {
			ToastService.success('Kayıt Başarılı');
			goto('/panel/treatmentGroup');
		} else {
			ToastService.error($TranslateApiMessage(response.message));
		}
	};

	const getTreatmentGroup = async () => {
		let response = await RestService.getTreatmentGroup(data.treatmentGroupId);

		if (response['status']) {
			values.map((v) => {
				if (v.customValue) {
					response['treatmentGroup'][v.key] = {
						value: response['treatmentGroup'][v.key][v.customValue]
					};
				} else {
					response['treatmentGroup'][v.key] = { value: response['treatmentGroup'][v.key] };
				}
			});
			treatmentGroup = {
				...response['treatmentGroup']
			};
		} else {
			ToastService.error($TranslateApiMessage(response.message));
		}
	};

	getTreatmentGroup();

	const deleteTreatmentGroup = async (treatmentGroupId) => {
		let response = await RestService.deleteTreatmentGroup(treatmentGroupId);
		if (response['status']) {
			ToastService.success('İşlem başarılı');
			navigate('/panel/treatmentGroup');
		} else {
			ToastService.success('İşlem başarılı');
		}
	};
</script>

<div class="flex flex-wrap mt-4 h-screen relative">
	<div class="w-full mb-12 px-2 lg:px-4 ">
		<div class="flex justify-between">
			<button
				class="bg-white text-blue-600 hover:text-red-700 mb-2 border rounded font-bold text-xs px-4 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 "
				type="button"
				on:click={() => {
					goto('/panel/treatmentGroup');
				}}
			>
				<i class="fa fa-arrow-left" />
				Geri
			</button>

			<button
				class="bg-white text-blue-600 hover:text-red-700 mb-2 border rounded font-bold text-xs px-4 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 "
				type="button"
				on:click={() => deleteTreatmentGroupApprove(data.treatmentGroupId)}
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
					<h3 class="font-semibold text-lg text-blueGray-700">Tedavi Kategorisini güncelle</h3>
				</div>
			</div>
			<div class="flex-auto px-4 lg:px-10 py-10 pt-0">
				{#if treatmentGroup}
					<div class="flex flex-wrap my-4">
						<div class="w-full lg:w-2/12 px-4 self-center">
							<div class="relative w-full mb-3">
								<label class="block text-blueGray-600 text-xs font-bold mb-2" for="grid-name">
									Dil
								</label>
								{#if langs}
									<Select
										bind:value={treatmentGroup.lang.value}
										bind:isValid={treatmentGroup.lang.isValid}
										values={langs}
										title={'Dil Seçin'}
										valuesKey={'lang'}
										valuesTitleKey={'name'}
										customClass={'w-full'}
									/>
								{/if}
							</div>
						</div>
						<div class="w-full lg:w-2/12 px-4 self-center">
							<div class="relative w-full mb-3">
								<label class="block text-blueGray-600 text-xs font-bold mb-2" for="grid-name">
									Tedavi Perma
								</label>
								<Input
									bind:value={treatmentGroup.perma.value}
									bind:isValid={treatmentGroup.perma.isValid}
									placeholder={'face-lifting'}
									required={false}
								/>
							</div>
						</div>
						<div class="w-full lg:w-2/12 px-4 self-center">
							<div class="relative w-full mb-3">
								<label class="block text-blueGray-600 text-xs font-bold mb-2" for="grid-name">
									Sıra
								</label>
								<Input
									bind:value={treatmentGroup.order.value}
									bind:isValid={treatmentGroup.order.isValid}
									placeholder={'Sıra'}
									required={false}
								/>
							</div>
						</div>
						<div class="w-full lg:w-2/12 px-4 self-center ">
							<div class="relative w-full mb-3 flex flex-col items-center ">
								<label class="block text-blueGray-600 text-xs font-bold mb-2" for="grid-name">
									Grup mu?
								</label>
								<Switch bind:value={treatmentGroup.group.value} />
							</div>
						</div>
		
						<div class="w-full lg:w-2/12 px-4 self-center">
							<div class="relative w-full mb-3">
								<label class="block text-blueGray-600 text-xs font-bold mb-2" for="grid-name">
									Grup İsmi
								</label>
								<Input
									bind:value={treatmentGroup.name.value}
									bind:isValid={treatmentGroup.name.isValid}
									placeholder={'Grup İsmi'}
									required={false}
								/>
							</div>
						</div>
						<div class="w-full lg:w-2/12 px-4 self-center">
							<div class="relative w-full mb-3">
								<label class="block text-blueGray-600 text-xs font-bold mb-2" for="grid-name">
									Grup İsmi (Büyük Harf)
								</label>
								<Input
									bind:value={treatmentGroup.name_BIG.value}
									bind:isValid={treatmentGroup.name_BIG.isValid}
									placeholder={'GRUP İSMİ'}
									required={false}
								/>
							</div>
						</div>

						<div class="w-full lg:w-10/12 px-4 self-center">
							<div class="relative w-full mb-3">
								<label class="block text-blueGray-600 text-xs font-bold mb-2" for="grid-name">
									Kısa Açıklama Max 120 ({treatmentGroup?.shortDesc?.value?.length
										? treatmentGroup?.shortDesc?.value?.length
										: 0})
								</label>
								<Input
									bind:value={treatmentGroup.shortDesc.value}
									bind:isValid={treatmentGroup.shortDesc.isValid}
									placeholder={'Grup Kısa Açıklama'}
									required={false}
								/>
							</div>
						</div>
						<div class="w-full lg:w-2/12 px-4 self-center">
							<div class="relative w-full mb-3">
								<label class="block text-blueGray-600 text-xs font-bold mb-2" for="grid-name">
									Grup Resmi (215x215)
								</label>
								<Image bind:value={treatmentGroup.groupImage.value} />
							</div>
						</div>
					</div>
					<div class="flex flex-wrap">
						<div class="w-full lg:w-12/12 px-4 text-right mt-5">
							<button
								on:click={() => updateTreatmentGroup()}
								disabled={!treatmentGroup.lang.isValid}
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
