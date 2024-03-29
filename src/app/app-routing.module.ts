import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CourseListComponent} from './course-list/course-list.component';
import {AddCourseComponent} from './add-course/add-course.component';
import {CourseDetailsComponent} from './course-details/course-details.component';
import {AuthGuard} from './auth.guard';
import {AdminGuard} from './admin.guard';
import {EditCourseComponent} from './edit-course/edit-course.component';


const routes: Routes = [
  {path: 'list', component: CourseListComponent},
  {path: 'add', component: AddCourseComponent, canActivate: [AdminGuard]},
  {path: 'edit/:id', component: EditCourseComponent, canActivate: [AdminGuard]},
  {path: 'details/:id', component: CourseDetailsComponent, canActivate: [AuthGuard]},
  {path: '', redirectTo: '/list', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
