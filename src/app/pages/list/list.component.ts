import {Component, OnInit} from "@angular/core";
import {Router} from "@angular/router-deprecated";
import {Grocery} from "../../shared/grocery/grocery";
import {GroceryListService} from "../../shared/grocery/grocery-list.service";
import {Config} from "../../shared/config";

@Component({
  selector: "list",
  templateUrl: "./app/pages/list/list.html",
  styleUrls: ["./app/pages/list/list.css"],
  providers: [GroceryListService]
})
export class ListComponent implements OnInit {
  groceryList: Array<Grocery>;
  history: Array<Grocery>;
  grocery: string = "";

  isLoading = false;
  isShowingRecent = false;

  constructor(
    private _groceryListService: GroceryListService,
    private _router: Router) {}

  ngOnInit() {
    if (!Config.token) {
      this._router.navigate(["Login"]);
      return;
    }

    this.load();
  }

  load() {
    this.isLoading = true;
    this.groceryList = [];
    this.history = [];

    this._groceryListService.load()
      .subscribe(loadedGroceries => {
        loadedGroceries.forEach((groceryObject: Grocery) => {
          if (groceryObject.deleted) {
            this.history.unshift(groceryObject);
          } else {
            this.groceryList.unshift(groceryObject);
          }
        });
        this.isLoading = false;
      });
  }
  
  add() {
    if (this.grocery.trim() === "") {
      alert("Enter a grocery item");
      return;
    }

    this._groceryListService.add(this.grocery)
      .subscribe(
        groceryObject => {
          this.groceryList.unshift(groceryObject);
          this.grocery = "";
        },
        () => {
          alert("An error occurred while adding an item to your list.");
          this.grocery = "";
        }
      )
  }

  toggleDone(grocery: Grocery) {
    this._groceryListService.toggleDoneFlag(grocery)
      .subscribe(() => {
        grocery.done = !grocery.done;
      }, () => {
        alert("An error occurred managing your grocery list.");
      });
  }

  delete(grocery: Grocery) {
    this._groceryListService.setDeleteFlag(grocery)
      .subscribe(() => {
        var index = this.groceryList.indexOf(grocery);
        grocery.deleted = true;
        this.groceryList.splice(index, 1);
        this.history.push(grocery);
      });
  }

  toggleDoneHistory(grocery: Grocery) {
    grocery.done = !grocery.done;
  }

  toggleRecent() {
    let groceriesToRestore = []
    this.history.forEach((grocery) => {
      if (grocery.done) {
        groceriesToRestore.push(grocery);
      }
    });

    if (!this.isShowingRecent || groceriesToRestore.length == 0) {
      this.isShowingRecent = !this.isShowingRecent;
      return;
    }

    this._groceryListService.restore(groceriesToRestore)
      .subscribe(() => {
        this.isShowingRecent = false;
        this.load();
      });
  }
}
