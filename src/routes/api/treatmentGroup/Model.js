import mongoose from 'mongoose';
import db from '$lib/db.js';

const TreatmentGroupSchema = new mongoose.Schema(
	{
		name: String,
	
	},
	{ timestamps: true }
);

export const TreatmentGroup = mongoose.model('treatmentGroup', TreatmentGroupSchema);

export default { TreatmentGroup };
