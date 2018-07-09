import { Component, OnInit } from '@angular/core';
import { Course } from '../models/course.model.client';
import { CourseServiceClient } from '../services/course.service.client';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {

  constructor(private service: CourseServiceClient) { }

  courses: Course[] = [];

  ngOnInit() {
    this.service.findAllCourses()
      .then(courses => this.courses = courses);
  }

}
