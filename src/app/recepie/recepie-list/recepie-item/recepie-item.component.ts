import {Component, OnInit} from '@angular/core';
import {Recepie} from "../../../recepie/recepie.model";

@Component({
  selector: 'app-recepie-item',
  templateUrl: './recepie-item.component.html',
  styleUrls: ['./recepie-item.component.css']
})
export class RecepieItemComponent implements OnInit {
  recepies: Recepie[] = [
    new Recepie('A test', "This is a test", 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg'),
    new Recepie('A test', "This is a test", 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg')
];

  constructor() {
  }

  ngOnInit(): void {
  }

}
