import {Component, Input, OnInit} from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import {AuthService} from '../services/auth.service';
import {User} from 'firebase';
// import {NgbNav} from '@ng-bootstrap/ng-bootstrap';
import * as firebase from 'firebase';
import {Observable, Subscription} from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  @Input() changeDisp = false;
  @Input() user: Observable<firebase.User | null>;
  // @Input() mail: string;
  userState: Subscription;

  constructor(private auth: AuthService) {
  }
  logged: boolean;
  email: string | null;

  setUser() {
    // this.auth.getUser().subscribe(u => this.user = u);
    // console.log(this.user);
  }

  ngOnInit() {
    // this.userState = this.auth.authState$.subscribe(x => {
    //   this.changeDisp = x !== null;
    // });
    this.setUser();
  }

}
