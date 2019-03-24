import { GET_ERRORS } from './../actions/types';
// empty object to be the errors object itself

const intialState = {};

export default function(state = intialState, action) {
	switch (action.type) {
		case GET_ERRORS:
			return action.payload;
		default:
			return state;
	}
}
