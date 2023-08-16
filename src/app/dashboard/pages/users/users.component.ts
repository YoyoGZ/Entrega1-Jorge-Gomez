import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UserFormDialogComponent } from './components/user-form-dialog/user-form-dialog.component';
import { User } from './models';
import { UserService } from './user.service';
import { NotifierService } from 'src/app/core/services/notifier.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent {
  public users:Observable<User[]>;

  constructor(
    private matDialog: MatDialog,
    private userService: UserService,
    private notifier: NotifierService
  ) {
    this.userService.loadUsers();
    this.users = this.userService.getUsers();
  }


OnCreateUser(): void {
   this.matDialog
   .open(UserFormDialogComponent)
   .afterClosed()
   .subscribe({
    next: (v) => { 
        if(v) {
          this.notifier.showSuccess(' Se ha generado el nuevo Usuario')
          this.userService.createUser({
            name: v.name,
            surname: v.surname,
            email: v.email,
            password: v.password
          })   
        }
      }
    })
}
 
  onDeleteUser(userToDelete: User): void {
     if (confirm(`¿Está seguro de eliminar a ${userToDelete.name} ${userToDelete.surname}?`)) {
     this.userService.deleteUserById(userToDelete.id);
     this.notifier.showSuccess('Usuario Borrado')     
    }
  }

  onEditUser(userToEdit: User): void {
    this.matDialog
      .open(UserFormDialogComponent, { data: userToEdit })
      .afterClosed()
      .subscribe({
        next: (userUpdated) => {
          if (userUpdated) {
            this.userService.updateUserById(userToEdit.id, userUpdated);
            this.notifier.showSuccess('Usuario Editado')
          }
        },
      });    
  }
}
