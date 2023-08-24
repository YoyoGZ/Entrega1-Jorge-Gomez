import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CoursesComponent } from './pages/courses/courses.component';

@NgModule({
    imports: [
              RouterModule.forChild([
                    { path: 'home', component: HomeComponent },
                    { path: 'users', loadChildren: () => import ('./pages/users/users.module').then((m) => m.UsersModule)},
                    { path: 'courses', loadChildren: () => import('./pages/courses/courses.module').then((m) => m.CoursesModule),},
                    { path: '**', redirectTo: 'home' },                       
                  ]),
              ],
              exports: [RouterModule]           
    })
export class DashboardRoutingModule {}