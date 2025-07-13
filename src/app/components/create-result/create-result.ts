import { Component, signal } from '@angular/core';
import { ResultDataType, StudentDataType } from '../../model/data.type';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-create-result',
  imports: [FormsModule],
  templateUrl: './create-result.html',
  styleUrl: './create-result.css'
})
export class CreateResult {
  studentLIst : Array<StudentDataType>= [];  
  goodStudent = signal<StudentDataType[]>([]);
  resultList : Array<ResultDataType>= []
  resultData : ResultDataType = {
    id: '',
    userId: '',
    subject: '',
    marks: 0
  } 
  constructor(){
    this.getStudentList();
    this.getGoodStudent()
    this.geAllResult()
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
    idGenerator() : string{
    const date = new Date();
    const timestamp = date.getTime();
    const randomNumber = Math.floor(Math.random() * 10000)
    return `student-${timestamp}-${randomNumber}`
  }
  resultSubmit(form: NgForm){
    if(form.valid){
      const data = {
        ...form.value,
        id: this.idGenerator(), 
      }
      this.resultList.push(data)
      localStorage.setItem('student-result', JSON.stringify(this.resultList))
      alert("Data save successfully")
      form.reset()
    } else{
      alert("Data save Unccessfully")
    }
  }
  geAllResult() {
    const data = localStorage.getItem('student-result')
    if(data){
      this.resultList = JSON.parse(data)
    }
  }
}
