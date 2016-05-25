import {Component, Input, OnChanges, Pipe, PipeTransform, SimpleChange} from "@angular/core";
import {Grocery} from "../../shared/grocery/grocery";

@Pipe({
  name: "deleted"
})
export class DeletedPipe implements PipeTransform {
  transform(groceries: Array<Grocery>, deleted) {
    if (!groceries) return;
    return groceries.filter((grocery) => {
      return grocery.deleted == deleted;
    });
  }
}

@Component({
  selector: "grocery-list",
  inputs: ["showDeleted", "groceries"],
  template: `
    <ul>
      <li *ngFor="let grocery of groceries | deleted:showDeleted">
        <img
          *ngIf="!grocery.deleted"
          [src]="grocery.done ? './app/assets/images/checked.png' : './app/assets/images/unchecked.png'"
          (click)="toggleDone(grocery)">
        <span
          *ngIf="!grocery.deleted"
          [class.done]="grocery.done">{{ grocery.name }}</span>
        <button
          *ngIf="!grocery.deleted"
          (click)="delete(grocery)">&times;</button>

        <img
          *ngIf="grocery.deleted"
          [src]="grocery.done ? './app/assets/images/selected.png' : './app/assets/images/nonselected.png'"
          (click)="toggleDone(grocery)">
        <span
          *ngIf="grocery.deleted">{{ grocery.name }}</span>
      </li>
    </ul>
  `,
  styleUrls: ["./app/pages/list/grocery-list.css"],
  pipes: [DeletedPipe]
})
export class GroceryList {
  @Input() showDeleted: boolean;
  @Input() groceries: Array<Grocery>;

  toggleDone(grocery: Grocery) {
    grocery.done = !grocery.done;
  }

  delete(grocery: Grocery) {
    let index = this.groceries.indexOf(grocery);
    grocery.deleted = true;
  }
}
