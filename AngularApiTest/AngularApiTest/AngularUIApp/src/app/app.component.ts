import { Component, OnInit } from '@angular/core';
import { Students } from './Model/Students';
import { StudentService } from './Service/student.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  constructor(private studentService: StudentService) { }
  public gridData: Students[] = new Array<Students>();
  ngOnInit(): void {
    this.studentService.getStudentRecords()
      .subscribe(response => {
        this.gridData = response.students;
      });
  }
  title = 'AngularUIApp';
}
