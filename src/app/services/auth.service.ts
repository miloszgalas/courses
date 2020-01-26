import {Injectable} from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import {BehaviorSubject, Observable, of} from 'rxjs';
import * as firebase from 'firebase';
import {Router} from '@angular/router';
import {User} from '../interfaces/user';
import {AngularFirestore, AngularFirestoreDocument} from '@angular/fire/firestore';
import {switchMap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user$: Observable<User>;


  constructor(
    private afAuth: AngularFireAuth,
    private afs: AngularFirestore,
    private router: Router
  ) {
    this.user$ = this.afAuth.authState.pipe(
      switchMap(user => {
        if (user) {
          return this.afs.doc<User>('/Users/' + user.uid).valueChanges();
        } else {
          return of(null);
        }
      })
    );
  }

  async signIn(email: string, password: string) {
    const credential = await this.afAuth.auth.signInWithEmailAndPassword(email, password);
    return this.updateUserData(credential.user);
  }

  async logOut() {
    await this.afAuth.auth.signOut();
    return this.router.navigate(['/list']);
  }

  private updateUserData(user) {
    const userRef: AngularFirestoreDocument<User> = this.afs.doc('/Users/' + user.uid);

    const data = {
      uid: user.uid,
      email: user.email,
      role: user.role
    };

    return userRef.set(data, {merge: true});
  }



  async signUp(email: string, password: string) {
    const credential = await this.afAuth.auth.createUserWithEmailAndPassword(email, password);
    return this.createUserData(credential.user);
  }

  // user: firebase.User;
  private createUserData(user) {
    const userRef: AngularFirestoreDocument<User> = this.afs.doc('/Users/' + user.uid);

    const data = {
      uid: user.uid,
      email: user.email,
      role: user.role = 'user'
    };

    return userRef.set(data, {merge: true});
  }

  // userData: Observable<firebase.User>;
  // dispChange: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(null);
  // // readonly authState$: Observable<User | null> = this.angularFireAuth.authState;
  //
  // // todo refractor all
  // constructor(
  //   private angularFireAuth: AngularFireAuth,
  //   private router: Router
  // ) {
  //   this.userData = angularFireAuth.authState;
  // }
  //
  // signUp(email: string, password: string) {
  //   return this.angularFireAuth.auth
  //     .createUserWithEmailAndPassword(email, password)
  //     .then((res) => {
  //       window.alert('You are successfully signed up!');
  //       // console.log(this.user.email);
  //     })
  //     .catch((error) => {
  //       console.log('Something is wrong:', error.message);
  //       window.alert(error.message);
  //     });
  // }
  //
  //
  // signIn(email: string, password: string) {
  //   firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION)
  //     .then(() => {
  //       return this.angularFireAuth
  //         .auth
  //         .signInWithEmailAndPassword(email, password)
  //         .then(() => {
  //           console.log('You are Successfully logged in!');
  //           this.dispChange.next(true);
  //           this.router.navigate(['/list']);
  //         });
  //     })
  //     .catch(err => {
  //       console.log('Something is wrong:', err.message);
  //       window.alert(err.message);
  //     });
  // }
  //
  //
  // logOut() {
  //   this.angularFireAuth
  //     .auth
  //     .signOut().then(() => {
  //     localStorage.removeItem('user');
  //     this.dispChange.next(false);
  //     this.router.navigate(['/list']);
  //   });
  // }
  //
  //
  // getCurrentUser() {
  //   this.userData = this.angularFireAuth.authState;
  //   return this.angularFireAuth.auth.currentUser;
  // }
  //
  // getUser() {
  //   this.userData = this.angularFireAuth.authState;
  //   return this.userData;
  // }
}
