import {Component, Input, OnInit} from '@angular/core';
import {Course} from '../interfaces/course';
import {ActivatedRoute} from '@angular/router';
import {CourseService} from '../course.service';
import {AuthService} from '../auth.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.css']
})
export class CourseDetailsComponent implements OnInit {

  course: Course;
  @Input() changeDisp = false;
  userState: Subscription;

  constructor(private route: ActivatedRoute,
              private service: CourseService,
              private auth: AuthService) {
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
    this.userState = this.auth.authState$.subscribe(x => {
      this.changeDisp = x !== null;
    });
    this.getCourse();
  }

}
