import {Component, OnInit} from '@angular/core';
import {Course} from '../interfaces/course';
import {CourseService} from '../services/course.service';
import {Filter} from '../filter.pipe';
import {Subscription} from 'rxjs';
import {FilterService} from '../services/filter.service';
import {FirestoreService} from '../services/firestore.service';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {

  courses: Course[];
  filter: Filter = null;
  private filterSubscription: Subscription;
  filtersVisible = false;

  constructor(private service: FirestoreService,
              private fService: FilterService) {
    this.filterSubscription = this.fService.getFilter().subscribe(filter => {
      if (filter) {
        this.filter = filter;
      } else {
        this.filter = null;
      }
    });
  }

  getCourses(): void {
    this.service.getCourses().subscribe(x => this.courses = x);
  }

  hideFilters() {
    this.filtersVisible = false;
  }

  showFilters() {
    this.filtersVisible = true;
  }

  ngOnInit() {
    this.getCourses();
  }

}
