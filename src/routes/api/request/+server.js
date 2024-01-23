import { json } from '@sveltejs/kit';
import Model from './Model';

/** @type {import('./$types').RequestHandler} */
export const GET = async ({ request, cookies, url }) => {
	try {
		let query = {};
		let skip = Number(url.searchParams.get('skip') ?? 0);
		let limit = Number(url.searchParams.get('limit') ?? 10);
		let lpPerma = url.searchParams.get('lpPerma') ?? undefined;
		if (lpPerma) query.lpPerma = lpPerma;
		let requests = await Model.Request.find(query, {}, { limit, skip });

		let count = await Model.Request.countDocuments({ query });
		return json({
			status: true,
			requests,
			count
		});
	} catch (error) {
		return json({
			status: false,
			message: error.message
		});
	}
};

let requiredFieldsForPost = ['lpPerma'];
/** @type {import('./$types').RequestHandler} */
export const POST = async ({ request, cookies }) => {
	try {
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

		let { lpName, treatmentGroup, treatment, name, phone, email, message,lp } = data;
		let newForm_date = moment().toDate();
		let formInput="LP"
		let status="NEWFORM"
		// let request = await Model.Request.findOne({ lpPerma: lpPerma }, {}, {});
		// if (lpPerma && request) {
		// 	throw new Error(
		// 		JSON.stringify({
		// 			en: `Bu perma seçeneği ile veri kaydedilmiş.`,
		// 			tr: `There is data with this perma option. `
		// 		})
		// 	);
		// }
		const requests = new Model.Request({
			lpName,
			treatmentGroup,
			treatment,
			name,
			phone,
			email,
			message,
			newForm_date,
			formInput,
			status,
			lp
		});
		await requests.save();

		return json({
			status: true,
			requests: requests
		});
	} catch (error) {
		return json({
			status: false,
			message: error.message
		});
	}
};
