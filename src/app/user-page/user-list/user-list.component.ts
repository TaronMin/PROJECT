import {AfterViewInit, Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {User} from "../user";
import {UserService} from "../user-service.service";
import {MatTable, MatTableDataSource} from "@angular/material/table";
import {MatSort} from "@angular/material/sort";
import {MatPaginator} from "@angular/material/paginator";
import {MatDialog} from "@angular/material/dialog";
import {DialogComponent} from "../../dialog/dialog.component";
import {DeleteDialogComponent} from "../../delete-dialog/delete-dialog.component";
import {Group} from "../group";
import {GroupService} from "../group-service.service";
import {DataStorageService, StorageData} from "../data-storage.service";


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit, AfterViewInit {
  users: User[] = [];
  searched: any;
  groups: Group[] = [];
  @ViewChild(MatTable) table: MatTable<User>;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @Output() editedUser = new EventEmitter<User>();
  @Input() user: string;
  undefinedUser: string;
  dataSource: MatTableDataSource<User>;


  constructor(private userService: UserService, private groupService: GroupService, public dialog: MatDialog, private requestData:DataStorageService) {
    this.users = userService.getAll();
    this.groups = groupService.getAll();
    this.dataSource = new MatTableDataSource(this.users);
  }

  getData(){
    this.requestData.gettingData();
  }

  removeUser(user: User): void {
    const dialogRef = this.dialog.open(DeleteDialogComponent, {
      minWidth: '500px',
      data: user
    });
    dialogRef.afterClosed().subscribe((event) => {
      if (event.action === 'cancel') {
        return;
      }
      this.userService.delete(user.id);

      this.users = this.userService.getAll();
      this.dataSource = new MatTableDataSource(this.users);

      // this.table.renderRows();
      this.dataSource._updateChangeSubscription();
      this.dataSource.paginator = this.paginator;
    });
  }

  onEdit(user: User): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      minWidth: '500px',
      data: user
    });

    dialogRef.afterClosed().subscribe((user) => {
      console.log(user);
      if (user.action === 'cancel') {
        return;
      }
      this.userService.edit(user);

      this.users = this.userService.getAll();
      this.dataSource = new MatTableDataSource(this.users);

      // this.table.renderRows();
      this.dataSource._updateChangeSubscription();
    });
  }


  onChange(value: string): void {
    this.dataSource.filter = value.trim().toLowerCase();
    this.undefinedUser = value;
    // this.filteredUsers = this.users.filter(x => x.firstName.includes(value) === true);
    // this.dataSource = new MatTableDataSource(this.filteredUsers);
  }

  returnGroupUser(user: User) {
    return user.groups;
  }

  displayedUser: string[] = ["id", "firstName", "lastName", "edit"];

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

}
