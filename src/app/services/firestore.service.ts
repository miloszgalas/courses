import { Injectable } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {Observable} from 'rxjs';
import {Course} from '../interfaces/course';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor(private afs: AngularFirestore) { }

  getCourses(): Observable<Course[]> {
    return this.afs.collection<Course>('/Courses').valueChanges();
  }

  getCourse(courseID: string): Observable<Course> {
    return this.afs.collection('/Courses').doc<Course>('/' + courseID).valueChanges();
  }

  addCourse(course: Course) {
    this.afs.collection('/Courses').doc('/' + course.id).set(course);
  }

  deleteCourse(course: Course) {
    this.afs.doc('/Courses/' + course.id).delete();
  }

  updateCourse(course: Course) {
    this.afs.doc('/Courses/' + course.id).update(course);
  }
}
