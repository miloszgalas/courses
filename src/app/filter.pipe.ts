import { Pipe, PipeTransform } from '@angular/core';
import {Course} from './interfaces/course';


export interface Filter {
  name: {active: boolean; value: string};
  ects: {active: boolean; minvalue: number; maxvalue: number};
  semester: {active: boolean; value: number};
  rating: {active: boolean; minvalue: number; maxvalue: number};
}

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(Courses: Course[], fltr: Filter): Course[] {
    if (!Courses) {
      return [];
    }

    if (!fltr) {
      return Courses;
    }
    const {
      name,
      ects,
      semester,
      rating
    } = fltr;

    if (name.active) {
      const searchText = name.value.toLowerCase();
      Courses =  Courses.filter(course =>
        course.name.toLowerCase().includes(searchText)
      );
    }

    if (ects.active) {
      Courses =  Courses.filter(course =>
        (course.ects <= ects.maxvalue && course.ects >= ects.minvalue)
      );
    }

    if (semester.active) {
      Courses =  Courses.filter(course =>
        (course.semester === semester.value)
      );
    }

    if (rating.active) {
      Courses =  Courses.filter(c => {
        let i = 0;
        let sum = 0;
        c.courseRating.forEach(r => {
          i++;
          sum += r.rating;
        });
        let rate;
        if (sum === 0 ) {
          rate = 0;
        } else {
          rate =  Math.round((sum / i) * 10) / 10;
        }
        return (rate <= rating.maxvalue && rate >= rating.minvalue);
      });
    }

    return Courses;

  }

}
