import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentsComponent } from './students.component';
import { StudentFormDialogComponent } from './Students.components/student-form-dialog/student-form-dialog.component';
import { StudentTableComponent } from './Students.components/student-table/student-table.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { StudentService } from './student.service';
import { StudentsRoutingModule } from './students-routing.module';



@NgModule({
  declarations: [
    StudentsComponent,
    StudentFormDialogComponent,
    StudentTableComponent,
  ],

  imports: [
    CommonModule,
    SharedModule,
    StudentsRoutingModule,
  ],
  exports: [
    StudentsComponent,
  ],
  providers: [
    {
      provide: StudentService,
    }
  ],
})
export class StudentsModule { }
