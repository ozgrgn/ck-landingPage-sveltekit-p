
/** @type {import('./$types').PageLoad} */
export async function load({ params }) {
	if (!params.lang) {
		params.lang = "en"
	}
console.log(params,"sdfs")
	return {
		lpPerma:params.lpPerma,

	

	};
}



