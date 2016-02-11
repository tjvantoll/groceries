System.register(["angular2/core", "angular2/router", "./user", "./user.service"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, user_1, user_service_1;
    var LoginComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (user_1_1) {
                user_1 = user_1_1;
            },
            function (user_service_1_1) {
                user_service_1 = user_service_1_1;
            }],
        execute: function() {
            LoginComponent = (function () {
                function LoginComponent(_userService, _router) {
                    this._userService = _userService;
                    this._router = _router;
                    this.title = "Groceries";
                    this.user = new user_1.User();
                    this.user.email = "nativescriptrocks@telerik.com";
                    this.user.password = "password";
                }
                LoginComponent.prototype.login = function () {
                    var _this = this;
                    this._userService.login(this.user)
                        .then(function () {
                        _this._router.navigate(["List"]);
                    })
                        .catch(function () {
                        alert("Unfortunately we were not able to log you in to the system");
                    });
                };
                LoginComponent = __decorate([
                    core_1.Component({
                        selector: "login",
                        template: "\n    <h1>{{title}}</h1>\n\n    <div>\n      <label>\n        Email:\n        <input [(ngModel)]=\"user.email\">\n      </label>\n    </div>\n    <div>\n      <label>\n        Password:\n        <input type=\"password\" [(ngModel)]=\"user.password\">\n      </label>\n    </div>\n    <div>\n      <button (click)=\"login()\">Login</button>\n      <a href=\"#register\">Register</a>\n    </div>\n  ",
                        styles: ["\n    div {\n      padding: 1em 0;\n    }\n    label {\n      font-weight: bold;\n    }\n    input {\n      display: block;\n      margin-top: 0.2em;\n      width: 20em;\n      padding: 0.3em;\n    }\n  "],
                        providers: [user_service_1.UserService]
                    }), 
                    __metadata('design:paramtypes', [user_service_1.UserService, router_1.Router])
                ], LoginComponent);
                return LoginComponent;
            })();
            exports_1("LoginComponent", LoginComponent);
        }
    }
});
//# sourceMappingURL=login.component.js.map