import { Component, OnInit } from '@angular/core';
import {StudentService} from '../student.service';
import {Student} from '../student';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

    students: Student[] = [];

    constructor(private heroService: StudentService) { }

    ngOnInit() {
        this.getStudents();
    }

    getStudents(): void {
        this.heroService.getStudents()
            .subscribe(students => this.students = students.slice(1, 5));
    }
}
