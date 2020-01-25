import {Component, Input, OnInit} from '@angular/core';
import {AuthService} from '../auth.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-login-register',
  templateUrl: './login-register.component.html',
  styleUrls: ['./login-register.component.css']
})
export class LoginRegisterComponent implements OnInit {

  constructor(private authService: AuthService) {
  }
  @Input() changeDisp = false;
  userState: Subscription;
  email: '';
  passwd: '';
  loginFail: boolean;
  registerFail: boolean;

  login() {
    console.log(this.authService.getUser());
    this.authService.signIn(this.email, this.passwd);
  }

  register() {
    console.log(this.authService.getUser());
    this.authService.signUp(this.email, this.passwd);
  }

  logOut() {
    this.authService.logOut();
  }
  ngOnInit() {
    this.userState = this.authService.authState$.subscribe(x => {
      this.changeDisp = x !== null;
    });
  }

}
