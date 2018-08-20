import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StudentsComponent } from './students/students.component';
import { StudentDetailComponent } from './student-detail/student-detail.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppRoutingModule } from './app-routing.module';
import { MessagesComponent } from './messages/messages.component';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';
import {HttpClientModule} from '@angular/common/http';
import { StudentSearchComponent } from './student-search/student-search.component';
import { ClassComponent } from './class/class.component';
import { NewClassComponent } from './class/new-class/new-class.component';
import { ClassDetailComponent } from './class/class-detail/class-detail.component';
import { SearchClassComponent } from './class/search-class/search-class.component';
import { TeacherComponent } from './teacher/teacher.component';
import { TeacherDetailComponent } from './teacher/teacher-detail/teacher-detail.component';
import { SearchTeacherComponent } from './teacher/search-teacher/search-teacher.component';
import { SearchStudentComponent } from './students/search-student/search-student.component';
import { NewStudentComponent } from './students/new-student/new-student.component';
import { NewTeacherComponent } from './teacher/new-teacher/new-teacher.component';
import { EditTeacherComponent } from './teacher/edit-teacher/edit-teacher.component';





@NgModule({
  declarations: [
    AppComponent,
    StudentsComponent,
    StudentDetailComponent,
    DashboardComponent,
    MessagesComponent,
    StudentSearchComponent,
    ClassComponent,
    NewClassComponent,
    ClassDetailComponent,
    SearchClassComponent,
    TeacherComponent,
    TeacherDetailComponent,
    SearchTeacherComponent,
    SearchStudentComponent,
    NewStudentComponent,
    NewTeacherComponent,
    EditTeacherComponent
  ],
  imports: [

      ReactiveFormsModule,
    BrowserModule,
      FormsModule,
      AppRoutingModule,
      HttpClientModule,
// The HttpClientInMemoryWebApiModule module intercepts HTTP requests
// and returns simulated server responses.
// Remove it when a real server is ready to receive requests.
      HttpClientInMemoryWebApiModule.forRoot(
          InMemoryDataService, { dataEncapsulation: false }
      )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
