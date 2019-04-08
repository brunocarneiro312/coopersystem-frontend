import {Component, OnInit} from '@angular/core';
import {UserService} from '../../services/user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  users = undefined;

  userDetail = undefined;

  constructor(private userService: UserService, private route: Router) {

  }

  ngOnInit() {
    this.listarUsuarios();
  }

  listarUsuarios() {

    this.userService.findAll().subscribe(user => {
      this.users = user;
    });

  }

  showDetails(userId) {
    this.userService.findById(userId).subscribe(response => {
      this.userDetail = response;
    });
  }
}
