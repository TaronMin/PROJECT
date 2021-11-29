import {Component, OnInit, ViewChild} from '@angular/core';
import {User} from "../../user-page/user";
import {UserService} from "../../user-page/user-service.service";
import {MatTable, MatTableDataSource} from "@angular/material/table";
import {MatSort} from "@angular/material/sort";
import {MatPaginator} from "@angular/material/paginator";
import {DeleteDialogComponent} from "../../delete-dialog/delete-dialog.component";
import {DialogComponent} from "../../dialog/dialog.component";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-first-group',
  templateUrl: './first-group.component.html',
  styleUrls: ['./first-group.component.css']
})
export class FirstGroupComponent implements OnInit {
  groupUsers: User[] = [];
  filteredGroup: User[] = [];
  displayedUser: string[] = ["id", "firstName", "lastName"];
  @ViewChild(MatTable) table: MatTable<User>;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  dataSource: MatTableDataSource<User>;

  constructor(private userService: UserService, public dialog: MatDialog) {
    this.groupUsers = userService.getAll();
    this.groupUsers.forEach(value => {
      value.groups.forEach(user => {
        if (user.name === "First Group") {
          this.filteredGroup.push(value);
        }
      })
    });
    this.dataSource = new MatTableDataSource(this.filteredGroup);
  }


  ngOnInit(): void {
  }

}
