import CONFIG from '$src/env';
import { json } from '@sveltejs/kit';
import nodemailer from 'nodemailer';
import moment from 'moment';
import emailTransaction from './emailTransaction.js';
import RequestModel from '../../request/Model';

let requiredFields = { POST: ['name', 'phone'] };
/** @type {import('./$types').RequestHandler} */
export const POST = async ({ request }) => {
	try {
		let data = await request.json();

		if (requiredFields['POST']) {
			requiredFields['POST'].map((value) => {
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
		let transporter = nodemailer.createTransport({
			host: CONFIG.MAIL.host,
			port: CONFIG.MAIL.port,
			secure: true,
			tls: {
				rejectUnauthorized: false
			},
			auth: {
				user: CONFIG.MAIL.user,
				pass: CONFIG.MAIL.pass
			}
		});

		// let info = await transporter.sendMail(
		// 	"CK HEALTH WEB",
		// 	"admin@palaexport.de",
		// 	"Yeni Rezervasyon",
		// 	emailTransaction(
		// 		moment().format("DD/MM/YYYY,HH:MM"),
		// 		lang,
		// 		name,
		// 		phone,
		// 		email,
		// 		message,
		// 		treatment
		// 	)
		// );
		let info = await transporter.sendMail({
			from: `"CK Health WEB" <${CONFIG.MAIL.from}>`,
			to: 'ck@ckhealthturkey.com',
			subject: 'Yeni Rezervasyon',
			text: '',
			html: emailTransaction(moment().format('DD/MM/YYYY'), lpName, name, phone, email, message)
		});
		const lastNumber = await RequestModel.Request.findOne().sort({ customNo: -1 });
		let customNo;
		if (lastNumber.customNo) {
			customNo = lastNumber.customNo +1;
		} else {
			customNo = 1;
		}
		let newForm_date = moment().toDate();
		let formInput = 'LP';
		let formSource = 'LP';
		let status = 'NEWFORM';
		const requests = await new RequestModel.Request({
			customNo,
			lpName,
			lp,
			treatmentGroup,
			treatment,
			name,
			phone,
			email,
			message,
			newForm_date,
			formInput,
			formSource,
			status
		});

		await requests.save();
		return json({
			status: true,
			message: 'mail sent successfully'
		});
	} catch (error) {
		return json({
			status: false,
			message: error.message
		});
	}
};
