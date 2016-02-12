import {Component} from "angular2/core";
import {Router} from "angular2/router";
import {User} from "./user";
import {UserService} from "./user.service"

@Component({
  selector: "login",
  template:`
    <h1>{{title}}</h1>

    <div>
      <label>
        Email:
        <input [(ngModel)]="user.email">
      </label>
    </div>
    <div>
      <label>
        Password:
        <input type="password" [(ngModel)]="user.password">
      </label>
    </div>
    <div>
      <button (click)="login()">Login</button>
      <a href="#register">Register</a>
    </div>
  `,
  styles: [`
    div {
      padding: 1em 0;
    }
    label {
      font-weight: bold;
    }
    input {
      display: block;
      margin-top: 0.2em;
      width: 20em;
      padding: 0.3em;
    }
  `],
  providers: [UserService]
})
export class LoginComponent {
  public title = "Groceries";
  public user = new User();

  constructor(
    private _userService: UserService,
    private _router: Router) {

    this.user.email = "nativescriptrocks@telerik.com";
    this.user.password = "password";
  }

  login() {
    this._userService.login(this.user)
      .add(() => {
        this._router.navigate(["List"]);
      });
  }
}
