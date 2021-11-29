import {Component, OnInit, ViewChild} from '@angular/core';
import {MatSidenav} from "@angular/material/sidenav";
import {UserService} from "../user-page/user-service.service";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  @ViewChild('sidenav') sidenav: MatSidenav;
  isExpanded:boolean = true;
  showSubmenu: boolean = false;
  isShowing:boolean = false;
  usersCount:number;
  constructor(private userService: UserService) {
    this.usersCount = this.userService.getAll().length;
  }

  ngOnInit(): void {
  }

}
