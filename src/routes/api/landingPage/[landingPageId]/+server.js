import { json } from '@sveltejs/kit';
import Model from '../Model';

let requiredFieldsForPatch = [];
/** @type {import('./$types').RequestHandler} */
export const PATCH = async ({ request, params }) => {
	try {
		let data = await request.json();

		let { landingPageId } = params;

		if (!landingPageId) {
			throw new Error(
				JSON.stringify({
					en: `landingPageId field is required`,
					tr: `landingPageId alanı zorunlu`
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

		const upsertedLandingPage = await Model.LandingPage.findByIdAndUpdate(
			landingPageId,
			{
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
			},
			{
				upsert: true,
				new: true
			}
		);

		return json({
			status: true,
			landingPage: upsertedLandingPage
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
		let landingPage = await Model.LandingPage.findById(params?.landingPageId);

		return json({
			status: true,
			landingPage
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
		let landingPage = await Model.LandingPage.findByIdAndDelete(params?.landingPageId);

		return json({
			status: true,
			landingPage
		});
	} catch (error) {
		return json({
			status: false,
			message: error.message
		});
	}
};
