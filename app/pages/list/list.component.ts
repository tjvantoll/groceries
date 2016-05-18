import {Component, OnInit} from "@angular/core";
import {Router} from "@angular/router-deprecated";
import {Grocery} from "../../shared/grocery/grocery";
import {GroceryListService} from "../../shared/grocery/grocery-list.service";
import {Config} from "../../shared/config";

@Component({
  selector: "list",
  template:` 
    <ul>
      <li>
        <h1>Add a Grocery Item</h1> 
      </li>
      <li>
        <input [(ngModel)]="grocery">
        <button (click)="add()">Add</button>
        <hr> 
      </li>
      <li *ngFor="let grocery of groceryList">
        {{grocery.name}}
        <button class="delete" (click)="delete(grocery)">x</button>
      </li>
     </ul>
  `,
  styles: [`
    input {
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
    this._groceryListService.deleteForever(grocery)
      .subscribe(() => {
        var index = this.groceryList.indexOf(grocery);
        this.groceryList.splice(index, 1);
      });
  }
}
