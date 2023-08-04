import { Component } from '@angular/core';
import { FormBuilder,FormGroup, FormControl, Validators } from '@angular/forms';

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
  userTypeControl = new FormControl < string | null >(null,[
    Validators.required,
    Validators.minLength(3)] );

    
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

}
