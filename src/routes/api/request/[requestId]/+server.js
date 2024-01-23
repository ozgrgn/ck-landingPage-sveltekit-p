import { json } from '@sveltejs/kit';
import Model from '../Model';

let requiredFieldsForPatch = [];
/** @type {import('./$types').RequestHandler} */
export const PATCH = async ({ request, params }) => {
	try {
		let data = await request.json();

		let { requestId } = params;

		if (!requestId) {
			throw new Error(
				JSON.stringify({
					en: `requestId field is required`,
					tr: `requestId alanı zorunlu`
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

		let { lpName, treatmentGroup, treatment, name, phone, email, message, lp } = data;
console.log(lp,"iiii")
		const upsertedRequest = await Model.Request.findByIdAndUpdate(
			requestId,
			{
				lpName,
				treatmentGroup,
				treatment,
				name,
				phone,
				email,
				message,
				lp
			},
			{
				upsert: true,
				new: true
			}
		);

		return json({
			status: true,
			request: upsertedRequest
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
		let request = await Model.Request.findById(params?.requestId);

		return json({
			status: true,
			request
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
		let request = await Model.Request.findByIdAndDelete(params?.requestId);

		return json({
			status: true,
			request
		});
	} catch (error) {
		return json({
			status: false,
			message: error.message
		});
	}
};
