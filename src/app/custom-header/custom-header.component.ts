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
}
