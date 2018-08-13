import { Component, OnInit } from '@angular/core';
import {Student} from '../student';
import {StudentService} from '../student.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {


    // selectedHero: Hero;
    students: Student[];

    constructor(private studentService: StudentService) { }

    ngOnInit() {
        this.getStudents();
    }

    getStudents(): void {
        this.studentService.getStudents()
            .subscribe(students => this.students = students);
    }
    add(firstname: string): void {
        firstname = firstname.trim();
        if (!firstname) { return; }
        this.studentService.addStudent({ firstname } as Student)
            .subscribe(student => {
                this.students.push(student);
            });
    }
    delete(student: Student): void {
        this.students = this.students.filter(h => h !== student);
        this.studentService.deleteStudent(student).subscribe();
    }
}
