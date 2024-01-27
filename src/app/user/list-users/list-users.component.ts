import {Component, OnInit} from '@angular/core';
import {User} from "../modelos/user";
import {UsersService} from "../service/users.service";

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrl: './list-users.component.css'
})
export class ListUsersComponent implements OnInit{
  users : User[] = [];
  constructor(private service : UsersService) {}

  ngOnInit() {
    this.service.getUsers()
      .subscribe( users =>
      this.users = users )
  }

}
