import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TeacherFormDialogComponent } from '../teachers.components/teacher-form-dialog/teacher-form-dialog.component';
import { Teacher } from '../models';
import { TeacherService } from '../teacher.service';

@Component({
  selector: 'app-teachers',
  templateUrl: './teachers.component.html',
  styleUrls: ['./teachers.component.scss']
})
export class TeachersComponent {
  public teachers: Teacher[] = [];

  constructor(
    private matDialog: MatDialog,
    private teacherService: TeacherService,
  ) {
    this.teachers = this.teacherService.getTeacher();
  }

OnCreateTeacher(): void {
   this.matDialog
   .open(TeacherFormDialogComponent)
   .afterClosed()
   .subscribe({
    next: (v) => { 
      if(v) {
        this.teachers =[
          ...this.teachers,
          {
          id: this.teachers.length + 1,
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
 
 onDeleteTeacher(teacherToDelete: Teacher ): void {
  if (confirm(`¿Está seguro de eliminar a ${teacherToDelete.name} ${teacherToDelete.surname}?`)) {
    this.teachers = this.teachers.filter((Teacher) => Teacher.id !== teacherToDelete.id);
  console.log(teacherToDelete);
  
}}

onEditTeacher(teacherToEdit: Teacher): void {
  this.matDialog
  .open(TeacherFormDialogComponent, {
    data: teacherToEdit
  })
  .afterClosed()
  .subscribe({
    next: (teacherUpdated) => {
      if (teacherUpdated) {
        this.teachers = this.teachers.map((teacher) => {
          return teacher.id === teacherToEdit.id ? {...teacher, ...teacherUpdated} : teacher
        })
      }
    },    
  });
}

}
