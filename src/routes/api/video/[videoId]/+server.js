import { json } from '@sveltejs/kit';
import Model from '../Model';

let requiredFieldsForPatch = [];
/** @type {import('./$types').RequestHandler} */
export const PATCH = async ({ request, params }) => {
	try {
		let data = await request.json();

		let { videoId } = params;

		if (!videoId) {
			throw new Error(
				JSON.stringify({
					en: `videoId field is required`,
					tr: `videoId alanı zorunlu`
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
			lang,
			videoName,
			videoImage,
			videoLink,
			videoTags,
			treatment,
			treatmentGroup,
			order
		} = data;

		const upsertedVideo = await Model.Video.findByIdAndUpdate(
			videoId,
			{
				lang,
				videoName,
				videoImage,
				videoLink,
				videoTags,
				treatment,
				treatmentGroup,
				order
			},
			{
				upsert: true,
				new: true
			}
		);

		return json({
			status: true,
			video: upsertedVideo
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
		let video = await Model.Video.findById(params?.videoId);

		return json({
			status: true,
			video
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
		let video = await Model.Video.findByIdAndDelete(params?.videoId);

		return json({
			status: true,
			video
		});
	} catch (error) {
		return json({
			status: false,
			message: error.message
		});
	}
};
