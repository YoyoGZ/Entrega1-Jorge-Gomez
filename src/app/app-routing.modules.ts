import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { AuthComponent } from "./auth/auth.component";
import { UsersComponent } from "./dashboard/pages/users/users.component";

const routes: Routes = [
        { path: 'dashboard', component : DashboardComponent,
            loadChildren: () => import('./dashboard/dashboard.module').then((m) => m.DashboardModule),},

        { path: 'users', component: UsersComponent,
            loadChildren: () => import('./dashboard/pages/users/users.module').then((m) => m.UsersModule),},

        { path: 'auth', component : AuthComponent,
            loadChildren: () => import('./auth/auth.module').then ((m) => m.AuthModule),},
    ]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}