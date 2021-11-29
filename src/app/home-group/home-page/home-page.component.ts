import {Component, OnInit} from '@angular/core';
import {UserService} from "../../user-page/user-service.service";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  usersCount:number;
  constructor(private userService: UserService) {
    this.usersCount = this.userService.users.length;
  }

  ngOnInit(): void {
  }

}
