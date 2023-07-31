import { Injectable } from '@angular/core';
import { Student } from './models';


@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private students: Student [] = [
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
  ];

  constructor() { }
  getStudent() : Student[] {
    return this.students;

  }
}
