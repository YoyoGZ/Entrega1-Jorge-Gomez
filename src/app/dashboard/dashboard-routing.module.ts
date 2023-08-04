import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { StudentsComponent } from './pages/users/students/students.component';
import { TeachersComponent } from './pages/users/teachers/teachers.component';
import { UsersComponent } from './pages/users/users.component';


@NgModule({
    imports: [
        RouterModule.forChild([
            {   path: 'home', component: HomeComponent},
                {   path: 'users', component: UsersComponent,
                                     children: [
                                     {   path: 'students', component: StudentsComponent},
                                     {   path: 'teachers', component: TeachersComponent},
                                     {   path: '**', redirectTo: '/home'},],}
        ])
    ],
exports: [RouterModule],
})

export class DashboardRoutingModule {}