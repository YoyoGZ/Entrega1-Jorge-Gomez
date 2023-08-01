import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { AuthComponent } from "./auth/auth.component";
import { HomeComponent } from "./dashboard/pages/home/home.component";
import { UsersComponent } from "./dashboard/pages/users/users.component";
import { LoginComponent } from "./auth/pages/login/login.component";
import { StudentsComponent } from "./dashboard/pages/users/students/students.component";
import { TeachersComponent } from "./dashboard/pages/users/teachers/teachers.component";
import { RegisterComponent } from "./auth/pages/register/register.component";

const routes: Routes = [
    {   path: 'dashboard', component : DashboardComponent,
                children: [
                {   path: 'home', component: HomeComponent},                    
                {   path: 'users', component: UsersComponent,
                            children: [
                            {   path: 'students', component: StudentsComponent},
                            {   path: 'teachers', component: TeachersComponent},
                            {   path: '**', redirectTo: '/home'},]
        },],},

    {   path: 'auth', component : AuthComponent,
                children: [
                   {   path: 'login', component: LoginComponent,},
                   {   path: 'register',component: RegisterComponent},],},
                   {   path: '**', redirectTo: '/auth'},
    ]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}