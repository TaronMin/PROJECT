import {Injectable} from '@angular/core';
import {User} from "./user";
import {Group} from "./group";

@Injectable({
  providedIn: 'root',
})
export class UserService {
  public users: Array<User> = [];

  constructor() {

    //Storing data
    // const userJSON = JSON.stringify(this.users);
    // localStorage.setItem("users", userJSON);

    //Retrieve data
    // let stringifyUsers = localStorage.getItem("users");
    // this.retrieveUsers = JSON.parse(stringifyUsers);
    // console.log(this.retrieveUsers);
  }

  getAll(): User[] {
    let stringifyUsers = localStorage.getItem("users");

    if (stringifyUsers) {
      console.log('loading from storage');
      this.users = JSON.parse(stringifyUsers);
    }

    return this.users;
  }

  create(user: User) {

    console.log(this.users, "users");
    let sorted = this.users.sort(function (u1, u2) {
      return u2.id - u1.id
    });
    let id = 1;
    if (sorted.length !== 0) {
      id = sorted[0].id + 1;
      console.log('setting id to ', id);
    }
    user.id = id;

    //Retrieve users
    this.users.push(user);
    const userJSON = JSON.stringify(this.users);
    localStorage.setItem("users", userJSON);
  }

  getById(id: any): User {
    let index = this.users.findIndex(d => d.id == id);
    return this.users[index];
  }


  edit(user: User) {
    let stringifyUsers = localStorage.getItem("users");
    this.users = JSON.parse(stringifyUsers);

    let index = this.users.findIndex(d => d.id === user.id);
    this.users[index] = user;

    const userJSON = JSON.stringify(this.users);
    localStorage.setItem("users", userJSON);
  }

  delete(id: number) {
    let stringifyUsers = localStorage.getItem("users");
    this.users = JSON.parse(stringifyUsers);

    console.log("Delete", id);
    let index = this.users.findIndex(d => d.id === id);
    this.users.splice(index, 1);

    const userJSON = JSON.stringify(this.users);
    localStorage.setItem("users", userJSON);
  }

}
