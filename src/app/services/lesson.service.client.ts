export class LessonServiceClient {
  findLessonsForModule(moduleId) {
    return fetch('http://zhemingg-assignment.herokuapp.com/api/course/courseId/module/' + moduleId + '/lesson')
      .then(response => response.json());
  }
}
