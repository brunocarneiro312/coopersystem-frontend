import {Component, OnInit} from '@angular/core';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  users = undefined;

  constructor(private userService: UserService) {

  }

  ngOnInit() {
    this.listarUsuarios();
  }

  listarUsuarios() {

    this.userService.findAll().subscribe(user => {
      this.users = user;
    });

  }
}
