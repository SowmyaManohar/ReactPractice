import {combineReducers} from 'redux';
import courses from './courseReducer';
import authors from './authorReducer';

const rootReducer = combineReducers({
    courses,
    authors  //courses:courses ES6 short hand
});

export default rootReducer;