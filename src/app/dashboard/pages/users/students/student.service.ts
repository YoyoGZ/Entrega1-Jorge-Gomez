import { Injectable } from '@angular/core';
import { CreateStudId, Student, UpdateStudData, } from './Students.components/models';
import { BehaviorSubject, Observable, Subject, delay, of, take } from 'rxjs';

const STUDENT_DB: Observable<Student[]> = of([
    {
      id: 1,
      name: 'Anne',
      surname: 'Rumenigge',
      nation: 'Alemania',
      birthday: '19/12/16',
      sex: 'Femenino',
      email: 'Anne@email',
      password: '123456'
    },
    {
      id: 2,
      name: 'Taylor',
      surname: 'Monc',
      nation: 'EE UU',
      birthday: '02/04/28',
      sex: 'Masculino',
      email: 'taylor@email.com',
      password: '123456'
    },
    {
      id: 3,
      name: 'Ruben',
      surname: 'Fioravanti',
      nation: 'Italia',
      birthday: '25/10/58',
      sex: 'Masculino',
      email: 'Ruben@email.com',
      password: '123456'
    }
  ]).pipe(delay(1500));
@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private students$ = new BehaviorSubject<Student[]>([]);  

  constructor() { }

  loadStudents(): void{
    STUDENT_DB.subscribe({
      next: (studentsFromDb) => this.students$.next(studentsFromDb)
    })
  };
  
  getStudents() : Subject<Student[]> {
    return this.students$;
  }

  createStudent(student: CreateStudId): void {
    this.students$.pipe(take(1)).subscribe({
      next: (arrayActual) =>{
        this.students$.next([...arrayActual , {...student , id: arrayActual.length + 1}])
      }
    })
  }

  updateStudentById(id: number , studentUpdated: UpdateStudData): void {
    this.students$.pipe(take(1)).subscribe({
      next: (arrayActual) =>{
        this.students$.next(
          arrayActual.map((s) => 
            s.id === id ? {...s, ...studentUpdated} : s)
        );
      },
    });
  }

  deleteStudentById(id: number): void {
    this.students$.pipe(take(1)).subscribe({
      next: (arrayActual) =>
        this.students$.next(arrayActual.filter((s) => s.id !== id)),  
    });
  }
} 
    

