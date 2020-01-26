import {Component, OnInit} from '@angular/core';
import {Course} from '../interfaces/course';
import {CourseService} from '../services/course.service';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {

  courses: Course[];

  constructor(private service: CourseService) {
  }

  getCourses(): void {
    this.service.getCourses().subscribe(x => this.courses = x);
  }


  ngOnInit() {
    this.getCourses();
  }

}
