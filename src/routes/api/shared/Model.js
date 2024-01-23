import mongoose from 'mongoose';
import db from '$lib/db.js';
const SharedSchema = new mongoose.Schema(
	{
		lang: String,
		logo: String,
		googleRate: String,
		trustPilotRate: String,
		facebookRate: String,
		links: String,
		yourName: String,
		yourPhone: String,
		yourMail: String,
		yourMessage: String,
		nameRequired: String,
		phoneRequired: String,
		mailRequired: String,
		sendT: String,
		sent: String,
		contactT: String,
		addressT: String,
		emailT: String,
		phoneT: String,
		whatsappT: String,
		copright: String,
		readMore: String,
		postedOn: String,
		cookies: String,

	},
	{ timestamps: true }
);

export const Shared = mongoose.model('shared', SharedSchema);

export default { Shared };

