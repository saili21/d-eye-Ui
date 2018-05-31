
import { SET_LOGGED_IN } from '../constants/constants'

const initialState = {
	isAuthenticated : true
}

export default function dashboardReducer(state = initialState, action) {
	switch (action.type) {
		case SET_LOGGED_IN:
			return {
				...state,
				isAuthenticated: action.payload
			}
		default:
			return {
				...state
			}
	}
}
