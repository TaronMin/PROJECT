import {Component, OnInit, ViewChild} from '@angular/core';
import {User} from "../../user-page/user";
import {MatTable, MatTableDataSource} from "@angular/material/table";
import {MatSort} from "@angular/material/sort";
import {MatPaginator} from "@angular/material/paginator";
import {UserService} from "../../user-page/user-service.service";

@Component({
  selector: 'app-second-group',
  templateUrl: './second-group.component.html',
  styleUrls: ['./second-group.component.css']
})
export class SecondGroupComponent implements OnInit {
  groupUsers: User[] = [];
  filteredGroup: User[] = [];
  displayedUser: string[] = ["id", "firstName", "lastName"];
  @ViewChild(MatTable) table: MatTable<User>;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  dataSource: MatTableDataSource<User>;

  constructor(private userService: UserService) {
    this.groupUsers = userService.getAll();
    this.groupUsers.forEach(value => {
      value.groups.forEach(user => {
        if (user.name === "Second Group") {
          this.filteredGroup.push(value);
        }
      })
    });
    this.dataSource = new MatTableDataSource(this.filteredGroup);
  }

  ngOnInit(): void {
  }

}
