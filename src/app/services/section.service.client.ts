export class SectionServiceClient {

  SECTION_URL = 'http://localhost:3000/api/course/COURSEID/section';

  findSectionsForStudent(studentId) {
    const url = 'http://localhost:3000/api/student/' +  studentId + '/section';
    return fetch(url, {
      credentials: 'include'
    })
      .then(response => response.json());
  }

  enrollStudentInSection(studentId, sectionId) {
    const url = 'http://localhost:3000/api/student/' + studentId + '/section/' + sectionId;
    return fetch(url, {
      method: 'post',
      credentials: 'include'
    });
  }

  unenrollStudentInSection(studentId, sectionId) {
    const url = 'http://localhost:3000/api/student/' + studentId + '/section/' + sectionId;
    return fetch(url, {
      method: 'delete',
      credentials: 'include'
    });
    // console.log('unenrollment');
  }

  findSectionsForCourse(courseId) {
    return fetch(this.SECTION_URL.replace('COURSEID', courseId))
      .then(response => response.json());
  }

  createSection(courseId, name, seats) {
    const section = {courseId, name, seats};
    return fetch(this.SECTION_URL.replace('COURSEID', courseId), {
      method: 'post',
      body: JSON.stringify(section),
      credentials: 'include',
      headers: {
        'content-type': 'application/json'
      }
    });
  }

  updateSection(newSection) {
    return fetch('http://localhost:3000/api/section/' + newSection._id, {
      method: 'put',
      body: JSON.stringify(newSection),
      credentials: 'include',
      headers: {
        'content-type': 'application/json'
      }
    });
  }

  deleteSection(section) {
    return fetch('http://localhost:3000/api/section/' + section._id, {
      method: 'delete',
      body: JSON.stringify(section),
      credentials: 'include',
      headers: {
        'content-type': 'application/json'
      }
    });
  }

  hasEnrollment(studentId, sectionId, courseId) {
    return fetch('http://localhost:3000/api/student/' + studentId + '/course/' + courseId + '/section/' + sectionId, {
      credentials: 'include',
    })
      .then(res => res.json());
  }
}
