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
  grocery: string;

  constructor(
    private _groceryListService: GroceryListService,
    private _router: Router) {}

  ngOnInit() {
    if (!Config.token) {
      this._router.navigate(["Login"]);
      return;
    }

    this._groceryListService.load()
      .subscribe(
        groceryList => { this.groceryList = groceryList; }
      );
  }
  
  add() {
    this._groceryListService.add(this.grocery)
      .subscribe(groceryObject => {
        this.groceryList.push(groceryObject);

        // Clear out the input’s text
        this.grocery = "";
      });
  }

  toggleDone(grocery: Grocery) {
    this._groceryListService.toggleDoneFlag(grocery)
      .subscribe(() => {
        grocery.done = !grocery.done;
      }, () => {
        alert("An error occurred managing your grocery list.");
      });
  }
  
  delete(grocery) {
    this._groceryListService.deleteForever(grocery)
      .subscribe(() => {
        var index = this.groceryList.indexOf(grocery);
        this.groceryList.splice(index, 1);
      });
  }
}
