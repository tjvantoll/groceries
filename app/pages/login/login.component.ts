import {Component} from "angular2/core";
import {Router} from "angular2/router";
import {User} from "../../shared/user/user";
import {UserService} from "../../shared/user/user.service"

@Component({
  selector: "login",
  template:`
  <div id="wrapper">
    <section id="login">
    <header>
		<span class="avatar"><img src="./app/assets/css/images/logo.png" alt="Groceries"></span>
	</header>
        <h1>{{title}}</h1>
        <div class="field">
        <label>
            Email:
            <input type="text" [(ngModel)]="user.email">
        </label>
        </div>
        <div class="field">
        <label>
            Password:
            <input type="password" [(ngModel)]="user.password">
        </label>
        </div>
        <div class="field center">
            <button (click)="login()">Login</button>
            <a href="/register">Register</a>
        </div>
    </section>
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
