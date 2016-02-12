import {Component, OnInit} from "angular2/core";
import {Router} from "angular2/router";
import {Grocery} from "../../shared/grocery/grocery";
import {GroceryListService} from "../../shared/grocery/grocery-list.service";
import {Config} from "../../shared/config";

@Component({
  selector: "list",
  template:`
    <input [(ngModel)]="grocery">
    <button (click)="add()">Add</button>
    <ul>
      <li *ngFor="#grocery of groceryList">
        {{grocery.name}}
        <button (click)="delete(grocery)">x</button>
      </li>
    </ul>
  `,
  styles: [`
    li {
      padding: 0.3em;
    }
  `],
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
  
  delete(grocery) {
    this._groceryListService.delete(grocery.id)
      .subscribe(() => {
        var index = this.groceryList.indexOf(grocery);
        this.groceryList.splice(index, 1);
      });
  }
}
