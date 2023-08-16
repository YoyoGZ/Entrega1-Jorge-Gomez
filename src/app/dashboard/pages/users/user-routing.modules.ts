import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { StudentsComponent } from './students/students.component';
import { TeachersComponent } from './teachers/teachers.component';

@NgModule({
    imports: [CommonModule,
              RouterModule.forChild([
                    { path: 'students', component: StudentsComponent },                       
                    { path: 'teachers', component: TeachersComponent },
                    { path: '**', redirectTo: 'home' },                       
                  ]),
              ],
              exports: [RouterModule]           
    })
export class UserRoutingModule {}