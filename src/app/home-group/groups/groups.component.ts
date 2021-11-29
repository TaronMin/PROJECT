import { Component, OnInit } from '@angular/core';
import {User} from "../../user-page/user";
import {DialogComponent} from "../../dialog/dialog.component";
import {MatDialog} from "@angular/material/dialog";
import {GroupService} from "../../user-page/group-service.service";
import {Group} from "../../user-page/group";
import {GroupDialogComponent} from "../../group-dialog/group-dialog.component";

@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.css']
})
export class GroupsComponent implements OnInit {
   groups:Group[] = [];
  constructor(public dialog: MatDialog,private groupService:GroupService) {
    console.log(this.groups,"empty group");
    this.groups = groupService.getAll();

  }

  ngOnInit(): void {
  }

  addGroup() {
    const dialogRef = this.dialog.open(GroupDialogComponent, {
      minWidth: '500px'
    });

    dialogRef.afterClosed().subscribe((group) => {
      console.log(group);
      if (group.action === 'cancel') {
        return;
      }
      this.groupService.create(group);
    })
  }

  delete(group:Group) {
    this.groupService.remove(group);
    this.groups = this.groupService.getAll();
  }
}
