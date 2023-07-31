import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.modules';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardModule } from './dashboard/dashboard.module';
import { AuthModule } from './auth/auth.module';
import { StudentsComponent } from './dashboard/pages/users/students/students.component';
import { TeachersComponent } from './dashboard/pages/users/teachers/teachers.component';
import { StudentFormDialogComponent } from './students/students.components/student-form-dialog/student-form-dialog.component';
import { StudentTableComponent } from './students/Students.components/student-table/student-table/student-table.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentsComponent,
    TeachersComponent,
    StudentFormDialogComponent,
    StudentTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DashboardModule,
    AuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
