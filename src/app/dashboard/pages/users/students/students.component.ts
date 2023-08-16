import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { StudentFormDialogComponent } from './Students.components/student-form-dialog/student-form-dialog.component';
import { Student } from './Students.components/models';
import { StudentService } from './student.service';
import { NotifierService } from 'src/app/core/services/notifier.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent {
  public students:Observable<Student[]>;

  constructor(
    private matDialog: MatDialog,
    private studentService: StudentService,
    private notifier: NotifierService
  ) {
    this.studentService.loadStudents();
    this.students = this.studentService.getStudents();
  }


  OnCreateStudent(): void {
    this.matDialog
    .open(StudentFormDialogComponent)
    .afterClosed()
    .subscribe({
      next: (v) => { 
        if(v) {
          this.notifier.showSuccess(' Se ha generado el nuevo Estudiante')
          this.studentService.createStudent({
            name: v.name,
            surname: v.surname,
            nation: v.nation,
            birthday: v.birthday,
            sex: v.sex,
            email: v.email,
            password: v.password
          })   
          }
        }
      }
    )
    }
 
  onDeleteStudent(studentToDelete: Student): void {
     if (confirm(`¿Está seguro de eliminar a ${studentToDelete.name} ${studentToDelete.surname}?`)) {
     this.studentService.deleteStudentById(studentToDelete.id);
     this.notifier.showSuccess('Estudiante Eliminado')     
    }
  }

  onEditStudent(studentToEdit: Student): void {
    this.matDialog
      .open(StudentFormDialogComponent, { data: studentToEdit })
      .afterClosed()
      .subscribe({
        next: (studentUpdated) => {
          if (studentUpdated) {
            this.studentService.updateStudentById(studentToEdit.id, studentUpdated);
            this.notifier.showSuccess('Información de Estudiante Editada')
          }
        },
      });    
  }
}