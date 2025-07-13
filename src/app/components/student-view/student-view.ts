import { Component, OnInit } from '@angular/core';
import { ResultDataType, StudentDataType } from '../../model/data.type';
import { ActivatedRoute } from '@angular/router';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-student-view',
  imports: [NgClass],
  templateUrl: './student-view.html',
  styleUrl: './student-view.css'
})
export class StudentView implements OnInit {
 student!: StudentDataType | undefined;
  studentResults!: ResultDataType | undefined
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      const storedData = localStorage.getItem('student-list');
      if (storedData) {
        const studentList: StudentDataType[] = JSON.parse(storedData);
        this.student = studentList.find(student => student.id === id);
      }
      const resultData = localStorage.getItem('student-result');
      if (resultData) {
        const resultList: ResultDataType[] = JSON.parse(resultData);
        this.studentResults = resultList.find(result => result.userId === this.student?.id);
      }
    }
  }
}
