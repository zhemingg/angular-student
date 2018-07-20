import { Component, OnInit } from '@angular/core';
import {TopicServiceClient} from '../services/topic.service.client';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-topic-list',
  templateUrl: './topic-list.component.html',
  styleUrls: ['./topic-list.component.css']
})
export class TopicListComponent implements OnInit {

  constructor(private service: TopicServiceClient,
              private route: ActivatedRoute) {
    this.route.params.subscribe(params => this.setParams(params));
  }

  courseId;
  moduleId;
  lessonId;
  topicId;
  topics = [];
  // dataLoaded = false;

  setParams(params) {
    this.courseId = params['courseId'];
    this.moduleId = params['moduleId'];
    this.lessonId = params['lessonId'];
    this.topicId = params['topicId'];
    // if (typeof (this.lessonId) === undefined) {
    //   this.dataLoaded = false;
    // } else {
    //   this.dataLoaded = true;
    // }
    if (this.lessonId) {
      this.loadTopics(this.lessonId);
    }
  }

  loadTopics (lessonId) {
    this.lessonId = lessonId;
    this.service.findTopicsForLesson(lessonId)
      .then(topics => {this.topics = topics; console.log(topics); } );
  }

  ngOnInit() {
  }

}
