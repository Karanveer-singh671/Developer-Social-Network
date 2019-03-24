// import { TEST_DISPATCH } from './types';
import { GET_ERRORS } from './types';
import axios from 'axios';
import { registerUser } from './authActions';

// Register User

// export const registerUser = (userData) => {
// 	// must have a type
// 	return {
// 		type: TEST_DISPATCH,
// 		payload: userData
// 	};
// };

// this const template is the same as putting registerUser function and then dispatch function inside of it
export const registerUser = (userData, history) => (dispatch) => {
	axios
		.post('api/users/register', userData)
		.then((result) =>
			// inside component to redirect use this.props.history.push("/something") but here can't do by default in action
			history.push('/login')
		)
		.catch((err) =>
			dispatch({
				type: GET_ERRORS,
				payload: err.response.data
			})
		);
};

// login - Get user token
export const loginUser = (userData) => (dispatch) => {
	axios
		.post('/api/users/login', userData)
		.then((res) => {
			// save to local storage
			const { token } = res.data;
			// set token to localstorage (local storage only stores strings)
			localStorage.setItem('jwtToken', token);
			// set token to Auth header (authorization in header with token)
			setAuthToken(token);
		})
		.catch((err) =>
			dispatch({
				type: GET_ERRORS,
				payload: err.response.data
			})
		);
};
