import {Component, Input, OnInit} from '@angular/core';
import {Course} from '../interfaces/course';
import {ActivatedRoute} from '@angular/router';
import {CourseService} from '../services/course.service';
import {AuthService} from '../services/auth.service';
import {Subscription} from 'rxjs';
import {User} from '../interfaces/user';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.css']
})
export class CourseDetailsComponent implements OnInit {

  course: Course;
  user: User;

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

  isAdmin() {
    return this.user.role === 'admin';
  }

  ngOnInit() {
    this.auth.user$.subscribe(usr => this.user = usr);
    this.getCourse();
  }

}
