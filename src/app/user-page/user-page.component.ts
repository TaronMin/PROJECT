import {Component, Input, OnInit} from '@angular/core';
import {UserService} from "./user-service.service";
import {MatTableDataSource} from "@angular/material/table";

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css']
})
export class UserPageComponent implements OnInit {
  user:string
  onChange(value:string): void {
    this.user = value;
  }
  constructor() {
  }
  ngOnInit(): void {
  }

}
