import { ADD_POST } from '../actions/types';

const initialState = {
	posts: [],
	post: {},
	loading: false
};
export default function(state = initialState, action) {
	switch (action.type) {
		case ADD_POST:
			return {
				...state,
				// want new post coming from action.payload and old posts array use spread operator to put payload in front
				posts: [ action.payload, ...state.posts ]
			};
		default:
			return state;
	}
}
