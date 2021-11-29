import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {User} from "../user-page/user";
import {DialogComponent} from "../dialog/dialog.component";
import {UserService} from "../user-page/user-service.service";

@Component({
  selector: 'app-delete-dialog',
  templateUrl: './delete-dialog.component.html',
  styleUrls: ['./delete-dialog.component.css']
})
export class DeleteDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<DialogComponent>, @Inject(MAT_DIALOG_DATA) public data: User) {
    console.log(data);
  }

  ngOnInit(): void {
  }

  onNoClick(): void {
    console.log("on no click");
    this.dialogRef.close();
  }
}
