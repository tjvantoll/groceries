import {Component, OnInit} from "@angular/core";
import {Router} from "@angular/router-deprecated";
import {Grocery} from "../../shared/grocery/grocery";
import {GroceryListService} from "../../shared/grocery/grocery-list.service";
import {Config} from "../../shared/config";
import {ActivityIndicator} from "../../components/activity-indicator.component";
import {GroceryList} from "./grocery-list.component";

@Component({
  selector: "list",
  directives: [ActivityIndicator, GroceryList],
  templateUrl: "./app/pages/list/list.html",
  styleUrls: ["./app/pages/list/list.css"],
  providers: [GroceryListService]
})
export class ListComponent implements OnInit {
  groceryList: Array<Grocery>;
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
    this._groceryListService.load()
      .subscribe(loadedGroceries => this.groceryList = loadedGroceries);
  }
  
  add() {
    if (this.grocery.trim() === "") {
      alert("Enter a grocery item");
      return;
    }

    // Call the store to add
  }
}
