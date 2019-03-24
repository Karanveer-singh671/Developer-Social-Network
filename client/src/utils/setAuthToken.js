import axios from 'axios';
// will always attach authorization header (now don't manually need token for each req)

const setAuthToken = (token) => {
	if (token) {
		// apply to every request, header value is 'Authorization'
		axios.defaults.headq.common['Authorization'] = token;
	} else {
		// Delete auth header
		delete axios.defaults.headq.common['Authorization'];
	}
};

export default setAuthToken;
