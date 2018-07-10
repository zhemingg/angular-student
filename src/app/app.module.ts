import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { CourseServiceClient } from './services/course.service.client';
import { CourseListComponent } from './course-list/course-list.component';
import {routing} from './app.routing';
import { CourseViewerComponent } from './course-viewer/course-viewer.component';
import { ModuleListComponent } from './module-list/module-list.component';
import {ModuleServiceClient} from './services/module.service.client';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    CourseListComponent,
    CourseViewerComponent,
    ModuleListComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing
  ],
  providers: [
    CourseServiceClient,
    ModuleServiceClient
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
