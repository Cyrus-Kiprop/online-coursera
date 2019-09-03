// creating an action function that create and generates courses
import * as actionTypes from './actionTypes' //allow for autocopletions
export function createCourse(course) {
    return { type:actionTypes.CREATE_COURSE, course };
  }