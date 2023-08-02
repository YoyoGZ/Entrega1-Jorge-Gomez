import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users.component';
import { SharedModule } from 'src/app/shared/shared.module';

import { UserFormDialogComponent } from './components/user-form-dialog/user-form-dialog.component';
import { UserTableComponent } from './components/user-table/user-table.component';
import { UserService } from './user.service';
import { TeacherService } from './teacher.service';
import { StudentService } from './student.service';

import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    UsersComponent,
    UserFormDialogComponent,
    UserTableComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule
  ],
  exports: [
    UsersComponent,
  ],
  providers: [
    {
      provide: UserService, 
    },
    {
    provide: StudentService, 
    },
    {
      provide: TeacherService, 
    },
  ]    
  
})
export class UsersModule { }
