import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {SectionServiceClient} from '../services/section.service.client';
import {UserServiceClient} from '../services/user.service.client';
import {CourseServiceClient} from '../services/course.service.client';

@Component({
  selector: 'app-section-list',
  templateUrl: './section-list.component.html',
  styleUrls: ['./section-list.component.css']
})
export class SectionListComponent implements OnInit {

  constructor(private service: SectionServiceClient,
              private userService: UserServiceClient,
              private router: Router,
              private courseService: CourseServiceClient,
              private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      this.courseService.findCourseById(params['courseId']).then(course => this.course = course);
      this.loadSections(params['courseId']);
    });
  }

  sectionName = '';
  seats = '';
  courseId = '';
  sections = [];
  student;
  isUpdating = false;
  updatingSectionName;
  updatingSectionSeat = 0;
  updatingSectionId;
  course;

  loadSections(courseId) {
    if (courseId) {
      this.courseId = courseId;
      this.service
        .findSectionsForCourse(courseId)
        .then(sections => this.sections = sections);
    }
  }

  createSection(sectionName, seats) {
    if (seats === '') {
      alert('please enter the number of section seats');
    } else {
      if (sectionName === '') {
        sectionName = this.course.title + ' ' + 'Section' + (this.sections.length + 1);
      }
      this
        .service
        .createSection(this.courseId, sectionName, seats)
        .then(() => {
          alert('Successfully created');
          this.loadSections(this.courseId);
        });
    }

  }

  enroll(section) {
    // console.log(this.student);
    if (this.student.error) {
      alert(this.student.error);
    } else {
      this.service
        .hasEnrollment(this.student._id, section._id, this.courseId)
        .then(res => {
          console.log(res);
          if (res.length === 0) {
            this.service
              .enrollStudentInSection(this.student._id, section._id)
              .then(temp => temp.json())
              .then(result => {
                if (result.error) {
                  alert(result.error);
                } else {
                  this.router.navigate(['profile']);
                }
              });
          } else {
            alert('You have been enrolled');
          }
        });

    }
  }

  ngOnInit() {
      this.userService
        .profile()
        .then(user => {
          if (user !== undefined) {
            this.student = user;
          }
        });
  }

  updateSection(section) {
    this.isUpdating = !this.isUpdating;
    this.updatingSectionName = section.name;
    this.updatingSectionSeat = section.seats;
    this.updatingSectionId = section._id;
  }

  saveUpdate() {
    const newSection = {
      _id: this.updatingSectionId,
      name : this.updatingSectionName,
      seats : this.updatingSectionSeat
    };
    this.service
      .updateSection(newSection)
      .then(() => {
        this.isUpdating = false;
        alert('Successfully updated');
        this.loadSections(this.courseId);
      });
  }

  deleteSection(section) {
    this.service
      .deleteSection(section)
      .then(() => {
        alert('Successfully deleted');
        this.loadSections(this.courseId);
      });
  }

}

