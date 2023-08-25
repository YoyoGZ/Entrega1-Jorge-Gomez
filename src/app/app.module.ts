import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.modules';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TeacherModule } from './dashboard/pages/users/teachers/teachers.module';
import { StudentsModule } from './dashboard/pages/users/students/students.module';
import { CoursesModule } from './dashboard/pages/courses/courses.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CoursesModule,
    TeacherModule,
    StudentsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
