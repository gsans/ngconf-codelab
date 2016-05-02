import {Component} from 'angular2/core';

import {UsersService} from '../services/usersService';

// Use webpack's `require` to get files as a raw string using raw-loader
// let styles = require('./users.css');
// let template = require('./users.html');

@Component({
  selector: 'users',
  providers: [
    UsersService
  ],
  styles: [`
    .superuser {
      background-color: #eee;
    }
  `],
  template: `
    <md-card>
      <md-card-content>
        <h1>Users</h1>

        <table class="table">
          <thead>
            <tr>
              <th>id</th>
              <th>Username</th>
              <th>Roles</th>
            </tr>
          </thead>
          <tbody>
            <tr *ngFor="#user of userslist" [class.superuser]="user.superuser">
              <td>{{user.id}}</td>
              <td (click)="onClick(user.username)">
                {{user.username}} 
              <span *ngIf="user.superuser">(superuser)</span></td>
              <td>{{user.roles.join(', ')}}</td>
            </tr>
          </tbody>
        </table>
      </md-card-content>
    </md-card>
  `
})
export class Users {
  private userslist;

  constructor(users: UsersService) {
    // this.userslist = users.get();
    users.get().subscribe(data => this.userslist = data.users);
  }

  onClick(msg) {
    console.log(msg);
  }

  ngOnInit() {
    console.log('hello `Users` component');
  }
}
