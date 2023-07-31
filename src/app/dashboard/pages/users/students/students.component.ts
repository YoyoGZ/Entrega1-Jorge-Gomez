import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { StudentFormDialogComponent } from './Students.components/student-form-dialog/student-form-dialog.component';
import { Student } from '../models';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent {
  public students: Student[] = [];

  constructor(
    private matDialog: MatDialog,
    private studentService: StudentService,
  ) {
    this.students = this.studentService.getStudent();
  }

OnCreateStudent(): void {
   this.matDialog
   .open(StudentFormDialogComponent)
   .afterClosed()
   .subscribe({
    next: (v) => { 
      if(v) {
        this.students =[
          ...this.students,
          {
          id: this.students.length + 1,
          name: v.name,
          surname: v.surname,
          nation: v.nation,
          birthday: v.birthday,
          sex: v.sex,
          email: v.email,
          password: v.password
        }]
      }
    }
   })
 }
 
 onDeleteStudent(studentToDelete: Student ): void {
  if (confirm(`¿Está seguro de eliminar a ${studentToDelete.name} ${studentToDelete.surname}?`)) {
    this.students = this.students.filter((Student) => Student.id !== studentToDelete.id);
  console.log(studentToDelete);
  
}}

onEditStudent(studentToEdit: Student): void {
  this.matDialog
  .open(StudentFormDialogComponent, {
    data: studentToEdit
  })
  .afterClosed()
  .subscribe({
    next: (studentUpdated) => {
      if (studentUpdated) {
        this.students = this.students.map((student) => {
          return student.id === studentToEdit.id ? {...student, ...studentUpdated} : student
        })
      }
    },    
  });
}
}