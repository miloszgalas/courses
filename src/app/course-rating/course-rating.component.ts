import {Component, Input, OnInit} from '@angular/core';
import {Course} from '../interfaces/course';
import {CourseService} from '../services/course.service';
import {NgbRatingModule, NgbRatingConfig} from '@ng-bootstrap/ng-bootstrap';
import {User} from '../interfaces/user';
import {AuthService} from '../services/auth.service';
import {FirestoreService} from '../services/firestore.service';


@Component({
  selector: 'app-course-rating',
  templateUrl: './course-rating.component.html',
  styleUrls: ['./course-rating.component.css']
})
export class CourseRatingComponent implements OnInit {
  @Input() course: Course;

  currentRate: 1 | 2 | 3 | 4 | 5 = 3;
  user: User;

  constructor(private service: CourseService,
              private auth: AuthService,
              private afs: FirestoreService) {
  }

  addRating() {
    this.service.addRating(this.currentRate, this.course, this.user.uid);
    this.afs.updateCourse(this.course);
  }

  ngOnInit() {
    this.auth.user$.subscribe(usr => this.user = usr);
  }

}
