import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.modules';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardModule } from './dashboard/dashboard.module';
import { AuthModule } from './auth/auth.module';
import { TeacherModule } from './dashboard/pages/users/teachers/teachers.module';
import { StudentsModule } from './dashboard/pages/users/students/students.module';
import { CoursesModule } from './dashboard/pages/courses/courses.module';
import { UsersModule } from './dashboard/pages/users/users.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DashboardModule,
    UsersModule,
    AuthModule,
    CoursesModule,
    TeacherModule,
    StudentsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
