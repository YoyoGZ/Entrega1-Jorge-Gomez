import { Injectable } from '@angular/core';
import { CreateUserId, UpdateUserData, User } from './models';
import { BehaviorSubject, Observable, Subject, delay, map, of, take } from 'rxjs';
import { HttpClient } from '@angular/common/http';

const USER_DB: Observable<User[]> = of([
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
]).pipe(delay(1500));


@Injectable({
  providedIn: 'root'
})
export class UserService {
  private users$ = new BehaviorSubject<User[]>([]);  

  constructor(private hhtpClient: HttpClient) { }

  loadUsers(): void{
    USER_DB.subscribe({
      next: (usersFromDb) => this.users$.next(usersFromDb)
    })
    // this.hhtpClient.get<User[]>('http://localhost:3000/users').subscribe({
    //   next:(response) => {
    //     console.log('RESPUESTA', response);
    //     this.users$.next(response)
    //   }
    // })
  };
  
  getUsers() : Subject<User[]> {
    return this.users$;
  }

  getUserById(id: number): Observable<User | undefined> {
    return this.users$.pipe(
      map(( users ) => users.find((u) => u.id === id)),
      take(1),
    )

  }
  createUser(user: CreateUserId): void {
    this.users$.pipe(take(1)).subscribe({
      next: (arrayActual) =>{
        this.users$.next([...arrayActual , {...user , id: arrayActual.length + 1}])
      }
    })
  }

  updateUserById(id: number , userUpdated: UpdateUserData): void {
    this.users$.pipe(take(1)).subscribe({
      next: (arrayActual) =>{
        this.users$.next(
          arrayActual.map((u) => 
            u.id === id ? {...u, ...userUpdated} : u)
        );
      },
    });
  }

  deleteUserById(id: number): void {
    this.users$.pipe(take(1)).subscribe({
      next: (arrayActual) =>
        this.users$.next(arrayActual.filter((u) => u.id !== id)),  
    });
  }
} 