import {Injectable} from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import {BehaviorSubject, Observable} from 'rxjs';
import * as firebase from 'firebase';
import {Router} from '@angular/router';
import {User} from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user: firebase.User;
  userData: Observable<firebase.User>;
  dispChange: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(null);
  readonly authState$: Observable<User | null> = this.angularFireAuth.authState;

  // todo refractor all
  constructor(
    private angularFireAuth: AngularFireAuth,
    private router: Router
  ) {
    this.userData = angularFireAuth.authState;
  }

  signUp(email: string, password: string) {
    return this.angularFireAuth.auth
      .createUserWithEmailAndPassword(email, password)
      .then((res) => {
        window.alert('You are successfully signed up!');
        // console.log(this.user.email);
      })
      .catch((error) => {
        console.log('Something is wrong:', error.message);
        window.alert(error.message);
      });
  }


  signIn(email: string, password: string) {
    firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION)
      .then(() => {
        return this.angularFireAuth
          .auth
          .signInWithEmailAndPassword(email, password)
          .then(() => {
            console.log('You are Successfully logged in!');
            this.dispChange.next(true);
            this.router.navigate(['/list']);
          });
      })
      .catch(err => {
        console.log('Something is wrong:', err.message);
        window.alert(err.message);
      });
  }


  logOut() {
    this.angularFireAuth
      .auth
      .signOut().then(() => {
      localStorage.removeItem('user');
      this.dispChange.next(false);
      this.router.navigate(['/list']);
    });
  }


  getCurrentUser() {
    this.userData = this.angularFireAuth.authState;
    return this.angularFireAuth.auth.currentUser;
  }

  getUser() {
    this.userData = this.angularFireAuth.authState;
    return this.userData;
  }
}
