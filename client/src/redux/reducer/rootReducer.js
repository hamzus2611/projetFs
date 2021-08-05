import {combineReducers} from 'redux';
import exerciseReducer from './exerciseReducer';
import UserReducer from './UserReducer';
import EditUser from './EditUser';
import GroupeReducer from './GroupeReducer';
import CoursReducer from './CoursReducer'
export default combineReducers({exerciseReducer ,UserReducer, EditUser, GroupeReducer,CoursReducer});