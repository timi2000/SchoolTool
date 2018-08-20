import {Component, Input, OnInit} from '@angular/core';
import {Location} from '@angular/common';
import {Student} from '../../student';
import {ActivatedRoute} from '@angular/router';
import {StudentService} from '../../student.service';
import {Teacher} from '../../teacher';


//import {Teacher} from '../../teacher';

@Component({
  selector: 'app-teacher-detail',
  templateUrl: './teacher-detail.component.html',
  styleUrls: ['./teacher-detail.component.css']
})
export class TeacherDetailComponent implements OnInit {


    @Input() teacher: Teacher;
    constructor(
        private route: ActivatedRoute,
        private studentService: StudentService,
        private location: Location
    ) {}
    ngOnInit(): void {
        this.getTeacher();
    }

    getTeacher(): void {
        const id = +this.route.snapshot.paramMap.get('id');
        this.studentService.getTeacher(id)
            .subscribe(teacher => this.teacher = teacher );
    }
    goBack(): void {
        this.location.back();
    }
    save(): void {
        this.studentService.updateTeacher(this.teacher)
            .subscribe(() => this.goBack());
    }

}
