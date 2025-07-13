import { Routes } from '@angular/router';
import { StudentList } from './components/student-list/student-list';
import { StudentFormComponent } from './components/student-form/student-form';
import { RejectStudent } from './components/reject-student/reject-student';
import { PendingStudents } from './components/pending-students/pending-students';
import { StudentView } from './components/student-view/student-view';
import { CreateResult } from './components/create-result/create-result';

export const routes: Routes = [
    { path: '', component: StudentList },
    { path: 'create-students', component: StudentFormComponent },
    { path: 'reject-students', component: RejectStudent },
    { path: 'pending-students', component: PendingStudents },
    { path: 'students/:id', component: StudentView },
    { path: 'create-result', component: CreateResult },
    // {
    // path: 'todo/:id',
    // component: UserTodo
    // }
];
