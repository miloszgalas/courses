import {Rating} from './rating';

export interface Course {
  id: string;
  name: string;
  ects: number;
  semester: number;
  courseType: string;
  maxAttendants: number;
  courseRating: Rating[];
  enrolled: string[];
  description: string;
  img: string;

}

