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
    this.route.paramMap.subscribe((params) => {
      // Actualizar el componente con los nuevos parámetros
      const id = params.get('id');
      if (id != null) {
        this.userSelect = this.service.getUserById(id);
      }
    });
  }
}
