import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';

@NgModule({
    imports: [
        RouterModule.forChild([
                    {   path: 'login',component: LoginComponent},                        
                    {   path: 'register',component: RegisterComponent},
                    {   path: '**', redirectTo: '/auth'},
                ])                    
    ]
})

export class AuthRoutingModule {}