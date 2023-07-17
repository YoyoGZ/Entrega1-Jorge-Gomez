import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, } from '@angular/forms';

@Component({
  selector: 'app-user-form-dialog',
  templateUrl: './user-form-dialog.component.html',
  styleUrls: ['./user-form-dialog.component.scss']
})
export class UserFormDialogComponent {

  nameControl = new FormControl( null,[Validators.required, Validators.minLength(2)] );
  surnameControl = new FormControl();
  emailControl = new FormControl();
  passwordControl = new FormControl();

  userForm = new FormGroup({
    name: this.nameControl,
    surname: this.surnameControl,
    email: this.emailControl,
    password: this.passwordControl
  });

}
