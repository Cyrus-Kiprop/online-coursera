// creating an action function that create and generates courses
export function createCourse(course) {
    return { type:'CREATE_COURSE', course };
  }