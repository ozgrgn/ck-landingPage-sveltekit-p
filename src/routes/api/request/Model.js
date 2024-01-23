import mongoose from 'mongoose';
const RequestSchema = new mongoose.Schema(
	{
		customNo: { type: Number, default: 1 },
		lpName: String,
		lp: {
			type: mongoose.Schema.Types.ObjectId,
			required: false,
			ref: 'landingPage'
		},
		name: String,
		phone: String,
		email: String,
		message: String,
		status: String,
		newForm_date: String,
		formInput: String,
		formSource: String,
		treatment: {
			type: mongoose.Schema.Types.ObjectId,
			required: false,
			ref: 'treatment'
		},
		treatmentGroup: {
			type: mongoose.Schema.Types.ObjectId,
			required: false,
			ref: 'treatmentGroup'
		},
		patient: {
			type: mongoose.Schema.Types.ObjectId,
			required: false,
			ref: 'patient'
		}
	},
	{ timestamps: true }
);

export const Request = mongoose.model('request', RequestSchema);

export default { Request };
