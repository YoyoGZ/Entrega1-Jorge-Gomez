import { Injectable } from '@angular/core';
import { CreateTeacherId, Teacher, UpdateTeacherData } from './teachers.components/models';
import { BehaviorSubject, Observable, Subject, delay, of, take } from 'rxjs';

const TEACHER_DB: Observable<Teacher[]> = of([
  {
    id: 1,
    name: 'Albert',
    surname: 'Einstin',
    nation: 'Alemania',
    birthday: '19/12/16',
    sex: 'Masculino',
    email: 'albert@email',
    password: '123456'
  },
  {
    id: 2,
    name: 'Rene',
    surname: 'Lavand',
    nation: 'Argentina',
    birthday: '02/04/28',
    sex: 'Masculino',
    email: 'renela@email.com',
    password: '123456'
  },
  {
    id: 3,
    name: 'Chester',
    surname: 'Thompson',
    nation: 'Inglaterra',
    birthday: '25/10/58',
    sex: 'Masculino',
    email: 'chester@email.com',
    password: '123456'
  }
]).pipe(delay(1500));

@Injectable({
  providedIn: 'root'
})
export class TeacherService {
  private teachers$ = new BehaviorSubject<Teacher[]>([]);  

  constructor() { }

  loadTeachers(): void{
    TEACHER_DB.subscribe({
      next: (teachersFromDb) => this.teachers$.next(teachersFromDb)
    })
  };
  
  getTeachers() : Subject<Teacher[]> {
    return this.teachers$;
  }

  createTeacher(teacher: CreateTeacherId): void {
    this.teachers$.pipe(take(1)).subscribe({
      next: (arrayActual) =>{
        this.teachers$.next([...arrayActual , {...teacher , id: arrayActual.length + 1}])
      }
    })
  }

  updateTeacherById(id: number , teacherUpdated: UpdateTeacherData): void {
    this.teachers$.pipe(take(1)).subscribe({
      next: (arrayActual) =>{
        this.teachers$.next(
          arrayActual.map((t) => 
            t.id === id ? {...t, ...teacherUpdated} : t)
        );
      },
    });
  }

  deleteTeacherById(id: number): void {
    this.teachers$.pipe(take(1)).subscribe({
      next: (arrayActual) =>
        this.teachers$.next(arrayActual.filter((t) => t.id !== id)),  
    });
  }
} 
