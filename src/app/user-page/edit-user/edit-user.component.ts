import {Component, OnInit,} from '@angular/core';
import {User} from "../user";
import {UserService} from "../user-service.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
  user: User = new User("", "");

  constructor(private userService: UserService, private router: ActivatedRoute, private routerEdit: Router) {
    router.params.subscribe(params => {
      this.user = this.userService.getById(params.id);
    });
  }

  onSave(): void {
    if (this.user.id === undefined || this.user.id === 0) {
      this.userService.create(this.user);
    } else {
      console.log('edit');
      this.userService.edit(this.user);
    }
    this.routerEdit.navigate(['/user-list']);
  }

  ngOnInit(): void {
  }

  isDisabled(): boolean {
    return this.user.firstName === '' || this.user.lastName === '';
  }

}
