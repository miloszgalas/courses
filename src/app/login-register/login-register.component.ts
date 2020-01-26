import {Component, Input, OnInit} from '@angular/core';
import {AuthService} from '../services/auth.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-login-register',
  templateUrl: './login-register.component.html',
  styleUrls: ['./login-register.component.css']
})
export class LoginRegisterComponent implements OnInit {

  constructor(public authService: AuthService) {
  }
  @Input() changeDisp = false;
  userState: Subscription;
  email: '';
  passwd: '';
  loginFail: boolean;
  registerFail: boolean;

  login() {
    // console.log(this.authService.getUser());
    this.authService.signIn(this.email, this.passwd).then();
  }

  register() {
    // console.log(this.authService.getUser());
    this.authService.signUp(this.email, this.passwd);
  }

  logOut() {
    this.authService.logOut().then();
  }
  ngOnInit() {
    // this.userState = this.authService.authState$.subscribe(x => {
    //   this.changeDisp = x !== null;
    // });
  }

}
