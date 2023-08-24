import { Injectable } from '@angular/core';
import { Course } from './models';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  private courses$ = new BehaviorSubject<Course[]>([]);

  constructor() { }

  getCourses(): Observable<Course[]> {
    return this.courses$.asObservable()
  }

  loadCourses(): void {
    this.courses$.next([
      {
        id: 1,
        name: 'Black Jack',
        description: 'Black Jack Game',
        iniDate:  '02/01/2024',
        finalDate: '15/01/24',
      },
      {
        id: 2,
        name: 'Poker',
        description: 'Poker Game',
        iniDate:  '15/03/2024',
        finalDate: '25/08/24',
      },
      {
        id: 3,
        name: 'Counter Strike',
        description: 'Counter Strike Video Game',
        iniDate:  '02/01/2024',
        finalDate: '15/01/24',
      }
    ])
  }
}
