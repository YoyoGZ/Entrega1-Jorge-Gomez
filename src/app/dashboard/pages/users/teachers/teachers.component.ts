import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TeacherFormDialogComponent } from './teachers.components/teacher-form-dialog/teacher-form-dialog.component';
import { Teacher } from './teachers.components/models';
import { TeacherService } from './teacher.service';
import { NotifierService } from 'src/app/core/services/notifier.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-teachers',
  templateUrl: './teachers.component.html',
  styleUrls: ['./teachers.component.scss']
})
export class TeachersComponent {
  public teachers:Observable<Teacher[]>;

  constructor(
    private matDialog: MatDialog,
    private teacherService: TeacherService,
    private notifier: NotifierService
  ) {
    this.teacherService.loadTeachers();
    this.teachers = this.teacherService.getTeachers();
  }


  OnCreateTeacher(): void {
    this.matDialog
    .open(TeacherFormDialogComponent)
    .afterClosed()
    .subscribe({
      next: (v) => { 
        if(v) {
          this.notifier.showSuccess(' Se ha generado el nuevo Profesor/a')
          this.teacherService.createTeacher({
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
 
  onDeleteTeacher(teacherToDelete: Teacher): void {
     if (confirm(`¿Está seguro de eliminar a ${teacherToDelete.name} ${teacherToDelete.surname}?`)) {
     this.teacherService.deleteTeacherById(teacherToDelete.id);
     this.notifier.showSuccess('Profesor/a Eliminado')     
    }
  }

  onEditTeacher(teacherToEdit: Teacher): void {
    this.matDialog
      .open(TeacherFormDialogComponent, { data: teacherToEdit })
      .afterClosed()
      .subscribe({
        next: (teacherUpdated) => {
          if (teacherUpdated) {
            this.teacherService.updateTeacherById(teacherToEdit.id, teacherUpdated);
            this.notifier.showSuccess(' Información de Profesor/a  Editada')
          }
        },
      });    
  }
}