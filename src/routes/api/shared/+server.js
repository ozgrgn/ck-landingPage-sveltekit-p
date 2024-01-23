import { json } from '@sveltejs/kit';
import Model from './Model';

/** @type {import('./$types').RequestHandler} */
export const GET = async ({ request, cookies, url }) => {
	try {
		let query = {}
		let skip = Number(url.searchParams.get('skip') ?? 0);
		let limit = Number(url.searchParams.get('limit') ?? 10);
		let lang = url.searchParams.get('lang') ?? undefined;
		if (lang) query.lang = lang
		let shareds = await Model.Shared.find(query, {}, { limit, skip });

		let count = await Model.Shared.countDocuments({});
		return json({
			status: true,
			shareds,
			count
		});
	} catch (error) {
		return json({
			status: false,
			message: error.message
		});
	}
};

let requiredFieldsForPost = ['lang'];
/** @type {import('./$types').RequestHandler} */
export const POST = async ({ request, cookies }) => {
	try {
		let data = await request.json();

		if (requiredFieldsForPost) {
			requiredFieldsForPost.map((value) => {
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

		let { lang, logo, googleRate, trustPilotRate, facebookRate, links, yourName, yourPhone, yourMail, yourMessage, nameRequired, phoneRequired, mailRequired, sendT, sent, contactT, addressT, emailT, phoneT, whatsappT, copright, readMore, postedOn, cookies
		} = data;
		let oneShared = await Model.Shared.findOne({ lang: lang }, {}, {});
		if (lang && oneShared) {
			throw new Error(
				JSON.stringify({
					en: `Bu dil seçeneği ile veri kaydedilmiş.`,
					tr: `There is data with this language option. `
				})
			);
		}
		const shared = new Model.Shared({
			lang, logo, googleRate, trustPilotRate, facebookRate, links, yourName, yourPhone, yourMail, yourMessage, nameRequired, phoneRequired, mailRequired, sendT, sent, contactT, addressT, emailT, phoneT, whatsappT, copright, readMore, postedOn, cookies
		});

		await shared.save();

		return json({
			status: true,
			shared: shared
		});
	} catch (error) {
		return json({
			status: false,
			message: error.message
		});
	}
};
