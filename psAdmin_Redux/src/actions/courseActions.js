import * as types from './actionTypesConstant';

export function createCourse(course){
    return { type:types.CREATE_COURSE, course};
}