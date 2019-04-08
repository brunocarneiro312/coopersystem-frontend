import { Component, OnInit } from '@angular/core';
import {User} from '../../../model/user.model';
import {SharedService} from '../../../services/shared.service';
import {UserService} from '../../../services/user.service';
import {Router} from '@angular/router';
import {CurrentUser} from '../../../model/current-user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user = new User('','','','',
    '', true, undefined,
    undefined, [], []);

  shared: SharedService;
  message: string;
  responseStatus: string;

  constructor(
    private userService: UserService,
    private router: Router) {

    this.shared = SharedService.getIntance();
  }

  ngOnInit() {

  }

  login() {
    this.message = '';
    this.userService.login(this.user).subscribe((userAuthentication: CurrentUser) => {
      this.shared.token = userAuthentication.token;
      this.shared.user = userAuthentication.jwtUser;
      this.shared.user.authorities = userAuthentication.jwtUser.authorities;
      this.shared.showTemplate.emit(true);
      this.router.navigate(['/']);
    }, err => {
      this.shared.token = null;
      this.shared.user = null;
      this.shared.showTemplate.emit(false);
      this.responseStatus = err.status;
      this.user.username = undefined;
      this.user.password = undefined;
      if (err.status !== 0) {
        this.message = `${err.error} (${err.status})`;
      }
      else {
        this.message = "Serviço indisponível.";
      }
    });
  }

  cancelLogin() {
    this.message = '';
    this.user = new User('','','','',
      '', true, undefined,
      undefined, [], []);
    window.location.href = '/login';
    window.location.reload();
  }
}
