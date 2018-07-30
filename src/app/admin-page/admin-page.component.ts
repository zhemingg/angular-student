import { Component, OnInit } from '@angular/core';
import {CourseServiceClient} from '../services/course.service.client';
import {Course} from '../models/course.model.client';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css']
})
export class AdminPageComponent implements OnInit {

  constructor(private service: CourseServiceClient) { }
  courses: Course[] = [];
  courseId = '';

  ngOnInit() {
    this.service.findAllCourses()
      .then(courses => this.courses = courses);
  }

  setCourseId(courseId) {
    this.courseId = courseId;
  }

}
