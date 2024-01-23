import { json } from '@sveltejs/kit';
import Model from './Model';

/** @type {import('./$types').RequestHandler} */
export const GET = async ({ request, cookies, url }) => {
	try {
		let query = {};
		let skip = Number(url.searchParams.get('skip') ?? 0);
		let limit = Number(url.searchParams.get('limit') ?? 100);
		let lang = url.searchParams.get('lang') ?? undefined;
		if (lang) query.lang = lang;
		let landingPage = url.searchParams.get('landingPage') ?? undefined;
		if (landingPage) query.landingPage = landingPage;
		let treatmentGroup = url.searchParams.get('treatmentGroup') ?? undefined;
		let treatment = url.searchParams.get('treatment') ?? undefined;

		let perma = url.searchParams.get('perma') ?? undefined;
		if (perma) query.perma = perma;
		let videos = [];
		if (treatment) {
			let treatmentVideos = await Model.Video.find({
				$and: [{ treatment: treatment }, { lang: lang }]
			}).sort({ order: 1 });
			videos.push(...treatmentVideos);

			if (treatmentGroup) {

				let treatmentGroupVideos = await Model.Video.find({
					$and: [{ treatmentGroup: treatmentGroup }, { treatment: { $ne: treatment } }]
				}).sort({ order: 1 });
				videos.push(...treatmentGroupVideos);
				let treatmentVideos = await Model.Video.find({ treatmentGroup: { $ne: treatmentGroup } });
				videos.push(...treatmentVideos);
			}
		} else if (treatmentGroup) {
			let treatmentGroupVideos = await Model.Video.find({ treatmentGroup: treatmentGroup }).sort({ order: 1 });
			videos.push(...treatmentGroupVideos);

			let treatmentVideos = await Model.Video.find({ treatmentGroup: { $ne: treatmentGroup } }).sort({ order: 1 });
			videos.push(...treatmentVideos);
		}
		if (!treatment && !treatmentGroup) {
			videos = await Model.Video.find(query, {}, { limit, skip }).sort({ order: 1 }).populate(["treatment","treatmentGroup"]);;
		}
		let count = await Model.Video.countDocuments({});
		return json({
			status: true,
			videos,
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

		let { lang, videoName, videoImage, videoLink, videoTags, treatment, treatmentGroup, order } =
			data;
		const videos = new Model.Video({
			lang,
			videoName,
			videoImage,
			videoLink,
			videoTags,
			treatment,
			treatmentGroup,
			order
		});

		await videos.save();

		return json({
			status: true,
			videos: videos
		});
	} catch (error) {
		return json({
			status: false,
			message: error.message
		});
	}
};
