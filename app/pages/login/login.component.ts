import {Component} from "angular2/core";
import {Router} from "angular2/router";
import {User} from "../../shared/user/user";
import {UserService} from "../../shared/user/user.service"

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
      <a href="/register">Register</a>
    </div>
  `,
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
      .subscribe(
        () => this._router.navigate(["List"]),
        () => alert("Unfortunately we were not able to log you in to the system")
      );
  }
}
