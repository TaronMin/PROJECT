import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {User} from "../../cont.module";

@Component({
  selector: 'app-about-result',
  templateUrl: './about-result.component.html',
  styleUrls: ['./about-result.component.css']
})
export class AboutResultComponent implements OnInit {
  @Input() showUser:User;
  @Input() text: string;
  @Output() changed = new EventEmitter<User>();
  saveChange(changed: User){
    console.log(changed);
    this.changed.emit(changed);
  }
  constructor() { }
  // public show: boolean = false;
  ngOnInit(): void {
  }

}
