import {Group} from "./group";

export class User {
  constructor(public firstName: string, public lastName: string, public id: number = 0, public groups?:Array<Group>) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.id = id;
    this.groups = groups;
  }
}
