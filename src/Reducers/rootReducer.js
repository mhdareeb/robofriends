import changeSearchField from './changeSearchField';
import getRobots from './getRobots';
import {combineReducers} from 'redux';

const rootReducer = combineReducers({search:changeSearchField, request: getRobots})

export default rootReducer;