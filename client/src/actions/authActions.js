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
export const registerUser = (userData) => (dispatch) => {
	axios.post('api/users/register', userData).then((result) =>
		console.log(result.data).catch((err) =>
			dispatch({
				type: GET_ERRORS,
				payload: err.response.data
			})
		)
	);
};
