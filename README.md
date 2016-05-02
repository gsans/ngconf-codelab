#ng-conf | Code Lab - New Data Architecture in Angular 2

[Instructions and Setup](http://bit.ly/ngconf-codelab-doc)

> Based on https://github.com/angular-class/angular2-webpack-starter.

```
ngconf-codelab/
 ├──src/                       
 |   ├──main.browser.ts        * entry file
 │   │
 |   ├──index.html             * index page
 │   │
 │   ├──my-app/                * basic application to explore Angular 2 features.
 │   │
 │   └──app/                   * original app from angular2-webpack-starter.
```

You can easily switch between them or add your own by changing the *root component* import in `src/main.browser.ts` (line 16). 

```
//src/main.browser.ts

12 /*
13 * App Component
14 * our top level component that holds all of our components
15 */
16 import {App, APP_PROVIDERS} from './my-app';
```

# License
 [MIT](/LICENSE)
