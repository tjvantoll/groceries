import {Component, EventEmitter, Input, OnChanges, OnInit, Output, Pipe, PipeTransform, SimpleChange} from "@angular/core";
import {Grocery} from "../../shared/grocery/grocery";
import {GroceryStore} from "../../shared/grocery/grocery-list.service";
import {Observable, BehaviorSubject} from "rxjs/Rx";

@Component({
  selector: "grocery-list",
  inputs: ["showDeleted", "groceries"],
  template: `
    <ul *ngIf="!showDeleted">
      <li *ngFor="let grocery of store.items | async">
        <img
          [src]="grocery.done ? './app/assets/images/checked.png' : './app/assets/images/unchecked.png'"
          (click)="toggleDone(grocery)">
        <span
          [class.done]="grocery.done">{{ grocery.name }}</span>
        <button
          (click)="delete(grocery)">&times;</button>
      </li>
    </ul>

    <ul *ngIf="showDeleted">
      <li *ngFor="let grocery of store.deletedItems | async">
        <img
          [src]="grocery.done ? './app/assets/images/selected.png' : './app/assets/images/nonselected.png'"
          (click)="toggleDone(grocery)">
        <span>{{ grocery.name }}</span>
      </li>
    </ul>
  `,
  styleUrls: ["./app/pages/list/grocery-list.css"]
})
export class GroceryList {
  @Input() showDeleted: boolean;
  @Output() loaded = new EventEmitter();

  constructor(private store: GroceryStore) {}

  ngOnInit() {
    this.store.load()
      .subscribe(() => this.loaded.emit("loaded"));
  }

  toggleDone(grocery: Grocery) {
    if (grocery.deleted) {
      grocery.done = !grocery.done;
      return;
    }

    this.store.toggleDoneFlag(grocery)
      .subscribe(
        () => {},
        () => { alert("An error occurred managing your grocery list") }
      );
  }

  delete(grocery: Grocery) {
    this.store.setDeleteFlag(grocery)
      .subscribe(
        () => {},
        () => alert("An error occurred while deleting an item from your list.")
      );
  }
}
