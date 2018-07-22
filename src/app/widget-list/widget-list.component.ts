import { Component, OnInit } from '@angular/core';
import {WidgetServiceClient} from '../services/widget.service.client';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-widget-list',
  templateUrl: './widget-list.component.html',
  styleUrls: ['./widget-list.component.css']
})
export class WidgetListComponent implements OnInit {

  constructor(private service: WidgetServiceClient,
              private route: ActivatedRoute) {
    this.route.params.subscribe(params => this.setParams(params));
  }
  topicId;
  widgets = [];
  setParams(params) {
    this.topicId = params['topicId'];
    if (this.topicId) {
      this.loadWidgets(this.topicId);
    }
  }

  loadWidgets(topicId) {
    this.topicId = topicId;
    this.service.findWidgetsForTopic(topicId)
      .then(widgets => this.widgets = widgets );
  }


  ngOnInit() {
  }

}
