import { ADD_NEW_TAB, CURRENT_TAB_SELECTED, DELETE_TAB } from '../constants/constants'


const initialState = {
	tabComponents: ['Home'],
}

export default function dashboardReducer(state = initialState, action) {
	switch (action.type) {
		case ADD_NEW_TAB:
			return {
				...state,
				tabComponents: action.payload
			}
		case DELETE_TAB:
			return {
				...state,
				tabComponents: action.payload
			}
		default:
			return {
				...state
			}
	}
}
