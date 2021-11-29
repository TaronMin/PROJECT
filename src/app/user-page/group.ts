import {User} from "./user";

export class Group {
  constructor(public name: string, public color: string, public id: number, public users: User[] = []) {
    this.name = name;
    this.color = color;
    this.id = id;
    if (this.users.length === 0) {
      this.users = [];
    } else {
      this.users = users
    }
  }
}
