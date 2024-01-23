import { json } from '@sveltejs/kit';
import Model from '../Model';

let requiredFieldsForPatch = [];
/** @type {import('./$types').RequestHandler} */
export const PATCH = async ({ request, params }) => {
	try {
		let data = await request.json();

		let { treatmentId } = params;

		if (!treatmentId) {
			throw new Error(
				JSON.stringify({
					en: `treatmentId field is required`,
					tr: `treatmentId alanı zorunlu`
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

		let {
			treatmentGroup,
			name
		} = data;

		const upsertedTreatment = await Model.Treatment.findByIdAndUpdate(
			treatmentId,
			{
				treatmentGroup,
				name
			},
			{
				upsert: true,
				new: true
			}
		);

		return json({
			status: true,
			treatment: upsertedTreatment
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
		let treatment = await Model.Treatment.findById(params?.treatmentId);

		return json({
			status: true,
			treatment
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
		let treatment = await Model.Treatment.findByIdAndDelete(params?.treatmentId);

		return json({
			status: true,
			treatment
		});
	} catch (error) {
		return json({
			status: false,
			message: error.message
		});
	}
};
