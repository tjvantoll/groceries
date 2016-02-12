import {Component} from "angular2/core";
import {RouteConfig, ROUTER_DIRECTIVES} from "angular2/router";

import {LoginComponent} from "./pages/login/login.component";
import {RegisterComponent} from "./pages/register/register.component";
import {ListComponent} from "./pages/list/list.component";

@Component({
  selector: "my-app",
  template: "<router-outlet></router-outlet>",
  directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
  { path: "/", name: "Login", component: LoginComponent },
  { path: "/register", name: "Register", component: RegisterComponent },
  { path: "/list", name: "List", component: ListComponent }
])
export class AppComponent {}
