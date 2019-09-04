
// creating an action function that create and generates courses
import * as actionTypes from './actionTypes' //allow for autocopletions
import * as courseApi from '../../api/courseApi' //keep api separate to keep thunks simple

export function createCourse(course) {
    return { type:actionTypes.CREATE_COURSE, course };
  }

  export function loadCourseSuccess(courses){
    return {
      type: actionTypes.LOAD_COURSES_SUCCESS, courses
    }
  }


export function loadCourses() {
  return function (dispatch){
    return courseApi.getCourses().then((courses) => {
      dispatch(loadCourseSuccess(courses))
    }).catch((err) => {
      throw err;
    });
  } ;
}