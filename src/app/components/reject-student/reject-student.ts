import { Component, signal } from '@angular/core';
import { StudentDataType } from '../../model/data.type';

@Component({
  selector: 'app-reject-student',
  imports: [],
  templateUrl: './reject-student.html',
  styleUrl: './reject-student.css'
})
export class RejectStudent {

  studentLIst : Array<StudentDataType>= [];
  rejectList = signal<StudentDataType[]>([]);
  constructor(){
    this.getStudentList();
    this.getRejectList()
  }
  getStudentList() {
    const data = localStorage.getItem('student-list')
    if(data){
      this.studentLIst = JSON.parse(data)
    }
  }
  getRejectList() {
    const data = this.studentLIst.filter((item) => item.rejected);
    this.rejectList.set(data);
  }
}
