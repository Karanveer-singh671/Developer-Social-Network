import { ADD_POST, GET_POSTS, DELETE_POST, POST_LOADING } from '../actions/types';

const initialState = {
	posts: [],
	post: {},
	loading: false
};
export default function(state = initialState, action) {
	switch (action.type) {
		case POST_LOADING:
			return {
				...state,
				loading: true
			};
		case GET_POSTS:
			return {
				...state,
				posts: action.payload,
				loading: false
			};
		case GET_POST:
			return {
				...state,
				post: action.payload,
				loading: false
			};
		case ADD_POST:
			return {
				...state,
				// want new post coming from action.payload and old posts array use spread operator to put payload in front
				posts: [ action.payload, ...state.posts ]
			};
		case DELETE_POST:
			return {
				...state,
				posts: state.posts.filter((post) => post._id !== action.payload)
			};
		default:
			return state;
	}
}
