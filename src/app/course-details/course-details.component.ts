import {Component, Input, OnInit} from '@angular/core';
import {Course} from '../interfaces/course';
import {ActivatedRoute} from '@angular/router';
import {CourseService} from '../services/course.service';
import {AuthService} from '../services/auth.service';
import {Subscription} from 'rxjs';
import {User} from '../interfaces/user';
import {FirestoreService} from '../services/firestore.service';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.css']
})
export class CourseDetailsComponent implements OnInit {

  course: Course;
  user: User;

  constructor(private route: ActivatedRoute,
              private service: FirestoreService,
              private auth: AuthService) {
  }

  isEnrolled() {
    if (this.course !== undefined) {
      return this.course.enrolled.filter(e => e === this.user.uid).length !== 0;
    } else {
      return false;
    }
  }

  enroll() {
    if (!this.isEnrolled()) {
      if (this.course.enrolled.length < this.course.maxAttendants) {
        this.course.enrolled.push(this.user.uid);
        this.service.updateCourse(this.course);
      } else {
        window.alert('not enough places on course');
      }
    } else {
      window.alert('user already enrolled');
    }
  }

  disenroll() {
    if (this.isEnrolled()) {
      const index = this.course.enrolled.indexOf(this.user.uid);
      this.course.enrolled.splice(index, 1);
      this.service.updateCourse(this.course);
    } else {
      window.alert('user not enrolled for this event');
    }
  }

  removeCourse() {
    this.service.deleteCourse(this.course);
  }

  isAdmin() {
    if (this.user !== null && this.user !== undefined) {
      return this.user.role === 'admin';
    } else {
      return false;
    }
  }

  getRating() {
    let sum = 0;
    let i = 0;
    if (!this.course) {
      return 0;
    }
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

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.service.getCourse(id).subscribe(x => this.course = x);
    this.auth.user$.subscribe(usr => this.user = usr);
    // this.getCourse
  }

}
