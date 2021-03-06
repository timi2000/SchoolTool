import { Injectable } from '@angular/core';
import {Student} from './student';
import {STUDENTS} from './mock-students';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { MessageService } from './message.service';
import {Teacher} from './teacher';
import {Teacherone} from './models/model-interface';



const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

const BASE_URL = 'http://localhost:3000/api/students/';
@Injectable({
  providedIn: 'root'
})

export class StudentService {
    private teacherUrl = 'api/teacher';
    private studentsUrl = 'api/students';
    constructor(
        private http: HttpClient,
        private messageService: MessageService) { }

    private log(message: string) {
        this.messageService.add( `Studentmessage: ${message}`);
    }
getStudents (): Observable<Student[]> {
        return this.http.get<Student[]>(this.studentsUrl)
         .pipe(
                tap(students => this.log('fetched Students')),
                catchError(this.handleError('getStudents', []))
            );
   }
    getStudentNo404<Data>(id: number): Observable<Student> {
        const url = `${BASE_URL}/?id=${id}`;
        return this.http.get<Student[]>(url)
            .pipe(
                map(student => student[1]), // returns a {0|1} element array
                tap(h => {
                    const outcome = h ? `fetched` : `did not find`;
                    this.log(`${outcome} student id=${id}`);
                }),
                catchError(this.handleError<Student>(`get id=${id}`))
            );
    }


    getStudent(id: number): Observable<Student> {
        const url = `${this.studentsUrl}/${id}`;
        return this.http.get<Student>(url).pipe(
            tap(_ => this.log(`fetched student id=${id}`)),
            catchError(this.handleError<Student>(`getStudent id=${id}`))
        );
    }
    getTeacher(id: number): Observable<Teacher> {
        const url = `${this.teacherUrl}/${id}`;
        return this.http.get<Teacher>(url).pipe(
            tap(_ => this.log(`fetched teacher id=${id}`)),
            catchError(this.handleError<Teacher>(`getTeacher id=${id}`))
        );
    }
    /** PUT: update the hero on the server */
    updateStudent (student: Student): Observable<any> {
        return this.http.put(this.studentsUrl, student, httpOptions).pipe(
            tap(_ => this.log(`updated Student id=${student.id}`)),
            catchError(this.handleError<any>('updateStudent'))
        );
    }
    updateTeacher (teacher: Teacher): Observable<any> {
        return this.http.put(this.teacherUrl, teacher, httpOptions).pipe(
            tap(_ => this.log(`updated teacher id=${teacher.id}`)),
            catchError(this.handleError<any>('updateTeacher'))
        );
    }
    addStudent (student: Student): Observable<Student> {
        return this.http.post<Student>(this.studentsUrl, student, httpOptions).pipe(
            tap((student: Student) => this.log(`added student w/ id=${student.id}`)),
            catchError(this.handleError<Student>('addStudent'))
        );
    }
    addTeacher (teacher: Teacher): Observable<Teacher> {
        return this.http.post<Teacher>(this.teacherUrl, teacher, httpOptions).pipe(
            tap((teacher: Teacher) => this.log(`added Teacher w/ id=${teacher.id}`)),
            catchError(this.handleError<Teacher>('addTeacher'))
        );
    }
    /** DELETE: delete the hero from the server */
    deleteStudent (student: Student | number): Observable<Student> {
        const id = typeof student === 'number' ? student : student.id;
        const url = `${this.studentsUrl}/${id}`;

        return this.http.delete<Student>(url, httpOptions).pipe(
            tap(_ => this.log(`deleted student id=${id}`)),
            catchError(this.handleError<Student>('deleteStudent'))
        );
    }

    searchStudents(term: string): Observable<Student[]> {
        if (!term.trim()) {
            // if not search term, return empty hero array.
            return of([]);
        }
       return this.http.get<Student[]>(`${this.studentsUrl}/?firstname=${term}`).pipe(
            tap(_ => this.log(`found student matching "${term}"`)),
            catchError(this.handleError<Student[]>('Search', []))
        );
        }
    searchTeacher(term: string): Observable<Teacher[]> {
        if (!term.trim()) {
            // if not search term, return empty hero array.
            return of([]);
        }
        return this.http.get<Teacher[]>(`${this.teacherUrl}/?firstname=${term}`).pipe(
            tap(_ => this.log(`found teacher matching "${term}"`)),
            catchError(this.handleError<Teacher[]>('Search', []))
        );
    }

  /*  saveTask(teacher: Teacherone) {
        const options = {
            body: teacher,
            method: teacher.idTeacher ? RequestMethod.Put :RequestMethod.Post
        };

        return this.http.request(BASE_URL + (teacher.id || ''), options)
            .map(res => res.json());
    }*/

    /**
     * Handle Http operation that failed.
     * Let the app continue.
     * @param operation - name of the operation that failed
     * @param result - optional value to return as the observable result
     */
    private handleError<T> (operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {

            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead

            // TODO: better job of transforming error for user consumption
            this.log(`${operation} failed: ${error.message}`);

            // Let the app keep running by returning an empty result.
            return of(result as T);
        };
    }
    /* getHero(id: number): Observable<Hero> {
         // TODO: send the message _after_ fetching the hero
         this.messageService.add(`HeroService: fetched hero id=${id}`);
         return of(HEROES.find(hero => hero.id === id));
     }

     */


    /* getHeroes(): Observable<Hero[]> {
        return of(HEROES);
    }*/
}
