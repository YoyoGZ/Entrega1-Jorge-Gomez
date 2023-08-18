import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';


@NgModule({
    imports: [CommonModule,
              RouterModule.forChild([
                    { path: 'students',
                        loadChildren: () => import('./students/students.module').then((m) => m.StudentsModule),},                       
                    { path: 'teachers',
                        loadChildren: () => import('./teachers/teachers.module').then((m) => m.TeacherModule),},
                  ]),
              ],
              exports: [RouterModule]           
    })
export class UserRoutingModule {}