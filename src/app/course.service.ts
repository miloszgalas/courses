import {Injectable} from '@angular/core';
import {COURSES} from './mock-courses';
import {Course} from './interfaces/course';
import {Observable, of} from 'rxjs';
import {Rating} from './interfaces/rating';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  ID = 11;

  constructor() {
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

  addRating(newRating: 1 | 2 | 3 | 4 | 5, course: Course/*, uid*/) {
    const rate: Rating = {
      rating: newRating
      // UID: uid
    };
    course.courseRating.push(rate);
  }
}
