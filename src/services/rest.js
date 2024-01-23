import Http from './http';
import ENV from '../env';

const sendMail = (lpName, treatment, treatmentGroup, name, phone, email, message, lp) => {
	console.log(lp,"lp")
	return Http.post(`${ENV.API_URL}/services/email`, {
		lpName,
		treatment,
		treatmentGroup,
		name,
		phone,
		email,
		message,
		lp
	});
};

const login = (email, password) => {
	return Http.post(`${ENV.API_URL}/admin/login`, { email, password });
};

const uploadImage = (file) => {
	const formData = new FormData();

	formData.append('file', file);

	return Http.postFormData(`${ENV.API_URL}/services/file-upload`, formData);
};
// LandingPages
const getLandingPages = (lpPerma,limit,skip) => {
	let data = {};
	if (lpPerma) {
		data.lpPerma = lpPerma;
	}
	if (limit) {
		data.limit = limit;
	}
	if (skip) {
		data.skip = skip;
	}

	return Http.get(`${ENV.API_URL}/landingPage`, { ...data });
};
const addLandingPage = (data) => {
	return Http.post(`${ENV.API_URL}/landingPage`, data);
};

const updateLandingPage = (landingPageId, data) => {
	return Http.patch(`${ENV.API_URL}/landingPage/${landingPageId}`, {
		...data
	});
};

const getLandingPage = (landingPageId) => {
	return Http.get(`${ENV.API_URL}/landingPage/${landingPageId}`);
};

const deleteLandingPage = (landingPageId) => {
	return Http.delete(`${ENV.API_URL}/landingPage/${landingPageId}`);
};
const getTreatments = (lang, treatmentGroup, limit, skip) => {
	let data = {};
	if (lang) {
		data.lang = lang;
	}
	if (treatmentGroup) {
		data.treatmentGroup = treatmentGroup;
	}
	if (limit) {
		data.limit = limit;
	}
	if (skip) {
		data.skip = skip;
	}

	return Http.get(`${ENV.API_URL}/treatment`, { ...data });
};
const getTreatmentGroups = (lang, limit, skip, perma) => {
	let data = {};
	if (lang) {
		data.lang = lang;
	}
	if (limit) {
		data.limit = limit;
	}
	if (skip) {
		data.skip = skip;
	}
	if (perma) {
		data.perma = perma;
	}
	return Http.get(`${ENV.API_URL}/treatmentGroup`, { ...data });
};

// Reviews
const getReviews = (lang, limit, skip, treatment, treatmentGroup) => {
	let data = {};
	if (lang) {
		data.lang = lang;
	}
	if (limit) {
		data.limit = limit;
	}
	if (skip) {
		data.skip = skip;
	}
	if (treatment) {
		data.treatment = treatment;
	}
	if (treatmentGroup) {
		data.treatmentGroup = treatmentGroup;
	}

	return Http.get(`${ENV.API_URL}/review`, { ...data });
};
const addReview = (data) => {
	return Http.post(`${ENV.API_URL}/review`, data);
};

const updateReview = (reviewId, data) => {
	return Http.patch(`${ENV.API_URL}/review/${reviewId}`, {
		...data
	});
};

const getReview = (reviewId) => {
	return Http.get(`${ENV.API_URL}/review/${reviewId}`);
};

const deleteReview = (reviewId) => {
	return Http.delete(`${ENV.API_URL}/review/${reviewId}`);
};
// Languages
const getLanguages = (limit, skip) => {
	let data = {};
	if (limit) {
		data.limit = limit;
	}
	if (skip) {
		data.skip = skip;
	}

	return Http.get(`${ENV.API_URL}/language`, { ...data });
};
const addLanguage = (data) => {
	return Http.post(`${ENV.API_URL}/language`, data);
};

const updateLanguage = (languageId, data) => {
	return Http.patch(`${ENV.API_URL}/language/${languageId}`, {
		...data
	});
};

const getLanguage = (languageId) => {
	return Http.get(`${ENV.API_URL}/language/${languageId}`);
};

const deleteLanguage = (languageId) => {
	return Http.delete(`${ENV.API_URL}/language/${languageId}`);
};
// Videos
const getVideos = (lang, limit, skip, treatment, treatmentGroup) => {
	let data = {};
	if (limit) {
		data.limit = limit;
	}
	if (skip) {
		data.skip = skip;
	}
	if (lang) {
		data.lang = lang;
	}
	if (treatment) {
		data.treatment = treatment;
	}
	if (treatmentGroup) {
		data.treatmentGroup = treatmentGroup;
	}

	return Http.get(`${ENV.API_URL}/video`, { ...data });
};
const addVideo = (data) => {
	return Http.post(`${ENV.API_URL}/video`, data);
};

const updateVideo = (videoId, data) => {
	return Http.patch(`${ENV.API_URL}/video/${videoId}`, {
		...data
	});
};

const getVideo = (videoId) => {
	return Http.get(`${ENV.API_URL}/video/${videoId}`);
};

const deleteVideo = (videoId) => {
	return Http.delete(`${ENV.API_URL}/video/${videoId}`);
};
// Shareds
const getShareds = (lang, limit, skip) => {
	let data = {};
	if (limit) {
		data.limit = limit;
	}
	if (skip) {
		data.skip = skip;
	}
	if (lang) {
		data.lang = lang;
	}

	return Http.get(`${ENV.API_URL}/shared`, { ...data });
};
const addShared = (data) => {
	return Http.post(`${ENV.API_URL}/shared`, data);
};

const updateShared = (sharedId, data) => {
	return Http.patch(`${ENV.API_URL}/shared/${sharedId}`, {
		...data
	});
};

const getShared = (sharedId) => {
	return Http.get(`${ENV.API_URL}/shared/${sharedId}`);
};

const deleteShared = (sharedId) => {
	return Http.delete(`${ENV.API_URL}/shared/${sharedId}`);
};
export default {
	sendMail,
	login,
	uploadImage,
	getTreatments,
	getTreatmentGroups,
	//LandingPage
	getLandingPages,
	getLandingPage,
	addLandingPage,
	updateLandingPage,
	deleteLandingPage,
	//Review
	getReviews,
	getReview,
	addReview,
	updateReview,
	deleteReview,
	//Language
	getLanguages,
	getLanguage,
	addLanguage,
	updateLanguage,
	deleteLanguage,
	//Video
	getVideos,
	getVideo,
	addVideo,
	updateVideo,
	deleteVideo,
	//Shared
	getShareds,
	getShared,
	addShared,
	updateShared,
	deleteShared
};
