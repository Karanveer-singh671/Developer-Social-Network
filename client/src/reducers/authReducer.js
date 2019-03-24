// import { TEST_DISPATCH } from '../actions/types';
import { SET_CURRENT_USER } from '../actions/types';
import isEmpty from './../validation/is-empty';

const intialState = {
	isAuthenticated: false,
	user: {}
};

export default function(state = intialState, action) {
	switch (action.type) {
		// case TEST_DISPATCH:
		// 	return {
		// 		...state,
		// 		user: action.payload
		// 	};
		case SET_CURRENT_USER:
			return {
				...state,
				// check if not empty object, so when logout can just check if it is and thus no access
				isAuthenticated: !isEmpty(action.payload),
				user: action.payload
			};
		default:
			return state;
	}
}
