import { Component, OnInit } from '@angular/core';
import {Teacherone} from '../../models/model-interface';
import * as model from '../../models/model-interface';
import {Location} from '@angular/common';
import {StudentService} from '../../student.service';
import {skip} from 'rxjs/internal/operators';
@Component({
  selector: 'app-edit-teacher',
  templateUrl: './edit-teacher.component.html',
  styleUrls: ['./edit-teacher.component.css']
})
export class EditTeacherComponent implements OnInit {

  model = model;
  teacher: Teacherone ;
//  teacher: any;

  constructor( private location: Location) {
      this.teacher = {
       firstname: 'Neues Entwickler-team zusammenstellen',
       lastname: 'fuck'
   };
}
//twoway databinding
    saveTeacher(value: any){
      this.teacher = value;
      console.log(this.teacher);
}
//oneway databinding
   saveTeacher1(value: any) {
      this.teacher = value;
        console.log(this.teacher);
    }

    goBack() {
        this.location.back();
        return false;
    }
  ngOnInit() {
  }

}
