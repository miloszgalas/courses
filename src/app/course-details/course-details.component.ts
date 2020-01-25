import {Component, OnInit} from '@angular/core';
import {Course} from '../interfaces/course';
import {ActivatedRoute} from '@angular/router';
import {CourseService} from '../course.service';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.css']
})
export class CourseDetailsComponent implements OnInit {

  course: Course;

  constructor(private route: ActivatedRoute,
              private service: CourseService) {
  }

  getCourse() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.service.getCourse(id).subscribe(x => this.course = x);
    console.log(this.service.getCourse(id));
  }

  removeCourse() {
    this.service.deleteCourse(this.course);
  }

  ngOnInit() {
    this.getCourse();
  }

}
