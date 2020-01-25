import {Component, Input, OnInit} from '@angular/core';
import {Course} from '../interfaces/course';
import {CourseService} from '../course.service';

@Component({
  selector: 'app-course-rating',
  templateUrl: './course-rating.component.html',
  styleUrls: ['./course-rating.component.css']
})
export class CourseRatingComponent implements OnInit {
  @Input() course: Course;

  currentRate: 1 | 2 | 3 | 4 | 5 = 3;

  constructor(private service: CourseService) { }

  addRating() {
    this.service.addRating(this.currentRate, this.course);
  }

  ngOnInit() {
  }

}
