import {Component} from "angular2/core";
import {Router} from "angular2/router";
import {User} from "../../shared/user/user";
import {UserService} from "../../shared/user/user.service"

@Component({
  selector: "login",
  template:`
  <div id="wrapper">
    <section id="register">
    <header>
		<span class="avatar"><img src="./app/assets/css/images/logo.png" alt="Groceries"></span>
	</header>
    <h1>Register</h1>
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
      <button (click)="register()">Register</button>
    </div>
    </section>
   </div>
  `,
  providers: [UserService]
})
export class RegisterComponent {
  public user = new User();

  constructor(
    private _userService: UserService,
    private _router: Router) {
  }

  register() {
    this._userService.register(this.user)
      .subscribe(
        () => {
          alert("Your account was successfully created");
          this._router.navigate(["Login"]);
        },
        () => alert("Unfortunately we were unable to create your account")
      );
  }
}
