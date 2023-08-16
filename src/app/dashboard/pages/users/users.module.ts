import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { UserFormDialogComponent } from './components/user-form-dialog/user-form-dialog.component';
import { UserTableComponent } from './components/user-table/user-table.component';
import { UserService } from './user.service';
import { RouterModule } from '@angular/router';
import { UserDetailComponent } from './pages/user.detail/user.detail.component';
import { UserRoutingModule } from './user-routing.modules';




@NgModule({
  declarations: [
    UsersComponent,
    UserFormDialogComponent,
    UserTableComponent,
    UserDetailComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    UserRoutingModule,
  ],
  exports: [
    UsersComponent,
  ],
  providers: [
    { provide: UserService },
  ]    
  
})
export class UsersModule { }
