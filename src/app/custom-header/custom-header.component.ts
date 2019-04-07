import { Component, OnInit } from '@angular/core';
import {SharedService} from '../services/shared.service';

@Component({
  selector: 'app-custom-header',
  templateUrl: './custom-header.component.html',
  styleUrls: ['./custom-header.component.css']
})
export class CustomHeaderComponent implements OnInit {

  sharedService: SharedService;

  constructor() {
    this.sharedService = SharedService.getIntance();
  }

  ngOnInit() {
    console.log("================");
    console.log(this.sharedService.user);
    console.log("================");
  }

  logout() {
    console.log(this.sharedService.user);
    this.sharedService.user = undefined;
    console.log(this.sharedService.user);
  }
}
