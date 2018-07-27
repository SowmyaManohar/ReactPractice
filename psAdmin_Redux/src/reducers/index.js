import {combineReducers} from 'redux';
import courses from './courseReducer';

const rootReducer = combineReducers({
    courses   //courses:courses ES6 short hand
});

export default rootReducer;