import {Component} from "angular2/core";
import {RouteConfig, ROUTER_DIRECTIVES} from "angular2/router";

import {LoginComponent} from "./login.component";
import {ListComponent} from "./list.component";

@Component({
  selector: "my-app",
  template: "<router-outlet></router-outlet>",
  directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
  { path: "/", name: "Login", component: LoginComponent },
  { path: "/list", name: "List", component: ListComponent }
])
export class AppComponent {}
