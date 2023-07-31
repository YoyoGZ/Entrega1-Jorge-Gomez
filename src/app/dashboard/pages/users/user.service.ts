import { Injectable } from '@angular/core';
import { User } from './models';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private users: User [] = [
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

  constructor() { }
  getUsers() : User[] {
    return this.users;

  }
}
