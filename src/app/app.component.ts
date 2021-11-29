import {Component, OnInit} from '@angular/core';
import {NavigationEnd, Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  isChecked: boolean = true;
  isShow: boolean = true;

  onChange(): void {
    this.isChecked = !this.isChecked;
    this.isShow = !this.isShow;
  }

  cars = [
    {name: "BMW", value: "0"},
    {name: "Mercedes", value: "1"},
    {name: "Audi", value: "2"},
    {name: "Ferrari", value: "3"},
  ]



  ngOnInit(): void {
  }

}
