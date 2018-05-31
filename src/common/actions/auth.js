import { SET_LOGGED_IN } from '../constants/constants'


export function setLoggedIn() {
	return (dispatch) => {
        console.log('hhhhhhss');
		dispatch({ type: SET_LOGGED_IN, payload: true });
	}
}
