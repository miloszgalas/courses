import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {NgbRatingModule} from '@ng-bootstrap/ng-bootstrap';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {CourseComponent} from './course/course.component';
import {CourseListComponent} from './course-list/course-list.component';
import {CourseService} from './services/course.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AddCourseComponent} from './add-course/add-course.component';
import {NavbarComponent} from './navbar/navbar.component';
import {AngularFireModule} from '@angular/fire';
import {AngularFireAuthModule} from '@angular/fire/auth';
import {CourseDetailsComponent} from './course-details/course-details.component';
import {CourseRatingComponent} from './course-rating/course-rating.component';
import {LoginRegisterComponent} from './login-register/login-register.component';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import { FilterComponent } from './filter/filter.component';
import {Ng5SliderModule} from 'ng5-slider';
import { FilterPipe } from './filter.pipe';
import { EditCourseComponent } from './edit-course/edit-course.component';

const config = {
};

@NgModule({
  declarations: [
    AppComponent,
    CourseComponent,
    CourseListComponent,
    AddCourseComponent,
    NavbarComponent,
    CourseDetailsComponent,
    CourseRatingComponent,
    LoginRegisterComponent,
    FilterComponent,
    FilterPipe,
    EditCourseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NgbRatingModule,
    FormsModule,
    AngularFireModule.initializeApp(config),
    AngularFireAuthModule,
    AngularFirestoreModule,
    Ng5SliderModule
  ],
  providers: [
    CourseService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
