import {Injectable} from 'angular2/core';
import {Http} from 'angular2/http';

@Injectable()
export class UsersService {
  constructor(private http: Http) { }

  get() {
    return this.http.get('/assets/users.json')
      .map(response => response.json());
  }
}
