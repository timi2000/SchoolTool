import { Component, OnInit } from '@angular/core';

import {StudentService} from '../../student.service';

import {Student} from '../../student';
import {Location} from '@angular/common';
import {Teacher} from '../../teacher';

@Component({
  selector: 'app-new-teacher',
  templateUrl: './new-teacher.component.html',
  styleUrls: ['./new-teacher.component.css']
})
export class NewTeacherComponent implements OnInit {
    teachers: Teacher[];

  constructor(private studentService: StudentService,
    private location: Location) { }
    add(
    Gender_idGender: number,
    firstname: string,
    lastname: string,
    address: string,
    place: string,
    city: string,
    email: string,
    phone: number,
    mobile: number,
    active: number,
    image: number,
    birthday: number): void {
        firstname = firstname.trim();
        lastname = lastname.trim();
        address = address.trim();
        place = place.trim();
        city = city.trim();
        email = email.trim();
        //  if (!firstname) { return; }
        this.studentService.addTeacher({ firstname, lastname, address, place, city, email, phone, mobile, active, image, birthday } as Teacher)
            .subscribe(teacher => {
                this.teachers.push(teacher);
            });
    }

    goBack(): void {
        this.location.back();
    }
  ngOnInit() {
  }

}
