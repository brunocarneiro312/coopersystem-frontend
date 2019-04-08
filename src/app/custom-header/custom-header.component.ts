import {Component, OnInit} from '@angular/core';
import {SharedService} from '../services/shared.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-custom-header',
  templateUrl: './custom-header.component.html',
  styleUrls: ['./custom-header.component.css']
})
export class CustomHeaderComponent implements OnInit {

  public shared: SharedService;

  constructor(private router: Router) {
    this.shared = SharedService.getIntance();
  }

  ngOnInit() {

  }

  logout() {
    window.location.href = "/login";
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
