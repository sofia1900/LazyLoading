import {Component, OnInit} from '@angular/core';
import {UserComponent} from "../../components/user/user.component";
import {User} from "../modelos/user";
import {ActivatedRoute} from "@angular/router";
import {UsersService} from "../service/users.service";

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrl: './user-detail.component.css'
})
export class UserDetailComponent implements OnInit {

  idUserSelect: string;
  userSelect : User;

  constructor(private route: ActivatedRoute, private service : UsersService) {
  }

  ngOnInit() {
    this.idUserSelect = this.route.snapshot.params['id']
    this.userSelect = this.service.getUserById(this.idUserSelect)
  }
}
