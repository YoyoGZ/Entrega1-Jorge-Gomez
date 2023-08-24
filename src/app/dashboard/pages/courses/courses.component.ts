import { Component, OnInit } from '@angular/core';
import { Course } from './models';
import { CourseService } from './course.service';


@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styles: [ ]
})
export class CoursesComponent implements OnInit{
  public courses : Course[] = [];

  public displayedColumns = ['id', 'name', 'description', 'iniDate', 'finalDate', 'actions'];

  constructor( private courseService: CourseService) {}

  ngOnInit(): void {
    this.courseService.loadCourses();
    this.courseService.getCourses().subscribe({
      next : (data) => console.log(data),      
    })  
  }
}
