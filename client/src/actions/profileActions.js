import axios from 'axios';
import { GET_PROFILE, PROFILE_LOADING, GET_ERRORS, CLEAR_CURRENT_PROFILE, SET_CURRENT_USER } from './types';

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

// create profile
export const createProfile = (profileData, history) => (dispatch) => {
	axios.post('/api/profile', profileData).then((res) => history.push('/dashboard')).catch((err) =>
		dispatch({
			type: GET_ERRORS,
			payload: err.response.data
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

// add experience
export const addExperience = (expData, history) => (dispatch) => {
	axios.post('/api/profile/experience', expData).then((res) => history.push('/dashboard')).catch((err) => {
		dispatch({
			type: GET_ERRORS,
			payload: err.response.data
		});
	});
};

// delete account and profile
// dispatch since making axios request
export const deleteAccount = () => (dispatch) => {
	if (window.confirm('Are you sure? This cannot be undone')) {
		axios
			.delete('/api/profile')
			.then((res) =>
				dispatch({
					type: SET_CURRENT_USER,
					payload: {}
				})
			)
			.catch((err) => {
				dispatch({
					type: GET_ERRORS,
					payload: err.response.data
				});
			});
	}
};
