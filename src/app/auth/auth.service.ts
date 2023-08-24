import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map, take } from 'rxjs';
import { User } from '../dashboard/pages/users/models';
import { NotifierService } from '../core/services/notifier.service';
import { loginData } from './models';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _authUser$ = new BehaviorSubject<User | null>(null);
  public authUser$ = this._authUser$.asObservable()

  constructor(private notifier: NotifierService, private router: Router) {}

  isAuthenticated(): Observable<boolean> {
    return this.authUser$.pipe(take(1), map((user) => !!user ));
  }

  login(loginData : loginData): void {
    const MOCK_USER: User ={
      id: 50,
      name: 'fakeName',
      surname: 'fakeSurname',
      email: 'fake@email.com',
      password: '123456'
    }

    if(loginData.email === MOCK_USER.email && loginData.password === MOCK_USER.password){
      this._authUser$.next(MOCK_USER);
      this.router.navigate(['./dashboard/home']);
    } else {
      this.notifier.showError('Email o Contrasena Invalidos');
      this._authUser$.next(null);
    }
  }
}
