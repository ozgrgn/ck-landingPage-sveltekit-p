<script>
	import RestService from '$services/rest';
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';

	import Input from '$components/Form/Input.svelte';
	import PhoneInput from '$components/Form/PhoneInput.svelte';
	import Textarea from '$components/Form/Textarea.svelte';
	import { shared, landingPage } from '$services/store';
	console.log($shared, 'shared');
	import { TranslateApiMessage } from '$services/language';
	let formStatus = false;
	let warn = false;
	let name;
	let nameIsValid;

	let phone;
	let phoneIsValid;
	let email;
	let emailIsValid;
	let dialCode;
	let message;
	let messageIsValid;
	let loading;
	const sendMail = async () => {
		if (!name || !phone || !email) {
			warn = true;
			return;
		}

		phone = dialCode + phone.replace(/\s/g, '');
		loading = true;
		let getMailResponse = await RestService.sendMail(
			$landingPage.lpName,
			$landingPage.treatmentGroup,
			$landingPage.treatment,
			name,
			phone,
			email,
			message,
			$landingPage._id
		);
		if (getMailResponse['status']) {
			console.log(getMailResponse, 'getMailResponse');
			warn = false;
			formStatus = true;
			goto(`/success`);
		} else {
			ToastService.error($TranslateApiMessage(getMailResponse.message));
		}
		loading = false;
	};
</script>

{#if $shared}
	{#if !formStatus}
		<div class="flex flex-col gap-2 z-40">
			<div
				class="text-center text-red-500 flex flex-col text-xs contact__msg {warn == true
					? ''
					: 'hidden'}"
			>
				<span>{name ? '' : $shared?.nameRequired}</span>
				<span>{email ? '' : $shared?.mailRequired}</span>
				<span>{!phone ? $shared?.phoneRequired : ''}</span>
			</div>
			<Input
				customClass="h-12 text-sm font-semibold text-black/60 pl-2  focus:border-0"
				bind:value={name}
				bind:isValid={nameIsValid}
				type="text"
				name="name"
				placeholder={$shared?.yourName}
				autocomplete="name"
			/>
			<PhoneInput
				customClass="h-12 text-sm font-semibold text-black/60 pl-2 focus:border-0"
				bind:value={phone}
				bind:isValid={phoneIsValid}
				bind:dialCode
				type="text"
				name="name"
				placeholder={$shared?.yourPhone}
				autocomplete="phone"
			/>
			<Input
				customClass="h-12 text-sm font-semibold text-black/60 pl-2 focus:border-0"
				bind:value={email}
				bind:isValid={emailIsValid}
				type="email"
				name="email"
				placeholder={$shared?.yourMail}
				autocomplete="email"
			/>
			<Textarea
				customClass="h-20 text-sm font-semibold text-black/60 pl-2 focus:border-0"
				bind:value={message}
				bind:isValid={messageIsValid}
				type="text"
				name="message"
				placeholder={$shared?.yourMessage}
			/>
			<button
				class="w-full bg-secondary text-sm text-white font-bold py-2 rounded my-5"
				on:click|preventDefault={sendMail}
				disabled={loading}
			>
				{$shared?.sendT}
			</button>
		</div>
	{:else}
		<div
			class="bg-green-100 w-full h-fit rounded p-3 text-center text-black/70  {formStatus == true
				? ''
				: 'hidden'}"
		>
			{$shared?.sent}
		</div>
	{/if}
{/if}
