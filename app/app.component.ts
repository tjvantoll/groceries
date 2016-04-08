import {Component} from "angular2/core";
import {RouteConfig, ROUTER_DIRECTIVES} from "angular2/router";

import {LoginComponent} from "./pages/login/login.component";
import {ListComponent} from "./pages/list/list.component";

@Component({
  selector: "my-app",
  template: "<router-outlet></router-outlet>",
  directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
  { path: "/Login", name: "Login", component: LoginComponent, useAsDefault: true },
  { path: "/List", name: "List", component: ListComponent }
])
export class AppComponent {}
