import {Component, OnInit,} from '@angular/core';
import {User} from "../user";
import {UserService} from "../user-service.service";
import {Router} from "@angular/router";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Group} from "../group";
import {GroupService} from "../group-service.service";

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {
  user: User = new User("", "");
  currentUser: User = new User("", "");
  myForm: FormGroup;
  groups: Group[] = [];

  constructor(private userService: UserService,private groupService:GroupService, private router: Router) {
    this.groups = groupService.getAll();
  }

  addUser(): void {
    console.log(this.myForm.value.option);
    this.currentUser = new User(this.user.firstName, this.user.lastName, null, this.myForm.value.option);
    this.userService.create(this.currentUser);
    this.groupService.addUser(this.myForm.value.option, this.currentUser);
    this.router.navigate(["/user-list"]);
  }

  isCheked: boolean = false;

  onSubmit(): void {
    console.log(this.myForm);
  }

  onChange() {
    this.isCheked = !this.isCheked;
    if (this.isCheked) {
      this.myForm.get('firstName').addValidators(Validators.required);
      this.myForm.get('secondName').addValidators(Validators.required);
      this.myForm.get("firstName").updateValueAndValidity();
      this.myForm.get("secondName").updateValueAndValidity();
    } else {
      this.myForm.get('firstName').clearValidators();
      this.myForm.get('secondName').clearValidators();
      this.myForm.get("firstName").updateValueAndValidity();
      this.myForm.get("secondName").updateValueAndValidity();
    }
  }

  compareFn: ((f1: any, f2: any) => boolean) | null = this.compareByValue;

  compareByValue(f1: any, f2: any) {
    return f1 && f2 && f1.id === f2.id;
  }

  ngOnInit(): void {
    this.myForm = new FormGroup({
      "firstName": new FormControl(null),
      "secondName": new FormControl(null),
      "option": new FormControl(null),
    })
  }
}
