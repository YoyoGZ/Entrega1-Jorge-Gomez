import { Component, EventEmitter, Input, Output } from '@angular/core'
import { Teacher } from '../models';
@Component({
  selector: 'app-teacher-table',
  templateUrl: './teacher-table.component.html',
  styleUrls: ['./teacher-table.component.scss']
})
export class TeacherTableComponent {

  displayedColumns: string[] = ['id', 'fullName', 'nation', 'birthday', 'sex', 'email', 'actions'];

  @Input()
  dataSource: Teacher[] = [];

  @Output()
  deleteTeacher = new EventEmitter<Teacher>();

  @Output()
  editTeacher = new EventEmitter<Teacher>();

}
