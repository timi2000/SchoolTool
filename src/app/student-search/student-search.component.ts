import { Component, OnInit } from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {Student} from '../student';
import {StudentService} from '../student.service';
import {debounceTime, distinctUntilChanged, switchMap} from 'rxjs/internal/operators';

@Component({
  selector: 'app-student-search',
  templateUrl: './student-search.component.html',
  styleUrls: ['./student-search.component.css']
})
export class StudentSearchComponent implements OnInit {
    students$: Observable<Student[]>;
    //The searchTerms property is declared as an RxJS Subject.
    private searchTerms = new Subject<string>();

    constructor(private studentService: StudentService) {}

    // Push a search term into the observable stream.
    search(term: string): void {
        this.searchTerms.next(term);

    }


    ngOnInit(): void {
        this.students$ = this.searchTerms.pipe(
            // wait 300ms after each keystroke before considering the term
            debounceTime(300),
            /*debounceTime(300) waits until the flow of new string
            // events pauses for 300 milliseconds before passing along the
            // latest string. You'll never make requests more frequently than 300ms.
                        ignore new term if same as previous term*/
            distinctUntilChanged(),
            /*distinctUntilChanged() ensures that a request is sent only if the filter text changed.*/
            // switch to new search observable each time the term changes
            switchMap((term: string) => this.studentService.searchStudents(term))

        );

    }
}
