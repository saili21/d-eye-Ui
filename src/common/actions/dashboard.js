import * as constant from '../constants/constants';
import { routeConstants } from '../../common/constants/routerConstants';
import history from '../history';

export function addTab(tabName) {
	return (dispatch, getState) => {
		let newtabs = [];
		if (localStorage.getItem('tabs')) {
			newtabs = localStorage.getItem('tabs').split(',');
		} else {
			newtabs = Object.create(getState().dashboard.tabComponents);
		}
		// if tab already exist
		if (newtabs.includes(tabName)) {
			history.push(routeConstants[tabName]);
		} else { // if tab not present add it
			newtabs.push(tabName);
			dispatch({ type: constant.ADD_NEW_TAB, payload: {newtabs} });
			history.push(routeConstants[tabName]);
		}
		localStorage.setItem('tabs', newtabs);
	}
}

export function deleteTab(tabName) {
	let tabs = [];
	return (dispatch, getState) => {
		if (localStorage.getItem('tabs')) {
			tabs = localStorage.getItem('tabs').split(',');
		} else {
			tabs = Object.create(getState().dashboard.tabComponents)
		}

		var index = tabs.indexOf(tabName);
		if (index >= 0) {
			tabs.splice(index, 1);
		}
		localStorage.setItem('tabs', tabs);

		dispatch({ type: constant.DELETE_TAB, payload: tabs })
	}
}