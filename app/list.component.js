System.register(["angular2/core", "angular2/router", "./grocery-list.service", "./config"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, grocery_list_service_1, config_1;
    var ListComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (grocery_list_service_1_1) {
                grocery_list_service_1 = grocery_list_service_1_1;
            },
            function (config_1_1) {
                config_1 = config_1_1;
            }],
        execute: function() {
            ListComponent = (function () {
                function ListComponent(_groceryListService, _router) {
                    this._groceryListService = _groceryListService;
                    this._router = _router;
                }
                ListComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    if (!config_1.Config.token) {
                        this._router.navigate(["Login"]);
                        return;
                    }
                    this._groceryListService.load()
                        .then(function (groceryList) {
                        _this.groceryList = groceryList;
                    });
                };
                ListComponent.prototype.add = function () {
                    var _this = this;
                    this._groceryListService.add(this.grocery)
                        .then(function (groceryObject) {
                        _this.groceryList.push(groceryObject);
                        // Clear out the input’s text
                        _this.grocery = "";
                    });
                };
                ListComponent = __decorate([
                    core_1.Component({
                        selector: "list",
                        template: "\n    <input [(ngModel)]=\"grocery\">\n    <button (click)=\"add()\">Add</button>\n    <ul>\n      <li *ngFor=\"#grocery of groceryList\">\n        {{grocery.name}}\n      </li>\n    </ul>\n  ",
                        styles: ["\n    li {\n      padding: 0.3em;\n    }\n  "],
                        providers: [grocery_list_service_1.GroceryListService]
                    }), 
                    __metadata('design:paramtypes', [grocery_list_service_1.GroceryListService, router_1.Router])
                ], ListComponent);
                return ListComponent;
            })();
            exports_1("ListComponent", ListComponent);
        }
    }
});
//# sourceMappingURL=list.component.js.map