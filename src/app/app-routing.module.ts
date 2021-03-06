import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {StudentsComponent} from './students/students.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {StudentDetailComponent} from './student-detail/student-detail.component';
import { ClassComponent } from './class/class.component';
import { NewClassComponent } from './class/new-class/new-class.component';
import { ClassDetailComponent } from './class/class-detail/class-detail.component';
import { SearchClassComponent } from './class/search-class/search-class.component';
import { TeacherComponent } from './teacher/teacher.component';
import { TeacherDetailComponent } from './teacher/teacher-detail/teacher-detail.component';
import { SearchTeacherComponent } from './teacher/search-teacher/search-teacher.component';
import {NewTeacherComponent} from './teacher/new-teacher/new-teacher.component';
import {EditTeacherComponent} from './teacher/edit-teacher/edit-teacher.component';



const routes: Routes = [
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: 'students', component: StudentsComponent },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'detail/:id', component: StudentDetailComponent },
    { path: 'teacher', component: TeacherComponent },
    { path: 'class', component:  ClassComponent},
    {path: 'TeacherHome', component: TeacherComponent},
    {path: 'newteacher', component: NewTeacherComponent},
    {path: 'editTeacher', component: EditTeacherComponent},
    {path: 'teacher-detail/:id', component: TeacherDetailComponent}];


@NgModule({
    exports: [ RouterModule ],
    imports: [ RouterModule.forRoot(routes) ]
})
export class AppRoutingModule { }
