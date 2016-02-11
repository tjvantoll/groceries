System.register(["angular2/core", "./config", "./grocery"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, config_1, grocery_1;
    var GroceryListService;
    function handleErrors(response) {
        if (!response.ok) {
            console.log(JSON.stringify(response));
            throw Error(response.statusText);
        }
        return response;
    }
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (config_1_1) {
                config_1 = config_1_1;
            },
            function (grocery_1_1) {
                grocery_1 = grocery_1_1;
            }],
        execute: function() {
            GroceryListService = (function () {
                function GroceryListService() {
                }
                GroceryListService.prototype.load = function () {
                    return fetch(config_1.Config.apiUrl + "Groceries", {
                        headers: {
                            "Authorization": "Bearer " + config_1.Config.token
                        }
                    })
                        .then(handleErrors)
                        .then(function (response) {
                        return response.json();
                    }).then(function (data) {
                        var groceryList = [];
                        data.Result.forEach(function (grocery) {
                            groceryList.push(new grocery_1.Grocery(grocery.Id, grocery.Name));
                        });
                        return groceryList;
                    });
                };
                GroceryListService.prototype.add = function (name) {
                    return fetch(config_1.Config.apiUrl + "Groceries", {
                        method: "POST",
                        body: JSON.stringify({
                            Name: name
                        }),
                        headers: {
                            "Authorization": "Bearer " + config_1.Config.token,
                            "Content-Type": "application/json"
                        }
                    })
                        .then(handleErrors)
                        .then(function (response) {
                        return response.json();
                    })
                        .then(function (data) {
                        return new grocery_1.Grocery(data.Result.Id, name);
                    });
                };
                GroceryListService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], GroceryListService);
                return GroceryListService;
            })();
            exports_1("GroceryListService", GroceryListService);
        }
    }
});
//# sourceMappingURL=grocery-list.service.js.map