import { json } from '@sveltejs/kit';
import Model from '../Model';

let requiredFieldsForPatch = [];
/** @type {import('./$types').RequestHandler} */
export const PATCH = async ({ request, params }) => {
	try {
		let data = await request.json();

		let { sharedId } = params;

		if (!sharedId) {
			throw new Error(
				JSON.stringify({
					en: `sharedId field is required`,
					tr: `sharedId alanı zorunlu`
				})
			);
		}

		if (requiredFieldsForPatch) {
			requiredFieldsForPatch.map((value) => {
				if (!data[value]) {
					throw new Error(
						JSON.stringify({
							en: `${value} field is required`,
							tr: `${value} alanı zorunlu`
						})
					);
				}
			});
		}

		let { lang,logo, googleRate, trustPilotRate, facebookRate, links, yourName, yourPhone, yourMail, yourMessage, nameRequired, phoneRequired, mailRequired, sendT, sent, contactT, addressT, emailT, phoneT, whatsappT, copright, readMore, postedOn,cookies } = data;

		const upsertedShared = await Model.Shared.findByIdAndUpdate(
			sharedId,
			{
				lang,logo, googleRate, trustPilotRate, facebookRate, links, yourName, yourPhone, yourMail, yourMessage, nameRequired, phoneRequired, mailRequired, sendT, sent, contactT, addressT, emailT, phoneT, whatsappT, copright, readMore, postedOn,cookies
			},
			{
				upsert: true,
				new: true
			}
		);

		return json({
			status: true,
			shared: upsertedShared
		});
	} catch (error) {
		return json({
			status: false,
			message: error.message
		});
	}
};

/** @type {import('./$types').RequestHandler} */
export const GET = async ({ params }) => {
	try {
		let shared = await Model.Shared.findById(params?.sharedId);

		return json({
			status: true,
			shared
		});
	} catch (error) {
		return json({
			status: false,
			message: error.message
		});
	}
};

/** @type {import('./$types').RequestHandler} */
export const DELETE = async ({ params }) => {
	try {
		let shared = await Model.Shared.findByIdAndDelete(params?.sharedId);

		return json({
			status: true,
			shared
		});
	} catch (error) {
		return json({
			status: false,
			message: error.message
		});
	}
};
