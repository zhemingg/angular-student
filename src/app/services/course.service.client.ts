export class CourseServiceClient {
  COURSE_URL = 'https://zhemingg-assignment.herokuapp.com/api/course';
  findAllCourses() {
    return fetch(this.COURSE_URL)
      .then(response => response.json());
  }
  findCourseById(courseId) {
    // console.log(this.COURSE_URL + '/' + courseId);
    return fetch(this.COURSE_URL + '/' + courseId)
      .then(response => response.json());
  }
}
