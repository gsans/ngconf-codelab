/*
 * Angular 2 decorators and services
 */
import {Component} from 'angular2/core';
import {RouteConfig} from 'angular2/router';

import {Home} from './home';
import {Users} from './users/users.component';
import {Wikipedia} from './wikipedia/wikipedia.component';
import {Contact} from './contact/contact.component';
import {AppState} from './app.service';
import {RouterActive} from './router-active';

/*
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'app',
  pipes: [ ],
  providers: [ ],
  directives: [ RouterActive ],
  styles: [
     require('normalize.css'),
    `
    md-toolbar ul {
      display: inline;
      list-style-type: none;
      margin: 0;
      padding: 0;
      width: 60px;
    }
    md-toolbar li {
      display: inline;
    }
    md-toolbar li.active {
      background-color: rgb(255, 0, 100);
    }
    md-toolbar a {
      color: #fff;
    }
    .title {
      margin-right: 20px;
    }
  `],
  template: `
    <header>
      <md-toolbar color="primary">
        <span class="title">{{ name }}</span>
        <nav>
          <ul>
            <li router-active>
              <a [routerLink]=" ['Index'] ">Index</a>
            </li>
            |
            <li router-active>
              <a [routerLink]=" ['Home'] ">Home</a>
            </li>
            |
            <li router-active>
              <a [routerLink]=" ['Users'] ">Users</a>
            </li>
            |
            <li router-active>
              <a [routerLink]=" ['Wikipedia'] ">Wikipedia</a>
            </li>
            |
            <li router-active>
              <a [routerLink]=" ['Contact'] ">Contact</a>
            </li>
            |
            <li router-active>
              <a [routerLink]=" ['About'] ">About</a>
            </li>
          </ul>
        </nav>
      </md-toolbar>
    </header>

    <main>
      <router-outlet></router-outlet>
    </main>

    <footer>
      WebPack Angular 2 Starter by <a [href]="url">@AngularClass</a>
      <div>
        <img [src]="angularclassLogo" width="10%">
      </div>
    </footer>

    <pre>this.appState.state = {{ appState.state | json }}</pre>
  `
})
@RouteConfig([
  { path: '/',      name: 'Index', component: Home, useAsDefault: true },
  { path: '/home',  name: 'Home',  component: Home },
  { path: '/users', name: 'Users', component: Users },
  { path: '/wikipedia', name: 'Wikipedia', component: Wikipedia },
  { path: '/contact', name: 'Contact', component: Contact },
  // Async load a component using Webpack's require with es6-promise-loader and webpack `require`
  { path: '/about', name: 'About', loader: () => require('es6-promise!./about')('About') }
])
export class App {
  angularclassLogo = 'assets/img/angularclass-avatar.png';
  name = 'Angular 2 Webpack Starter';
  url = 'https://twitter.com/AngularClass';

  constructor(public appState: AppState) {}

  ngOnInit() {
    console.log('Initial App State', this.appState.state);
  }

}

/*
 * Please review the https://github.com/AngularClass/angular2-examples/ repo for
 * more angular app examples that you may copy/paste
 * (The examples may not be updated as quickly. Please open an issue on github for us to update it)
 * For help or questions please contact us at @AngularClass on twitter
 * or our chat on Slack at https://AngularClass.com/slack-join
 */
