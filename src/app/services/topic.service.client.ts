export class TopicServiceClient {
  findTopicsForLesson(lessonId) {
    return fetch('http://zhemingg-assignment.herokuapp.com/api/course/courseId/module/moduleId/lesson/' + lessonId + '/topic')
      .then(response => response.json());
  }
}
