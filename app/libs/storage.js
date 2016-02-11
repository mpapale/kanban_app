// mpapale: I hesitate to keep this file's name
// "storage.js" since it is specifically a 
// wrapper around localStorage.
//
// Additionally, I'm surprised we're implementing
// this thing ourselves - prefer to use an external
// library in these cases. "localForage" is mentioned.

export default {
	get(k) {
		try {
			return JSON.parse(localStorage.getItem(k));
		}
		catch(e) {
			return null;
		}
	},

	set(k, v) {
		localStorage.setItem(k, JSON.stringify(v));
	}
};