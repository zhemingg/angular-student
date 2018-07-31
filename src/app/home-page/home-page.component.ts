import { Component, OnInit } from '@angular/core';
import {UserServiceClient} from '../services/user.service.client';
import {CourseServiceClient} from '../services/course.service.client';
import {SectionServiceClient} from '../services/section.service.client';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor(private service: UserServiceClient,
              private sectionService: SectionServiceClient,
              private courseService: CourseServiceClient) { }

  user;
  isLoggedIn = false;
  enrolledCourse = [];


  ngOnInit() {
    this.service.profile()
      .then(user => {
        this.user = user;
        console.log(user);
        if (!user.error) {
          this.isLoggedIn = true;
          this.sectionService
            .findSectionsForStudent(user._id)
            .then(sections => {
              sections.forEach(section => {
                this.courseService.findCourseById(section.section.courseId)
                  .then(course => {
                    let isThere = false;
                    this.enrolledCourse.forEach(temp => {
                      if (temp.id === course.id) {
                        isThere = true;
                      }
                    });
                    if (!isThere) {
                      this.enrolledCourse.push(course);
                    }
                  });
              });
            });
        }});
  }



}
