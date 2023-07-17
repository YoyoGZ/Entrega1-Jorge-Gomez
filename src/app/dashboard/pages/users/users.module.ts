import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { UserFormDialogComponent } from './components/user-form-dialog/user-form-dialog.component';
import { MatButtonModule } from '@angular/material/button';



@NgModule({
  declarations: [
    UsersComponent,
    UserFormDialogComponent
  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
    
  ],
  exports: [
    UsersComponent,
    SharedModule
  ]
  
})
export class UsersModule { }
