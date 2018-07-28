import { Component, OnInit } from '@angular/core';
import {User} from '../models/user.model.client';
import {UserServiceClient} from '../services/user.service.client';
import {Router} from '@angular/router';
import {SectionServiceClient} from '../services/section.service.client';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private service: UserServiceClient,
              private sectionService: SectionServiceClient,
              private router: Router) { }

  user = new User;
  isAdmin = false;

  sections = [];

  update() {
    // console.log(this.user);
    this.service.updateUser(this.user).then(() => alert('Updated Successfully'));
  }

  logout() {
    this.service
      .logout()
      .then(() =>
        this.router.navigate(['login']));

  }

  unenrollment(userId, sectionId) {
    this.sectionService
      .unenrollStudentInSection(userId, sectionId)
      .then(res => res.json())
      .then(res => {
        console.log(res);
        if (res.error) {
          alert(res.error);
        } else {
          this.sectionService
            .findSectionsForStudent(userId)
            .then(sections => {
              if (sections.error) {
                alert(sections.error);
              } else {
                this.sections = sections;
                alert('Un-enrollment successfully')
              }
            });
        }
      });
  }

  initialUser() {
    this.service
      .profile()
      .then(user => {
        if (user.error) {
          alert ('You have logged out!');
        } else {
          this.user = user;
          if (user.username === 'admin' && user.password === 'admin') {
            this.isAdmin = true;
          }

          this.sectionService
            .findSectionsForStudent(user._id)
            .then(sections => {
              if (sections.error) {
                alert(sections.error);
              } else {
                this.sections = sections;
              }
            });
        }
      });
  }

  ngOnInit() {
    this.initialUser();
  }

}
