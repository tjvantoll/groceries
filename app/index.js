System.registerDynamic("app/environment.js",[],!0,function(a,b,c){"use strict";return b.environment={production:!0},c.exports}),System.registerDynamic("app/shared/user/user.js",[],!0,function(a,b,c){"use strict";var d=function(){function a(){}return a.prototype.isValidEmail=function(){var a=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;return a.test(this.email)},a}();return b.User=d,c.exports}),System.registerDynamic("app/shared/user/user.service.js",["@angular/core","@angular/http","../config","rxjs/Rx","rxjs/add/operator/do","rxjs/add/operator/map"],!0,function(a,b,c){"use strict";var d=this&&this.__decorate||function(a,b,c,d){var e,f=arguments.length,g=3>f?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(3>f?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g},e=this&&this.__metadata||function(a,b){return"object"==typeof Reflect&&"function"==typeof Reflect.metadata?Reflect.metadata(a,b):void 0},f=a("@angular/core"),g=a("@angular/http"),h=a("../config"),i=a("rxjs/Rx");a("rxjs/add/operator/do"),a("rxjs/add/operator/map");var j=function(){function a(a){this._http=a}return a.prototype.register=function(a){var b=new g.Headers;return b.append("Content-Type","application/json"),this._http.post(h.Config.apiUrl+"Users",JSON.stringify({Username:a.email,Email:a.email,Password:a.password}),{headers:b})["catch"](this.handleErrors)},a.prototype.login=function(a){var b=new g.Headers;return b.append("Content-Type","application/json"),this._http.post(h.Config.apiUrl+"oauth/token",JSON.stringify({username:a.email,password:a.password,grant_type:"password"}),{headers:b}).map(function(a){return a.json()})["do"](function(a){h.Config.token=a.Result.access_token})["catch"](this.handleErrors)},a.prototype.resetPassword=function(a){var b=new g.Headers;return b.append("Content-Type","application/json"),this._http.post(h.Config.apiUrl+"Users/resetpassword",JSON.stringify({Email:a}),{headers:b})["catch"](this.handleErrors)},a.prototype.handleErrors=function(a){return console.log(JSON.stringify(a.json())),i.Observable["throw"](a)},a=d([f.Injectable(),e("design:paramtypes",[g.Http])],a)}();return b.UserService=j,c.exports}),System.registerDynamic("app/pages/login/login.component.js",["@angular/core","@angular/router-deprecated","../../shared/user/user","../../shared/user/user.service"],!0,function(a,b,c){"use strict";var d=this&&this.__decorate||function(a,b,c,d){var e,f=arguments.length,g=3>f?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(3>f?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g},e=this&&this.__metadata||function(a,b){return"object"==typeof Reflect&&"function"==typeof Reflect.metadata?Reflect.metadata(a,b):void 0},f=a("@angular/core"),g=a("@angular/router-deprecated"),h=a("../../shared/user/user"),i=a("../../shared/user/user.service"),j=function(){function a(a,b){this._userService=a,this._router=b,this.isLoggingIn=!0,this.user=new h.User,this.user.email="ngconf@telerik.com",this.user.password="password"}return a.prototype.submit=function(){this.isLoggingIn?this.login():this.signUp()},a.prototype.login=function(){var a=this;this._userService.login(this.user).subscribe(function(){return a._router.navigate(["List"])},function(){return alert("Unfortunately we were not able to log you in to the system")})},a.prototype.signUp=function(){var a=this;this._userService.register(this.user).subscribe(function(){alert("Your account was successfully created."),a.toggleDisplay()},function(){return alert("Unfortunately we were unable to create your account.")})},a.prototype.toggleDisplay=function(){this.isLoggingIn=!this.isLoggingIn},a=d([f.Component({selector:"login",templateUrl:"./app/pages/login/login.html",styleUrls:["./app/pages/login/login.css"],providers:[i.UserService]}),e("design:paramtypes",[i.UserService,g.Router])],a)}();return b.LoginComponent=j,c.exports}),System.registerDynamic("app/shared/grocery/grocery.js",[],!0,function(a,b,c){"use strict";var d=function(){function a(a,b,c,d){this.id=a,this.name=b,this.done=c,this.deleted=d}return a}();return b.Grocery=d,c.exports}),System.registerDynamic("app/shared/grocery/grocery-list.service.js",["@angular/core","@angular/http","../config","./grocery","rxjs/Rx","rxjs/add/operator/map"],!0,function(a,b,c){"use strict";var d=this&&this.__decorate||function(a,b,c,d){var e,f=arguments.length,g=3>f?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(3>f?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g},e=this&&this.__metadata||function(a,b){return"object"==typeof Reflect&&"function"==typeof Reflect.metadata?Reflect.metadata(a,b):void 0},f=a("@angular/core"),g=a("@angular/http"),h=a("../config"),i=a("./grocery"),j=a("rxjs/Rx");a("rxjs/add/operator/map");var k=function(){function a(a){this._http=a}return a.prototype.load=function(){return this._http.get(h.Config.apiUrl+"Groceries",{headers:this.getHeaders()}).map(function(a){return a.json()}).map(function(a){var b=[];return a.Result.forEach(function(a){b.push(new i.Grocery(a.Id,a.Name,a.Done||!1,a.Deleted||!1))}),b})["catch"](this.handleErrors)},a.prototype.add=function(a){return this._http.post(h.Config.apiUrl+"Groceries",JSON.stringify({Name:a}),{headers:this.getHeaders()}).map(function(a){return a.json()}).map(function(b){return new i.Grocery(b.Result.Id,a,!1,!1)})["catch"](this.handleErrors)},a.prototype._put=function(a,b){return this._http.put(h.Config.apiUrl+"Groceries/"+a,JSON.stringify(b),{headers:this.getHeaders()})["catch"](this.handleErrors)},a.prototype.setDeleteFlag=function(a){return this._put(a.id,{Deleted:!a.deleted})},a.prototype.restore=function(a){var b=[];a.forEach(function(a){b.push(a.id)});var c=this.getHeaders();return c.append("X-Everlive-Filter",JSON.stringify({Id:{$in:b}})),this._http.put(h.Config.apiUrl+"Groceries",JSON.stringify({Deleted:!1,Done:!1}),{headers:c})["catch"](this.handleErrors)},a.prototype.toggleDoneFlag=function(a){return this._put(a.id,{Done:!a.done})},a.prototype.deleteForever=function(a){return this._http["delete"](h.Config.apiUrl+"Groceries/"+a.id,{headers:this.getHeaders()}).map(function(a){return a.json()})["catch"](this.handleErrors)},a.prototype.getHeaders=function(){var a=new g.Headers;return a.append("Content-Type","application/json"),a.append("Authorization","Bearer "+h.Config.token),a},a.prototype.handleErrors=function(a){return console.log(JSON.stringify(a.json())),j.Observable["throw"](a)},a=d([f.Injectable(),e("design:paramtypes",[g.Http])],a)}();return b.GroceryListService=k,c.exports}),System.registerDynamic("app/shared/config.js",[],!0,function(a,b,c){"use strict";var d=function(){function a(){}return Object.defineProperty(a,"token",{get:function(){return localStorage.getItem("token")},set:function(a){localStorage.setItem("token",a)},enumerable:!0,configurable:!0}),a.hasActiveToken=function(){return!!localStorage.getItem("token")},a.apiUrl="https://api.everlive.com/v1/GWfRtXi1Lwt4jcqK/",a}();return b.Config=d,c.exports}),System.registerDynamic("app/pages/list/list.component.js",["@angular/core","@angular/router-deprecated","../../shared/grocery/grocery-list.service","../../shared/config"],!0,function(a,b,c){"use strict";var d=this&&this.__decorate||function(a,b,c,d){var e,f=arguments.length,g=3>f?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(3>f?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g},e=this&&this.__metadata||function(a,b){return"object"==typeof Reflect&&"function"==typeof Reflect.metadata?Reflect.metadata(a,b):void 0},f=a("@angular/core"),g=a("@angular/router-deprecated"),h=a("../../shared/grocery/grocery-list.service"),i=a("../../shared/config"),j=function(){function a(a,b){this._groceryListService=a,this._router=b}return a.prototype.ngOnInit=function(){var a=this;return i.Config.token?void this._groceryListService.load().subscribe(function(b){a.groceryList=b}):void this._router.navigate(["Login"])},a.prototype.add=function(){var a=this;this._groceryListService.add(this.grocery).subscribe(function(b){a.groceryList.push(b),a.grocery=""})},a.prototype.toggleDone=function(a){this._groceryListService.toggleDoneFlag(a).subscribe(function(){a.done=!a.done},function(){alert("An error occurred managing your grocery list.")})},a.prototype["delete"]=function(a){var b=this;this._groceryListService.deleteForever(a).subscribe(function(){var c=b.groceryList.indexOf(a);b.groceryList.splice(c,1)})},a=d([f.Component({selector:"list",templateUrl:"./app/pages/list/list.html",styleUrls:["./app/pages/list/list.css"],providers:[h.GroceryListService]}),e("design:paramtypes",[h.GroceryListService,g.Router])],a)}();return b.ListComponent=j,c.exports}),System.registerDynamic("app/app.component.js",["@angular/core","@angular/http","@angular/router-deprecated","./pages/login/login.component","./pages/list/list.component"],!0,function(a,b,c){"use strict";var d=this&&this.__decorate||function(a,b,c,d){var e,f=arguments.length,g=3>f?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(3>f?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g},e=this&&this.__metadata||function(a,b){return"object"==typeof Reflect&&"function"==typeof Reflect.metadata?Reflect.metadata(a,b):void 0},f=a("@angular/core"),g=a("@angular/http"),h=a("@angular/router-deprecated"),i=a("./pages/login/login.component"),j=a("./pages/list/list.component"),k=function(){function a(){}return a=d([f.Component({selector:"groceries-app",template:"<router-outlet></router-outlet>",directives:[h.ROUTER_DIRECTIVES],providers:[g.HTTP_PROVIDERS,h.ROUTER_PROVIDERS]}),h.RouteConfig([{path:"/Login",name:"Login",component:i.LoginComponent,useAsDefault:!0},{path:"/List",name:"List",component:j.ListComponent}]),e("design:paramtypes",[])],a)}();return b.GroceriesAppComponent=k,c.exports}),System.registerDynamic("app/index.js",["./environment","./app.component"],!0,function(a,b,c){"use strict";function d(a){for(var c in a)b.hasOwnProperty(c)||(b[c]=a[c])}return d(a("./environment")),d(a("./app.component")),c.exports});