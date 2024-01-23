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
		let landingPages = await Model.LandingPage.find(query, {}, { limit, skip });

		let count = await Model.LandingPage.countDocuments({ query });
		return json({
			status: true,
			landingPages,
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
			lpPerma,
			lpName,
			lpTitle,
			slider1Name,
			slider1Image,
			slider1MobileImage,
			slider1Text,
			slider1Button,
			slider1ButtonTextColor,
			slider1TextColor,
			slider1Whatsapp,
			slider1ButtonColor,
			slider1Direction,
			slider2Name,
			slider2Image,
			slider2MobileImage,
			slider2Text,
			slider2Button,
			slider2ButtonTextColor,
			slider2TextColor,
			slider2Whatsapp,
			slider2ButtonColor,
			slider2Direction,
			slider3Name,
			slider3Image,
			slider3MobileImage,
			slider3Text,
			slider3Button,
			slider3ButtonTextColor,
			slider3TextColor,
			slider3Whatsapp,
			slider3ButtonColor,
			slider3Direction,
			infoSpot,
			infoText1,
			infoText2,
			infoImage,
			infoVideoLink,
			infoVideoImage,
			formSlogan1,
			formSlogan2,
			formSlogan3,
			formButton,
			formSpot,
			formHeader,
			formWhatsappText,
			featuresSpot,
			featuresHeader,
			features1Image,
			features1Header,
			features1Text,
			features2Image,
			features2Header,
			features2Text,
			isFaq,
			faq1q,
			faq1a,
			faq2q,
			faq2a,
			faq3q,
			faq3a,
			faq4q,
			faq4a,
			faq5q,
			faq5a,
			isTab,
			tab1Header,
			tab1Text1,
			tab1Text2,
			tab1Image,
			tab2Header,
			tab2Text1,
			tab2Text2,
			tab2Image,
			tab3Header,
			tab3Text1,
			tab3Text2,
			tab3Image,
			tab4Header,
			tab4Text1,
			tab4Text2,
			tab4Image,
			testimonialSpot,
			testimonialHeader,
			videoSpot,
			videoHeader,
			link1,
			link1Perma,
			link2,
			link2Perma,
			link3,
			link3Perma,
			link4,
			link4Perma,
			companyShortDesc,
			address1,
			address2,
			email,
			phone,
			whatsapp,
			wpMessage,
			treatment,
			treatmentGroup,
			infoWithSliderImage1,
			infoWithSliderImage2,
			infoWithSliderImage3,
			infoWithSliderSpot,
			infoWithSliderHeader,
			infoWithSliderText,
			infoWithVideoSpot,
			infoWithVideoHeader,
			infoWithVideoVideoImage,
			infoWithVideoVideoName,
			infoWithVideoVideoLink,
			infoWithVideoText,
			beforeAfterHeader,
			beforeAfterSpot,
			firstBefore,
			firstAfter,
			secondBefore,
			secondAfter,
			thirdBefore,
			thirdAfter
		} = data;
		let landingPage = await Model.LandingPage.findOne({ lpPerma: lpPerma }, {}, {});
		if (lpPerma && landingPage) {
			throw new Error(
				JSON.stringify({
					en: `Bu perma seçeneği ile veri kaydedilmiş.`,
					tr: `There is data with this perma option. `
				})
			);
		}
		const landingPages = new Model.LandingPage({
			lang,
			lpPerma,
			lpName,
			lpTitle,
			slider1Name,
			slider1Image,
			slider1MobileImage,
			slider1Text,
			slider1Button,
			slider1ButtonTextColor,
			slider1TextColor,
			slider1Whatsapp,
			slider1ButtonColor,
			slider1Direction,
			slider2Name,
			slider2Image,
			slider2MobileImage,
			slider2Text,
			slider2Button,
			slider2ButtonTextColor,
			slider2TextColor,
			slider2Whatsapp,
			slider2ButtonColor,
			slider2Direction,
			slider3Name,
			slider3Image,
			slider3MobileImage,
			slider3Text,
			slider3Button,
			slider3ButtonTextColor,
			slider3TextColor,
			slider3Whatsapp,
			slider3ButtonColor,
			slider3Direction,
			infoSpot,
			infoText1,
			infoText2,
			infoImage,
			infoVideoLink,
			infoVideoImage,
			formSlogan1,
			formSlogan2,
			formSlogan3,
			formButton,
			formSpot,
			formHeader,
			formWhatsappText,
			featuresSpot,
			featuresHeader,
			features1Image,
			features1Header,
			features1Text,
			features2Image,
			features2Header,
			features2Text,
			isFaq,
			faq1q,
			faq1a,
			faq2q,
			faq2a,
			faq3q,
			faq3a,
			faq4q,
			faq4a,
			faq5q,
			faq5a,
			isTab,
			tab1Header,
			tab1Text1,
			tab1Text2,
			tab1Image,
			tab2Header,
			tab2Text1,
			tab2Text2,
			tab2Image,
			tab3Header,
			tab3Text1,
			tab3Text2,
			tab3Image,
			tab4Header,
			tab4Text1,
			tab4Text2,
			tab4Image,
			testimonialSpot,
			testimonialHeader,
			videoSpot,
			videoHeader,
			link1,
			link1Perma,
			link2,
			link2Perma,
			link3,
			link3Perma,
			link4,
			link4Perma,
			companyShortDesc,
			address1,
			address2,
			email,
			phone,
			whatsapp,
			wpMessage,
			treatment,
			treatmentGroup,
			infoWithSliderImage1,
			infoWithSliderImage2,
			infoWithSliderImage3,
			infoWithSliderSpot,
			infoWithSliderHeader,
			infoWithSliderText,
			infoWithVideoSpot,
			infoWithVideoHeader,
			infoWithVideoVideoImage,
			infoWithVideoVideoName,
			infoWithVideoVideoLink,
			infoWithVideoText,
			beforeAfterHeader,
			beforeAfterSpot,
			firstBefore,
			firstAfter,
			secondBefore,
			secondAfter,
			thirdBefore,
			thirdAfter
		});

		await landingPages.save();

		return json({
			status: true,
			landingPages: landingPages
		});
	} catch (error) {
		return json({
			status: false,
			message: error.message
		});
	}
};
