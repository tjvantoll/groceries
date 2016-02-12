import {Component} from "angular2/core";
import {Router} from "angular2/router";
import {User} from "./user";
import {UserService} from "./user.service"

@Component({
  selector: "login",
  template:`
    <h1>Register</h1>

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
      <button (click)="register()">Register</button>
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
