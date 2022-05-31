import {Component, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {User} from "./models/user.model";
import {loadUsers} from "./store/action/users.action";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'usersApp';

  constructor(private store: Store<User[]>) {
  }

  ngOnInit() {
    this.store.dispatch(loadUsers());
  }
}
