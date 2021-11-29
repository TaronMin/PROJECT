import {Component, ElementRef, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-search-user',
  templateUrl: './search-user.component.html',
  styleUrls: ['./search-user.component.css']
})
export class SearchUserComponent implements OnInit {
  @Output() searchUser = new EventEmitter<string>();
  findUser(event: any): void {
    console.log('event', ElementRef);
    this.searchUser.emit(event.value);
  }

  constructor() {
  }

  ngOnInit(): void {
  }

}
