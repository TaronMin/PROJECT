import {Component, OnInit, ViewChild} from '@angular/core';
import {MatSidenav} from "@angular/material/sidenav";

@Component({
  selector: 'app-home-group',
  templateUrl: './home-group.component.html',
  styleUrls: ['./home-group.component.css']
})
export class HomeGroupComponent implements OnInit {
  @ViewChild('sidenav') sidenav: MatSidenav;
  isExpanded: boolean = true;
  showSubmenu: boolean = false;
  isShowing: boolean = false;
  usersCount: number;

  constructor() {
  }

  ngOnInit(): void {
  }

}
