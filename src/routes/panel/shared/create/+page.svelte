<script>
	import { goto } from '$app/navigation';
	import Input from '$src/lib/components/Form/Input.svelte';
	import Select from '$src/lib/components/Form/Select.svelte';
	import { TranslateApiMessage, Translate } from '$services/language';
	import RestService from '$services/rest';
	import ToastService from '$services/toast';
	import Image from '$src/lib/components/Form/Image.svelte';
	import TextEditor from '$src/lib/components/Form/TextEditor.svelte';

	let langs;
	const getLangs = async () => {
		let response = await RestService.getLanguages(undefined, undefined);
		langs = response['languages'];
	};
	getLangs();
	let values = [
		{ key: 'lang', customValue: null },
		{ key: 'googleRate', customValue: null },
		{ key: 'trustPilotRate', customValue: null },
		{ key: 'facebookRate', customValue: null },

		{ key: 'yourName', customValue: null },
		{ key: 'yourPhone', customValue: null },
		{ key: 'yourMail', customValue: null },
		{ key: 'yourMessage', customValue: null },
		{ key: 'nameRequired', customValue: null },
		{ key: 'phoneRequired', customValue: null },
		{ key: 'mailRequired', customValue: null },

		{ key: 'sendT', customValue: null },
		{ key: 'sent', customValue: null },
		{ key: 'contactT', customValue: null },
		{ key: 'addressT', customValue: null },
		{ key: 'emailT', customValue: null },
		{ key: 'phoneT', customValue: null },
		{ key: 'whatsappT', customValue: null },
		
		{ key: 'links', customValue: null },
		{ key: 'copright', customValue: null },
		{ key: 'readMore', customValue: null },
		{ key: 'postedOn', customValue: null },
		{ key: 'cookies', customValue: null },
		{ key: 'logo', customValue: null },
	];

	const addShared = async () => {
		let data = {};
		values.map((v) => {
			data[v.key] = shared[v.key]?.value;
		});

		let response = await RestService.addShared(data);
		if (response['status']) {
			ToastService.success('Başarıyla Kayıt Edildi');
			goto('/panel/shared');
		} else {
			ToastService.error($TranslateApiMessage(response.message));
		}
	};

	let shared = {};

	values.map((v) => {
		if (v.defaultValue) {
			shared[v.key] = { value: v.defaultValue };
		} else {
			shared[v.key] = {};
		}
	});
</script>

<div class="flex flex-wrap mt-4 h-screen relative">
	<div class="w-full mb-12 px-2 lg:px-4 ">
		<button
			class="bg-white text-blue-600 hover:text-red-700 mb-2 border rounded font-bold  text-xs px-4 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 "
			type="button"
			on:click={() => {
				goto('/panel/shared');
			}}
		>
			<i class="fa fa-arrow-left" />
			Geri
		</button>
		<div
			class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded bg-gray-100"
		>
			<div class="rounded-t mb-0 px-4 py-3 border-0">
				<div class="text-center flex justify-between">
					<h3 class="font-semibold text-lg text-blueGray-700">Dil Ekle</h3>
				</div>
			</div>
			<div class="flex-auto px-4 lg:px-10 py-10 pt-0">
				<div class="flex flex-wrap my-4">
					<div class="w-full lg:w-2/12 px-4">
						<div class="relative w-full mb-3">
							<label class="block text-blueGray-600 text-xs font-bold mb-2" for="grid-name">
								Dil
							</label>
							{#if langs}
								<Select
									bind:value={shared.lang.value}
									bind:isValid={shared.lang.isValid}
									values={langs}
									title={'Dil Seçin'}
									valuesKey={'lang'}
									valuesTitleKey={'name'}
									customClass={'w-full'}
								/>
							{/if}
						</div>
					</div>
					<div class="w-full lg:w-2/12 px-4">
						<div class="relative w-full mb-3">
							<label class="block text-blueGray-600 text-xs font-bold mb-2" for="grid-name">
								Google Rate
							</label>
							<Input
								bind:value={shared.googleRate.value}
								bind:isValid={shared.googleRate.isValid}
								placeholder={'(5.0/5)'}
								required={false}
							/>
						</div>
					</div>
					<div class="w-full lg:w-2/12 px-4">
						<div class="relative w-full mb-3">
							<label class="block text-blueGray-600 text-xs font-bold mb-2" for="grid-name">
								TrustPilot Rate
							</label>
							<Input
								bind:value={shared.trustPilotRate.value}
								bind:isValid={shared.trustPilotRate.isValid}
								placeholder={'(5.0/5)'}
								required={false}
							/>
						</div>
					</div>

					<div class="w-full lg:w-2/12 px-4">
						<div class="relative w-full mb-3">
							<label class="block text-blueGray-600 text-xs font-bold mb-2" for="grid-name">
								Facebook Rate
							</label>
							<Input
								bind:value={shared.facebookRate.value}
								bind:isValid={shared.facebookRate.isValid}
								placeholder={'(5.0/5)'}
								required={false}
							/>
						</div>
					</div>
					<div class="w-full lg:w-2/12 px-4">
						<div class="relative w-full mb-3">
							<label class="block text-blueGray-600 text-xs font-bold mb-2" for="grid-name">
								İsminiz
							</label>
							<Input
								bind:value={shared.yourName.value}
								bind:isValid={shared.yourName.isValid}
								placeholder={'(Your Name)'}
								required={false}
							/>
						</div>
					</div>
					<div class="w-full lg:w-2/12 px-4">
						<div class="relative w-full mb-3">
							<label class="block text-blueGray-600 text-xs font-bold mb-2" for="grid-name">
								Telefonunuz
							</label>
							<Input
								bind:value={shared.yourPhone.value}
								bind:isValid={shared.yourPhone.isValid}
								placeholder={'(Your Phone)'}
								required={false}
							/>
						</div>
					</div>
					<div class="w-full lg:w-2/12 px-4">
						<div class="relative w-full mb-3">
							<label class="block text-blueGray-600 text-xs font-bold mb-2" for="grid-name">
								Mailiniz
							</label>
							<Input
								bind:value={shared.yourMail.value}
								bind:isValid={shared.yourMail.isValid}
								placeholder={'(Your Mail)'}
								required={false}
							/>
						</div>
					</div>
					<div class="w-full lg:w-2/12 px-4">
						<div class="relative w-full mb-3">
							<label class="block text-blueGray-600 text-xs font-bold mb-2" for="grid-name">
								Mesajınız
							</label>
							<Input
								bind:value={shared.yourMessage.value}
								bind:isValid={shared.yourMessage.isValid}
								placeholder={'(Your Message)'}
								required={false}
							/>
						</div>
					</div>
					<div class="w-full lg:w-3/12 px-4">
						<div class="relative w-full mb-3">
							<label class="block text-blueGray-600 text-xs font-bold mb-2" for="grid-name">
								İsim Gerekli
							</label>
							<Input
								bind:value={shared.nameRequired.value}
								bind:isValid={shared.nameRequired.isValid}
								placeholder={'(Name Required)'}
								required={false}
							/>
						</div>
					</div>
					<div class="w-full lg:w-3/12 px-4">
						<div class="relative w-full mb-3">
							<label class="block text-blueGray-600 text-xs font-bold mb-2" for="grid-name">
								Telefon Gerekli
							</label>
							<Input
								bind:value={shared.phoneRequired.value}
								bind:isValid={shared.phoneRequired.isValid}
								placeholder={'(Phone Required)'}
								required={false}
							/>
						</div>
					</div>
					<div class="w-full lg:w-3/12 px-4">
						<div class="relative w-full mb-3">
							<label class="block text-blueGray-600 text-xs font-bold mb-2" for="grid-name">
								Mail Gerekli
							</label>
							<Input
								bind:value={shared.mailRequired.value}
								bind:isValid={shared.mailRequired.isValid}
								placeholder={'Mail Required'}
								required={false}
							/>
						</div>
					</div>
					<div class="w-full lg:w-3/12 px-4 self-center">
						<div class="relative w-full mb-3">
							<label class="block text-blueGray-600 text-xs font-bold mb-2" for="grid-name">
								Mesaj Gönderildi
							</label>
							<Input
								bind:value={shared.sent.value}
								bind:isValid={shared.sent.isValid}
								placeholder={'(Your message has been sent)'}
								required={false}
							/>
						</div>
					</div>
					<div class="w-full lg:w-3/12 px-4 self-center">
						<div class="relative w-full mb-3">
							<label class="block text-blueGray-600 text-xs font-bold mb-2" for="grid-name">
								Gönder 
							</label>
							<Input
								bind:value={shared.sendT.value}
								bind:isValid={shared.sendT.isValid}
								placeholder={'(SEND)'}
								required={false}
							/>
						</div>
					</div>

					<div class="w-full lg:w-3/12 px-4 self-center">
						<div class="relative w-full mb-3">
							<label class="block text-blueGray-600 text-xs font-bold mb-2" for="grid-name">
								İletişim
							</label>
							<Input
								bind:value={shared.contactT.value}
								bind:isValid={shared.contactT.isValid}
								placeholder={'CONTACT'}
								required={false}
							/>
						</div>
					</div>
					<div class="w-full lg:w-3/12 px-4 self-center">
						<div class="relative w-full mb-3">
							<label class="block text-blueGray-600 text-xs font-bold mb-2" for="grid-name">
								Adres
							</label>
							<Input
								bind:value={shared.addressT.value}
								bind:isValid={shared.addressT.isValid}
								placeholder={'(Address)'}
								required={false}
							/>
						</div>
					</div>
					<div class="w-full lg:w-3/12 px-4 self-center">
						<div class="relative w-full mb-3">
							<label class="block text-blueGray-600 text-xs font-bold mb-2" for="grid-name">
								E-posta
							</label>
							<Input
								bind:value={shared.emailT.value}
								bind:isValid={shared.emailT.isValid}
								placeholder={'(E-mail)'}
								required={false}
							/>
						</div>
					</div>

					<div class="w-full lg:w-2/12 px-4">
						<div class="relative w-full mb-3">
							<label class="block text-blueGray-600 text-xs font-bold mb-2" for="grid-name">
								Telefon
							</label>
							<Input
								bind:value={shared.phoneT.value}
								bind:isValid={shared.phoneT.isValid}
								placeholder={'(Phone)'}
								required={false}
							/>
						</div>
					</div>
					<div class="w-full lg:w-2/12 px-4">
						<div class="relative w-full mb-3">
							<label class="block text-blueGray-600 text-xs font-bold mb-2" for="grid-name">
								Whatsapp
							</label>
							<Input
								bind:value={shared.whatsappT.value}
								bind:isValid={shared.whatsappT.isValid}
								placeholder={'(Whatsapp)'}
								required={false}
							/>
						</div>
					</div>
					<div class="w-full lg:w-2/12 px-4">
						<div class="relative w-full mb-3">
							<label class="block text-blueGray-600 text-xs font-bold mb-2" for="grid-name">
								Linkler
							</label>
							<Input
								bind:value={shared.links.value}
								bind:isValid={shared.links.isValid}
								placeholder={'LINKS'}
								required={false}
							/>
						</div>
					</div>
					<div class="w-full lg:w-2/12 px-4">
						<div class="relative w-full mb-3">
							<label class="block text-blueGray-600 text-xs font-bold mb-2" for="grid-name">
								Daha Fazla
							</label>
							<Input
								bind:value={shared.readMore.value}
								bind:isValid={shared.readMore.isValid}
								placeholder={'(Read More)'}
								required={false}
							/>
						</div>
					</div>
					<div class="w-full lg:w-2/12 px-4">
						<div class="relative w-full mb-3">
							<label class="block text-blueGray-600 text-xs font-bold mb-2" for="grid-name">
								Yayınlanan Yer
							</label>
							<Input
								bind:value={shared.postedOn.value}
								bind:isValid={shared.postedOn.isValid}
								placeholder={'(Posted On)'}
								required={false}
							/>
						</div>
					</div>
					<div class="w-full lg:w-6/12 px-4">
						<div class="relative w-full mb-3">
							<label class="block text-blueGray-600 text-xs font-bold mb-2" for="grid-name">
								Copright Yazısı
							</label>
							<Input
								bind:value={shared.copright.value}
								bind:isValid={shared.copright.isValid}
								placeholder={'(Copyright © 2022 All Rights Reserved. - CK Health Turkey)'}
								required={false}
							/>
						</div>
					</div>
			

					<div class="w-full lg:w-12/12 px-4">
						<div class="relative w-full mb-3">
							<label class="block text-blueGray-600 text-xs font-bold mb-2" for="grid-name">
								Cookies Policy
							</label>
							<TextEditor
								bind:value={shared.cookies.value}
								bind:isValid={shared.cookies.isValid}
								placeholder="Cookies Policy"
								required={false}
							/>
						</div>
					</div>

					<div class="w-full lg:w-6/12 px-4 self-center">
						<div class="relative w-full mb-3">
							<label class="block text-blueGray-600 text-xs font-bold mb-2" for="grid-name">
								Logo (144x52)
							</label>
							<Image bind:value={shared.logo.value} />
						</div>
					</div>
				</div>
				<div class="flex flex-wrap">
					<div class="w-full lg:w-12/12 px-4 text-right mt-2">
						<button
							disabled={!shared.lang.isValid}
							class="bg-green-500 disabled:bg-red-300 text-white active:bg-bred-400 font-bold  text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 "
							type="button"
							on:click={() => addShared()}
						>
							Kaydet
						</button>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
