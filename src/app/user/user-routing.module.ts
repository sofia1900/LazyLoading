import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListUsersComponent} from "./list-users/list-users.component";
import {UserDetailComponent} from "./user-detail/user-detail.component";

const routes: Routes = [
  {path: 'list' , component : ListUsersComponent,
    children : [
      {path: 'detail/:id', component : UserDetailComponent}
    ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
