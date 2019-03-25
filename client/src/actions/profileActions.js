import axios from 'axios';
import { GET_PROFILE, PROFILE_LOADING, GET_ERRORS, CLEAR_CURRENT_PROFILE } from './types';

// get current profile
export const getCurrentProfile = () => (dispatch) => {
	dispatch(setProfileLoading());
	// hit endpoint if find profile call getprofile gives payload which is profile
	axios
		.get('/api/profile')
		.then(
			(res) =>
				dispatch({
					type: GET_PROFILE,
					payload: res.data
				})
			// return empty object as profile instead of GET_ERRORS
		)
		.catch((err) =>
			dispatch({
				type: GET_PROFILE,
				payload: {}
			})
		);
};

// profile loading
export const setProfileLoading = () => {
	return {
		type: PROFILE_LOADING
	};
};

// clear profile
export const clearCurrentProfile = () => {
	return {
		type: CLEAR_CURRENT_PROFILE
	};
};
