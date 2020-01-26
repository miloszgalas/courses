import {Injectable} from '@angular/core';
import {COURSES} from '../mock-courses';
import {Course} from '../interfaces/course';
import {Observable, of} from 'rxjs';
import {Rating} from '../interfaces/rating';
import {AuthService} from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  ID = 11;
  uid: string;

  constructor(private auth: AuthService) {
    this.auth.user$.subscribe(usr => this.uid = usr.uid);
  }

  getCourses(): Observable<Course[]> {
    return of(COURSES);
  }

  getCourse(id: number) {
    return of(COURSES.find(x => x.id === id));
  }

  addCourse(course: Course) {
    COURSES.push(course);
    this.ID++;
    return COURSES;
  }


  deleteCourse(course: Course) {
    const index = COURSES.indexOf(course);
    console.log(COURSES.splice(index, 1));
  }

  addRating(newRating: 1 | 2 | 3 | 4 | 5, course: Course, uid) {
    const rate: Rating = {
      rating: newRating,
      UID: uid
    };
    if (course.courseRating.filter(r => r.UID === uid).length !== 0) {
      window.alert('User already voted');
    } else {
      course.courseRating.push(rate);
      window.alert('Vote submitted');
    }
  }
}
