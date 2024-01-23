import mongoose from 'mongoose';
import db from '$lib/db.js';
const VideoSchema = new mongoose.Schema(
	{
		lang: String,
		videoName: String,
		videoImage: String,
		videoLink: String,
		videoTags: String,
		order: Number,
		treatment: {
			type: mongoose.Schema.Types.ObjectId,
			required: false,
			ref: "treatment"
		},
		treatmentGroup: {
			type: mongoose.Schema.Types.ObjectId,
			required: false,
			ref: "treatmentGroup"
		},
	},
	{ timestamps: true }
);

export const Video = mongoose.model('video', VideoSchema);

export default { Video };

