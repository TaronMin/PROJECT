import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {Group} from "../user-page/group";

@Component({
  selector: 'app-group-dialog',
  templateUrl: './group-dialog.component.html',
})
export class GroupDialogComponent implements OnInit {
  public group: Group;


  constructor(public dialogRef: MatDialogRef<GroupDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: Group) {
    this.group = Object.assign({}, this.data);
    this.group.users = [];
    console.log(this.group);
  }

  closeDialog() {
    this.dialogRef.close();
  }

  ngOnInit(): void {
  }

}
