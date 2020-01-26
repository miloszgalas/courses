import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Course} from '../interfaces/course';
import {stringify} from 'querystring';
import {CourseService} from '../services/course.service';
import {Subscription} from 'rxjs';
import {AuthService} from '../services/auth.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  @Input() course: Course;
  constructor(private service: CourseService,
              public auth: AuthService) {
  }

  getRating() {
    let sum = 0;
    let i = 0;
    if (this.course.courseRating.length > 0) {
      this.course.courseRating.forEach(
        x => {
          i++;
          sum += x.rating;
        }
      );
      return sum / i;
    }
  }

  printCourse() {
    console.log(this.service.getCourse(this.course.id));
  }

  ngOnInit() {
  }


}
