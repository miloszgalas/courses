import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {NgbNavModule, NgbRatingModule} from '@ng-bootstrap/ng-bootstrap';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {CourseComponent} from './course/course.component';
import {CourseListComponent} from './course-list/course-list.component';
import {CourseService} from './course.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AddCourseComponent} from './add-course/add-course.component';
import {NavbarComponent} from './navbar/navbar.component';
import {AngularFireModule} from '@angular/fire';
import {AngularFireAuthModule} from '@angular/fire/auth';
import {CourseDetailsComponent} from './course-details/course-details.component';
import {CourseRatingComponent} from './course-rating/course-rating.component';
import {LoginRegisterComponent} from './login-register/login-register.component';

const config = {
  apiKey: 'AIzaSyDqHvkK7Jb6pKTa_tDGDkDalNNMSoVeJpY',
  authDomain: 'courses-8ac09.firebaseapp.com',
  databaseURL: 'https://courses-8ac09.firebaseio.com',
  projectId: 'courses-8ac09',
  storageBucket: 'courses-8ac09.appspot.com',
  messagingSenderId: '242918419217',
  appId: '1:242918419217:web:104372a15e891102e03ab0',
  measurementId: 'G-KG2YX9RH46'
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
    LoginRegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NgbRatingModule,
    FormsModule,
    AngularFireModule.initializeApp(config),
    AngularFireAuthModule,
    NgbNavModule
  ],
  providers: [
    CourseService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
