import { Component, signal } from '@angular/core';
import { StudentDataType } from '../../model/data.type';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-student-list',
  imports: [RouterLink],
  templateUrl: './student-list.html',
  styleUrl: './student-list.css'
})
export class StudentList {
  studentLIst : Array<StudentDataType>= [];
  goodStudent = signal<StudentDataType[]>([]);
  constructor(){
    this.getStudentList();
    this.getGoodStudent()
  }
    getStudentList() {
    const data = localStorage.getItem('student-list')
    if(data){
      this.studentLIst = JSON.parse(data)
    }
  }
  getGoodStudent() {
    const data = this.studentLIst.filter((item) => !item.rejected && !item.pending);
    this.goodStudent.set(data);
  }
  rejectStudent(id: string) {
    const student = this.studentLIst.find(item => item.id === id);
    if (student) {
      student.rejected = true;
      localStorage.setItem('student-list', JSON.stringify(this.studentLIst));
    }
  }
  pendingStudent(id: string) {
    const student = this.studentLIst.find(item => item.id === id);
    if (student) {
      student.pending = true;
      localStorage.setItem('student-list', JSON.stringify(this.studentLIst));
    }
  }
  deleteStudent(id: string) {
    this.studentLIst = this.studentLIst.filter(student => student.id !== id);
    localStorage.setItem('student-list', JSON.stringify(this.studentLIst));
  }
}
