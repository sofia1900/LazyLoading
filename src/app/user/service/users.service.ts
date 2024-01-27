import { Injectable } from '@angular/core';
import {User} from "../modelos/user";
import {Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  users : User[] = [
    {id : "1", name : "Sara", surname : "Álvarez" , email : "saraal5@gmail.com"},
    {id : "2", name : "Pepe", surname : "Fernádez" , email : "pepe85@gmail.com"},
    {id : "3", name : "Marta", surname : "Rodríguez" , email : "mr00@gmail.com"},
    {id : "4", name : "David", surname : "González" , email : "gonzalezd@gmail.com"}
  ]
  constructor() { }

  getUsers () : Observable<User[]>{
    return of(this.users)
  }

  getUserById (id : string) {
    return this.users[parseInt(id)-1]
  }

}
