import mongoose from 'mongoose';
import db from '$lib/db.js';
const TreatmentSchema = new mongoose.Schema(
	{
	
		name: String,
		treatmentGroup: {
			type: mongoose.Schema.Types.ObjectId,
			required: false,
			ref: "treatmentGroup"
		},
	},
	{ timestamps: true }
);

export const Treatment = mongoose.model('treatment', TreatmentSchema);

export default { Treatment };

