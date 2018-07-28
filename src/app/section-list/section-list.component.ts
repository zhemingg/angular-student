import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {SectionServiceClient} from '../services/section.service.client';
import {UserServiceClient} from '../services/user.service.client';

@Component({
  selector: 'app-section-list',
  templateUrl: './section-list.component.html',
  styleUrls: ['./section-list.component.css']
})
export class SectionListComponent implements OnInit {

  constructor(private service: SectionServiceClient,
              private userService: UserServiceClient,
              private router: Router,
              private route: ActivatedRoute) {
    this.route.params.subscribe(params => this.loadSections(params['courseId']));
  }

  sectionName = '';
  seats = '';
  courseId = '';
  sections = [];
  studentId = '';

  loadSections(courseId) {
    this.courseId = courseId;
    this.service
      .findSectionsForCourse(courseId)
      .then(sections => this.sections = sections);
  }

  createSection(sectionName, seats) {
    this
      .service
      .createSection(this.courseId, sectionName, seats)
      .then(() => {
        this.loadSections(this.courseId);
      });
  }

  enroll(section) {
    if (this.studentId === '') {
      alert('Please log in');
    } else {
      this.service
        .enrollStudentInSection(this.studentId, section._id)
        .then((res) => res.json())
        .then(result => {
          if (result.error) {
            alert(result.error);
          } else {
            this.router.navigate(['profile']);
          }
        });
    }
  }

  ngOnInit() {
      this.userService
        .profile()
        .then(user => {
          if (user !== undefined) {
            this.studentId = user._id;
          }
        });
  }

}

