import { Component, OnInit } from '@angular/core';
import {User} from '../models/user.model.client';
import {UserServiceClient} from '../services/user.service.client';
import {Router} from '@angular/router';
// import {SectionServiceClient} from '../services/section.service.client';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private service: UserServiceClient,
              // private sectionService: SectionServiceClient,
              private router: Router) { }

  user = new User;
  isAdmin = false;

  sections = [];

  update() {
    console.log(this.user);
    this.service.updateUser(this.user).then(() => alert('Updated Successfully'));
  }

  logout() {
    this.service
      .logout()
      .then(() =>
        this.router.navigate(['login']));

  }

  initialUser() {
    this.service
      .profile()
      .then(user => {
        this.user = user;
        if (user.username === 'admin' && user.password === 'admin') {
          this.isAdmin = true;
        }
      });
  }

  ngOnInit() {
    this.initialUser();

    // this.sectionService
    //   .findSectionsForStudent()
    //   .then(sections => this.sections = sections );
  }

}
