import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { StudentDataType } from '../../model/data.type';

@Component({
  selector: 'app-student-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './student-form.html',
  styleUrl: './student-form.css',
})
export class StudentFormComponent {
    student: StudentDataType = {
    full_name : '',
    email : '',
    phone : '',
    courses : '',
    department : '',
    date_of_birth : '',
    gender : '',
    terms_and_conditions: false,
    studentPhoto: '',
    full_address: '',
    rejected: false,
    pending: false,
  };
  studentLIst : Array<StudentDataType>= []
  
  constructor(){
    this.getStudentList()
  }
    getStudentList() {
    const data = localStorage.getItem('student-list')
    if(data){
      this.studentLIst = JSON.parse(data)
    }
  }
  idGenerator() : string{
    const date = new Date();
    const timestamp = date.getTime();
    const randomNumber = Math.floor(Math.random() * 10000)
    return `student-${timestamp}-${randomNumber}`
  }
  studentRegister(form: NgForm) {
    if(form.valid){
      const data = {
        ...form.value,
        id: this.idGenerator(), 
        rejected: false,
        pending: false,
      }
      this.studentLIst.push(data)
      localStorage.setItem('student-list', JSON.stringify(this.studentLIst))
      alert("Data save successfully")
      form.reset()
    } else{
      alert("Data save Unccessfully")
    }
  }
}