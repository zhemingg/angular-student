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
  student = '';
  isUpdating = false;
  updatingSectionName;
  updatingSectionSeat = 0;
  updatingSectionId;

  loadSections(courseId) {
    if (courseId) {
      this.courseId = courseId;
      this.service
        .findSectionsForCourse(courseId)
        .then(sections => this.sections = sections);
    }
  }

  createSection(sectionName, seats) {
    this
      .service
      .createSection(this.courseId, sectionName, seats)
      .then(() => {
        alert('Successfully created');
        this.loadSections(this.courseId);
      });
  }

  enroll(section) {
    if (this.student === '') {
      alert('Please log in');
    } else {
      this.service
        .enrollStudentInSection(this.student._id, section._id)
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

