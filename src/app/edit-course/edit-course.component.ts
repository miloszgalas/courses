import { Component, OnInit } from '@angular/core';
import {Course} from '../interfaces/course';
import {FirestoreService} from '../services/firestore.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-edit-course',
  templateUrl: './edit-course.component.html',
  styleUrls: ['./edit-course.component.css']
})
export class EditCourseComponent implements OnInit {
  course: Course;

  validate(): boolean {
    if (this.course.name === '') {return false; }
    if (this.course.description === '') {return false; }
    if (this.course.img.match(/https?:[\/|.|\w|\s|-]*\.(?:jpg|gif|png).*/g) === null) { return false; }
    return true;
  }

  editCourse() {
    if (this.validate()) {
      this.service.updateCourse(this.course);
      this.router.navigate(['/list']);
    }
  }

  constructor(private service: FirestoreService,
              private route: ActivatedRoute,
              private router: Router) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.service.getCourse(id).subscribe(x => this.course = x);
  }

}
