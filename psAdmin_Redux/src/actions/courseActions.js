import * as types from './actionTypesConstant';
import courseApi from '../api/mockCourseApi';

export function createCourseSuccess(course){
    return { type:types.CREATE_COURSE_SUCCESS, course};
}

export function loadCoursesSuccess(courses){
    return { type:types.LOAD_COURSES_SUCCESS, courses};
}
export function updateCourseSuccess(course){
    return { type:types.UPDATE_COURSE_SUCCESS, course};
}
export function loadAllCourses(){
    return function(dispatch){
        return courseApi.getAllCourses().then(courses => {
            dispatch(loadCoursesSuccess(courses));
        }).catch(error =>{
            throw(error);
        });
    };
}

export function saveCourse(course){
    return function (dispatch,getState){
        return courseApi.saveCourse(course).then(savedCourse=>{
            course.id? dispatch(updateCourseSuccess(savedCourse)):
            dispatch(createCourseSuccess(savedCourse));   
        }).catch(error =>{throw(error);
        });
    };
}