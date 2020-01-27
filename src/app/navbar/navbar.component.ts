import {Component, Input, OnInit} from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import {AuthService} from '../services/auth.service';
import * as firebase from 'firebase';
import {Observable, Subscription} from 'rxjs';
import {User} from '../interfaces/user';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  @Input() changeDisp = false;
  user: User;
  // @Input() mail: string;
  userState: Subscription;

  constructor(public auth: AuthService) {
  }
  logged: boolean;
  email: string | null;

  setUser() {
    this.auth.user$.subscribe(usr => this.user = usr);
  }

  isAdmin() {
    if (this.user !== null && this.user !== undefined) {
      return this.user.role === 'admin';
    } else {
      return false;
    }
  }

  ngOnInit() {

    this.setUser();
  }

}
