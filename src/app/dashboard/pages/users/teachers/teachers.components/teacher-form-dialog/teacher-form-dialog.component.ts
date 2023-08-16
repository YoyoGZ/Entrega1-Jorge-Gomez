import { Component, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef, } from '@angular/material/dialog';
import { Teacher } from '../models';

@Component({
  selector: 'app-teacher-form-dialog',
  templateUrl: './teacher-form-dialog.component.html',
  styleUrls: ['./teacher-form-dialog.component.scss']
})
export class TeacherFormDialogComponent {

  editingTeacher?: Teacher;

  nameControl = new FormControl < string | null >( null,[
    Validators.required, 
    Validators.minLength(3)] );
  surnameControl = new FormControl< string | null >(null,[
    Validators.required, 
    Validators.minLength(3)] );
  nationControl = new FormControl < string | null >( null,[
    Validators.required, 
    Validators.minLength(3)] );
  birthdayControl = new FormControl < string | null >( null,[
    Validators.required, 
    Validators.minLength(3)] );
  sexControl = new FormControl < string | null >( null,[
    Validators.required, 
    Validators.minLength(3)] );  
  emailControl = new FormControl < string | null >(null,[
    Validators.required, 
    Validators.minLength(3),
    Validators.email] );
  passwordControl = new FormControl < string | null >(null,[
    Validators.required, 
    Validators.minLength(3)] );

  teacherForm = new FormGroup({
    name: this.nameControl,
    surname: this.surnameControl,
    nation: this.nationControl,
    birthday: this.birthdayControl,
    sex: this.sexControl,
    email: this.emailControl,
    password: this.passwordControl
  });

  constructor(private dialogRef: MatDialogRef<TeacherFormDialogComponent>,
    @Inject(MAT_DIALOG_DATA) private data?: Teacher
    
    ) {
      if(this.data) {
        this.editingTeacher = this.data;
        this.nameControl.setValue(this.data.name);
        this.surnameControl.setValue(this.data.surname);
        this.nationControl.setValue(this.data.nation);
        this.sexControl.setValue(this.data.sex);
        this.emailControl.setValue(this.data.email);
        this.passwordControl.setValue(this.data.password);

      }

    }

  onSubmit(): void {
    if( this.teacherForm.invalid) {
      this.teacherForm.markAllAsTouched
    } else {this.dialogRef.close(this.teacherForm.value)
    this.dialogRef.afterClosed().subscribe({
      next: (v) => {
        console.log('Valor Recibido', v); 
      }
    })
  }}

}
