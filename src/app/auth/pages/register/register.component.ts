// import { Component } from '@angular/core';
// import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';

// @Component({
//   selector: 'app-register',
//   templateUrl: './register.component.html',
//   styleUrls: ['./register.component.scss']
// })

// interface userTypeFormGroup{
//   userType: FormControl<string | null>;
// }

// interface userTypeModel{
//   email: FormControl<string | null>;
//   password: FormControl<string | null>;
//   city: FormControl<string | null>;
//   userType: FormArray<FormGroup<userTypeFormGroup>>
// }

// export class RegisterComponent {

//   nameControl = new FormControl < string | null >( null,[
//     Validators.required, 
//     Validators.minLength(3)] );
//   surnameControl = new FormControl< string | null >(null,[
//     Validators.required, 
//     Validators.minLength(3)] );
//   emailControl = new FormControl < string | null >(null,[
//     Validators.required, 
//     Validators.minLength(3),
//     Validators.email] );
//   nationControl = new FormControl < string | null >(null,[
//     Validators.required, 
//     Validators.minLength(3)] );
//   userTypeControl = new FormControl < string | null >(null,[
//     Validators.required, 
//     Validators.minLength(3)] );


//   userTypeArray = new FormArray<FormGroup<userTypeFormGroup>>([
//     new FormGroup({
//       userType: new FormControl('')
//     }),
//   ]);

//   userTypeModel : FormGroup<userTypeModel> = new FormGroup({
//     name: this.nameControl,
//     surname: this.surnameControl,
//     email: this.emailControl,
//     nation: this.nationControl,
//     userType: this.userTypeArray,
//   });

//   addUserTypeArray(): void {
//     this.userTypeArray.push(
//       new FormGroup({
//         userType: new FormControl('')
//       })
//     )

//   }

// }
