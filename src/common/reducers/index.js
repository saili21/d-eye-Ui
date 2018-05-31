import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import dashboard from './dashboard';
import auth from './auth'

export default combineReducers({
  routing: routerReducer,
  dashboard,
  auth
})