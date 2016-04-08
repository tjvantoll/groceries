import {Component} from "angular2/core";
import {Router} from "angular2/router";
import {User} from "../../shared/user/user";
import {UserService} from "../../shared/user/user.service"

@Component({
  selector: "login",
  template:`
  <div id="wrapper">
    <section id="login" class="{{ isLoggingIn ? '' : 'dark' }}">
      <header>
        <span class="avatar">
          <img src="./app/assets/css/images/logo.png" alt="Groceries logo">
        </span>
      </header>
      <h1>Groceries</h1>
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
        <button class="big" (click)="submit()">
          {{ isLoggingIn ? 'Login' : 'Register' }}
        </button>
        <button class="plain" (click)="toggleDisplay()">
          {{ isLoggingIn ? 'Sign Up' : 'Back to Login' }}
        </button>
      </div>
    </section>
  </div>
  `,
  providers: [UserService]
})
export class LoginComponent {
  user: User;
  isLoggingIn = true;

  constructor(
    private _userService: UserService,
    private _router: Router) {

    this.user = new User();
    this.user.email = "nativescriptrocks@telerik.com";
    this.user.password = "password";
  }

  submit() {
    if (this.isLoggingIn) {
      this.login();
    } else {
      this.signUp();
    }
  }

  login() {
    this._userService.login(this.user)
      .subscribe(
        () => this._router.navigate(["List"]),
        () => alert("Unfortunately we were not able to log you in to the system")
      );
  }

  signUp() {
    this._userService.register(this.user)
      .subscribe(
        () => {
          alert("Your account was successfully created.")
          this.toggleDisplay();
        },
        () => alert("Unfortunately we were unable to create your account.")
      );
  }

  toggleDisplay() {
    this.isLoggingIn = !this.isLoggingIn;
  }
}
