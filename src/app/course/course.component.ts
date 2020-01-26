import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Course} from '../interfaces/course';
import {stringify} from 'querystring';
import {CourseService} from '../course.service';
import {Subscription} from 'rxjs';
import {AuthService} from '../auth.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  @Input() course: Course;
  @Input() changeDisp = false;
  userState: Subscription;
  constructor(private service: CourseService,
              private auth: AuthService) {
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
    this.userState = this.auth.authState$.subscribe(x => {
      this.changeDisp = x !== null;
    });
  }


}
