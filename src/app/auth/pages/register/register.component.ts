import { Component } from '@angular/core';
import { FormBuilder,FormGroup, FormControl, FormArray, Validators } from '@angular/forms';

interface userTypeFormGroup{
userType: ['Alumno', 'Profesor', 'Empleado'];
}

interface RegisterModel{
  name: FormControl<string | null>;
  surname: FormControl<string | null>;
  email: FormControl<string | null>;
  alumno: FormControl<string | null>;
  profesor: FormControl<string | null>;
  empleado: FormControl<string | null>;
  nation: FormControl<string | null>;
  userType: FormControl<string | null>;
}
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})

export class RegisterComponent {

  nameControl = new FormControl < string | null >( null,[
    Validators.required, 
    Validators.minLength(3)] );
  surnameControl = new FormControl< string | null >(null,[
    Validators.required, 
    Validators.minLength(3)] );
  emailControl = new FormControl < string | null >(null,[
    Validators.required, 
    Validators.minLength(3),
    Validators.email] );
  nationControl = new FormControl < string | null >(null,[
    Validators.required, 
    Validators.minLength(3)] );
  alumnoControl = new FormControl < string | null >(null,);
  profesorControl = new FormControl < string | null >(null,);
  empleadoControl = new FormControl < string | null >(null,);
  userTypeControl = new FormControl < string | null >(null,[
    Validators.required,] );

    
  RegisterModel : FormGroup  = new FormGroup({
    name: this.nameControl,
    surname: this.surnameControl,
    email: this.emailControl,
    nation: this.nationControl,
    empleado: this.nationControl,
    alumno: this.nationControl,
    profesor: this.nationControl,
    userType: this.userTypeControl,
  });

  
 constructor(private formBuilder: FormBuilder) {
      this.userTypeFormGroup = this.formBuilder.group({
        userType: ['Alumno'],
    })
  }
}
