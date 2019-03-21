import { TEST_DISPATCH } from './types';

// Register User

export const registeruser = (userData) => {
	// must have a type
	return {
		type: TEST_DISPATCH,
		payload: userData
	};
};
