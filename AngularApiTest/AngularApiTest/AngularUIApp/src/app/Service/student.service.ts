import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject, take } from 'rxjs';
import { StudentDetails, Students } from '../Model/Students';

@Injectable()
export class StudentService {

  private studenApiUrl = 'http://localhost:5138/api/Student/GetStudents';

  constructor(private http: HttpClient) { }

  getStudentRecords(): Observable<StudentDetails> {
    const subject = new Subject<StudentDetails>();
    this.http.get<StudentDetails>(this.studenApiUrl)
      .subscribe(
        response => {
          subject.next(response);
        },
        error => {
          subject.error(error);
        }
    );

    return subject;
  }
}
