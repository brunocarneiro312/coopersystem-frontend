import {Component, OnInit} from '@angular/core';
import {UserService} from '../../services/user.service';
import {Router} from '@angular/router';
import {SharedService} from '../../services/shared.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  users = undefined;
  userDetail = undefined;
  public shared: SharedService;
  message: string;
  responseStatus: string;

  constructor(private userService: UserService, private route: Router) {
    this.shared = SharedService.getIntance();
  }

  ngOnInit() {
    this.listarUsuarios();
  }

  listarUsuarios() {

    this.userService.findAll().subscribe(user => {
      this.users = user;
    });

  }

  deletarUsuario(userId) {
    this.userService.delete(userId).subscribe(response => {
      this.listarUsuarios();
      this.message = 'Usuário removido.';
      this.userDetail = undefined;
    }, err => {
      this.message = 'Erro ao remover usuário';
      this.responseStatus = err.status;
    });
  }

  showDetails(userId) {
    this.userService.findById(userId).subscribe(response => {
      this.userDetail = response;
    });
  }

  isAdmin(): boolean {
    if (this.shared.user) {
      if (this.shared.user.authorities.length > 0) {
        if (this.shared.user.authorities[0].authority.substring(5) === 'ADMIN') {
          return true;
        }
      }
    }
    return false;
  }
}
