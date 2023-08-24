import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeacherFormDialogComponent } from './teachers.components/teacher-form-dialog/teacher-form-dialog.component';
import { TeacherTableComponent } from './teachers.components/teacher-table/teacher-table.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { TeacherService } from './teacher.service';
import { TeachersComponent } from './teachers.component';
import { TeachersRoutingModule } from './teachers-routing.module';


@NgModule({
  declarations: [
    TeachersComponent,
    TeacherFormDialogComponent,
    TeacherTableComponent,
  ],

  imports: [
    CommonModule,
    SharedModule,
    TeachersRoutingModule
  ],
  exports: [
    TeachersComponent,
  ],
  providers: [
    {
      provide: TeacherService,
    }
  ],
})
export class TeacherModule { }