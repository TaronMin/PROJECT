import {Component, OnInit,} from "@angular/core";

@Component({
  selector: 'app-recepie-list',
  templateUrl: './recepie-list.component.html',
})
export class RecepieListComponent implements OnInit{
  showHide:boolean = true;
  toggleFunction(){
    this.showHide = !this.showHide;
  }
  constructor() {
  }
  ngOnInit(): void {
    console.log("ngOnInit has called");
  }
}
