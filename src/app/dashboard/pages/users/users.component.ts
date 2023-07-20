import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UserFormDialogComponent } from './components/user-form-dialog/user-form-dialog.component';
import { User } from './models';

const ELEMENT_DATA: User[] = [
  {
    id: 1,
    name: 'Kevin',
    surname: 'De Bruyne',
    email: 'kevin@email',
    password: '123456'
  },
  {
    id: 2,
    name: 'Julian',
    surname: 'Alvarez',
    email: 'donjuly@email.com',
    password: '123456'
  },
  {
    id: 3,
    name: 'Ilkay',
    surname: 'Gundogan',
    email: 'gundo@email.com',
    password: '123456'
  }
];

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent {
  public users: User[] = ELEMENT_DATA;

  constructor(
    private matDialog: MatDialog
  ) {}

OnCreateUser(): void {
   this.matDialog.open(UserFormDialogComponent).afterClosed().subscribe({
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
        console.log('Datos recibidos', v);
      } else {
        console.log('Se CANCELO la Carga');
      }
    }
   })
 }
}

onDeleteUser(userToDelete: User ): void {
  if (confirm(`¿Está seguro de eliminar a ${userToDelete.name}?`)) {
    this.users = this.users.filter((u) => u.id !== userToDelete.id);
  console.log(userToDelete);
  
}
