import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CourseListComponent} from './course-list/course-list.component';
import {AddCourseComponent} from './add-course/add-course.component';
import {CourseDetailsComponent} from './course-details/course-details.component';


const routes: Routes = [
  {path: 'list', component: CourseListComponent},
  {path: 'add', component: AddCourseComponent},
  {path: 'details/:id', component: CourseDetailsComponent},
  {path: '', redirectTo: '/list', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
