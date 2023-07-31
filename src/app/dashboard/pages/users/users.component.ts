import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UserFormDialogComponent } from './components/user-form-dialog/user-form-dialog.component';
import { User } from './models';
import { UserService } from './user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent {
  public users: User[] = [];

  constructor(
    private matDialog: MatDialog,
    private userService: UserService,
  ) {
    this.users = this.userService.getUsers();
  }

OnCreateUser(): void {
   this.matDialog
   .open(UserFormDialogComponent)
   .afterClosed()
   .subscribe({
    next: (v) => { 
      if(v) {
        this.users =[
          ...this.users,
          {
          id: this.users.length + 1,
          name: v.name,
          surname: v.surname,
          email: v.email,
          password: v.password
        }]
      }
    }
   })
 }
 
 onDeleteUser(userToDelete: User ): void {
  if (confirm(`¿Está seguro de eliminar a ${userToDelete.name} ${userToDelete.surname}?`)) {
    this.users = this.users.filter((u) => u.id !== userToDelete.id);
  console.log(userToDelete);
  
}}

onEditUser(userToEdit: User): void {
  this.matDialog
  .open(UserFormDialogComponent, {
    data: userToEdit
  })
  .afterClosed()
  .subscribe({
    next: (userUpdated) => {
      console.log(userUpdated);
      if (userUpdated) {
        this.users = this.users.map((user) => {
          return user.id === userToEdit.id ? {...user, ...userUpdated} : user
        })
      }
    },    
  });
}
}
