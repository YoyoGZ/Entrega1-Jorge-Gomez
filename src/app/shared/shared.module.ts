import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';
import { FullNamePipe } from './pipes/full-name.pipe';
import { MessageErrorPipe } from './pipes/message-error.pipe';
import { NgFor } from '@angular/common';
import { MatAutocompleteModule } from '@angular/material/autocomplete';



@NgModule({
  declarations: [
    FullNamePipe,
    MessageErrorPipe
  ],
  imports: [
    CommonModule
  ],
  exports:[
    MatDialogModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatTableModule,
    FullNamePipe,
    MessageErrorPipe,
    NgFor,
    MatAutocompleteModule,
  ]
})
export class SharedModule { }
