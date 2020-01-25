import {Component, OnInit} from '@angular/core';
import {Course} from '../interfaces/course';
import {CourseService} from '../course.service';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css']
})
export class AddCourseComponent implements OnInit {

  newCourse: Course;

  setUp() {
    this.newCourse = {
      id: this.service.ID,
      name: '',
      ects: 0,
      semester: 1,
      courseType: '',
      maxAttendants: 250,
      courseRating: [],
      description: '',
      img: '',
    };
  }

  validate(): boolean {
    if (this.newCourse.name === '') {return false; }
    if (this.newCourse.description === '') {return false; }
    if (this.newCourse.img.match(/https?:[\/|.|\w|\s|-]*\.(?:jpg|gif|png).*/g) === null) { return false; }
    return true;
  }

  addCourse() {
    if (this.validate()) {
      this.service.addCourse(this.newCourse);
    }
  }

  constructor(private service: CourseService) {}

  ngOnInit() {
    this.setUp();
  }

}
