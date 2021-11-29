import {Injectable} from '@angular/core';
import {Group} from "./group";
import {User} from "./user";

@Injectable({
  providedIn: 'root',
})
export class GroupService {
  public groups: Array<Group> = [];

  addUser(group: Group[], user: User) {

    let stringifyGroups = localStorage.getItem("groups");
    this.groups = JSON.parse(stringifyGroups);
    console.log(this.groups,"groups in addUser");
    let index = -1;
    group.forEach(value => {
      index = this.groups.findIndex(g => g.id === value.id);
    });

    this.groups[index].users.push(user);

    const groupJSON = JSON.stringify(this.groups);
    localStorage.setItem("groups", groupJSON);
  }

  getAll(): Group[] {
    let stringifyGroups = localStorage.getItem("groups");

    if (stringifyGroups) {
      console.log('loading from storage');
      this.groups = JSON.parse(stringifyGroups);
    }
    return this.groups;
  }

  create(group: Group): void {
    console.log(group);
    this.groups.push(group);
    const groupJSON = JSON.stringify(this.groups);
    localStorage.setItem("groups", groupJSON);
  }

  remove(group: Group) {
    let stringifyGroups = localStorage.getItem("groups");
    this.groups = JSON.parse(stringifyGroups);

    let index = this.groups.findIndex(g => g.id === group.id);
    this.groups.splice(index, 1);

    const groupJSON = JSON.stringify(this.groups);
    localStorage.setItem("groups", groupJSON);
  }

}
