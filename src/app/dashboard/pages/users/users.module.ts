import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { UserFormDialogComponent } from './components/user-form-dialog/user-form-dialog.component';
import { UserTableComponent } from './components/user-table/user-table.component';
import { UserService } from './user.service';
// import { TeacherTableComponent } from './teachers.components/teacher-table/teacher-table/teacher-table.component';
// import { TeacherFormDialogComponent } from './teachers.components/teacher-form-dialog/teacher-form-dialog/teacher-form-dialog.component';



@NgModule({
  declarations: [
    UsersComponent,
    UserFormDialogComponent,
    UserTableComponent,
    // TeacherTableComponent,
    // TeacherFormDialogComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    UsersComponent,
  ],
  providers: [
    {
      provide: UserService,
    }
  ]    
  
})
export class UsersModule { }
