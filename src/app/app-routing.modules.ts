import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DashboardComponent } from "./dashboard/dashboard.component";

const routes: Routes = [
    {
        path: '',
        component: DashboardComponent,
        children: [
            {
                path: 'dashboard', 
                loadChildren: () => import('./dashboard/dashboard.module').then((m) => m.DashboardModule),
            },

            {
                path: 'users',
                loadChildren: () => import('./dashboard/pages/users/users.module').then((m) => m.UsersModule),
            },

            {
                path: 'auth',
                loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
            },
        ]
    },
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }