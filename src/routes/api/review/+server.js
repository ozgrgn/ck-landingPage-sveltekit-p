import { json } from '@sveltejs/kit';
import Model from './Model';

/** @type {import('./$types').RequestHandler} */
export const GET = async ({ request, cookies, url }) => {
	try {
		let query = {};
		let skip = Number(url.searchParams.get('skip') ?? 0);
		let limit = Number(url.searchParams.get('limit') ?? 10);
		let lang = url.searchParams.get('lang') ?? undefined;
		if (lang) query.lang = lang;
		let treatmentGroup = url.searchParams.get('treatmentGroup') ?? undefined;
		let treatment = url.searchParams.get('treatment') ?? undefined;
		let reviews = [];
		if (treatment) {
			let treatmentReviews = await Model.Review.find({
				$and: [{ treatment: treatment }, { lang: lang }]
			}).sort({ order: 1 });
			reviews.push(...treatmentReviews);
			if (treatmentGroup) {
				let treatmentGroupReviews = await Model.Review.find({
					$and: [{ treatmentGroup: treatmentGroup }, { treatment: { $ne: treatment } }]
				}).sort({ order: 1 });
				reviews.push(...treatmentGroupReviews);
				let treatmentReviews = await Model.Review.find({
					treatmentGroup: { $ne: treatmentGroup }
				}).sort({ order: 1 });
				reviews.push(...treatmentReviews);
			}
		} else if (treatmentGroup) {
			let treatmentGroupReviews = await Model.Review.find({ treatmentGroup: treatmentGroup }).sort({
				order: 1
			});
			reviews.push(...treatmentGroupReviews);

			let treatmentReviews = await Model.Review.find({
				treatmentGroup: { $ne: treatmentGroup }
			}).sort({ order: 1 });
			reviews.push(...treatmentReviews);
		}
		if (!treatment && !treatmentGroup) {
			reviews = await Model.Review.find(query, {}, { limit, skip })
				.sort({ order: 1 })
				.populate('treatment');
		}

		let count = await Model.Review.countDocuments({ query });
		return json({
			status: true,
			reviews,
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

		let {
			lang,
			reviewName,
			reviewDate,
			reviewLink,
			reviewPlatform,
			reviewText,
			reviewStars,
			reviewAvatar,
			order,
			treatment,
			treatmentGroup
		} = data;
		const reviews = new Model.Review({
			lang,
			reviewName,
			reviewDate,
			reviewLink,
			reviewPlatform,
			reviewText,
			reviewStars,
			reviewAvatar,
			order,
			treatment,
			treatmentGroup
		});

		await reviews.save();

		return json({
			status: true,
			reviews: reviews
		});
	} catch (error) {
		return json({
			status: false,
			message: error.message
		});
	}
};
