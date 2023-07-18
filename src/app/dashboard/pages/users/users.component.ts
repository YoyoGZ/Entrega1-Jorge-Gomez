import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UserFormDialogComponent } from './components/user-form-dialog/user-form-dialog.component';
import { User } from './models';

const ELEMENT_DATA: User[] = [
  {
    id: 1,
    name: 'Graciela',
    surname: 'Rainieri',
    email: 'grace@email',
    password: '123456'
  },
  {
    id: 2,
    name: 'Barbara',
    surname: 'Gomez Rainieri',
    email: 'barby@email.com',
    password: '123456'
  },
  {
    id: 3,
    name: 'Agustin',
    surname: 'Gomez Rainieri',
    email: 'agus@email.com',
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
