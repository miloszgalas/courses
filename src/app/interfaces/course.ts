import {Rating} from './rating';

export interface Course {
  id: number;
  name: string;
  ects: number;
  semester: number;
  courseType: string;
  maxAttendants: number;
  courseRating: Rating[];
  description: string;
  img: string;

}

