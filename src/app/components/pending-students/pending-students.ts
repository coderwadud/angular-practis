import { Component, signal } from '@angular/core';
import { StudentDataType } from '../../model/data.type';

@Component({
  selector: 'app-pending-students',
  imports: [],
  templateUrl: './pending-students.html',
  styleUrl: './pending-students.css'
})
export class PendingStudents {
  studentLIst : Array<StudentDataType>= [];
  pedingList = signal<StudentDataType[]>([]);
  constructor(){
    this.getStudentList();
    this.getPendingList()
  }
  getStudentList() {
    const data = localStorage.getItem('student-list')
    if(data){
      this.studentLIst = JSON.parse(data)
    }
  }
  getPendingList() {
    const data = this.studentLIst.filter((item) => item.pending);
    this.pedingList.set(data);
  }
}
