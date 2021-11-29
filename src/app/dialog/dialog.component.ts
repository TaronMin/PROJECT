import {OnInit} from '@angular/core';
import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {User} from "../user-page/user";
import {Group} from "../user-page/group";
import {GroupService} from "../user-page/group-service.service";

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
})
export class DialogComponent implements OnInit {
  public user: User;
  public groups:Group[] = [];
  compareFn: ((f1: any, f2: any) => boolean) | null = this.compareByValue;

  compareByValue(f1: any, f2: any) {
    return f1 && f2 && f1.id === f2.id;
  }
  constructor(public dialogRef: MatDialogRef<DialogComponent>, @Inject(MAT_DIALOG_DATA) public data: User,private groupService:GroupService) {
    this.user = Object.assign({}, this.data);
    console.log(this.user);

    this.groups = groupService.getAll();
  }

  closeDialog() {
    this.dialogRef.close();
  }

  ngOnInit(): void {

  }

}
