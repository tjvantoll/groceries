import {Injectable} from "angular2/core";
import {Config} from "./config";
import {Grocery} from "./grocery";

@Injectable()
export class GroceryListService {
  load() {
    return fetch(Config.apiUrl + "Groceries", {
      headers: {
        "Authorization": "Bearer " + Config.token
      }
    })
    .then(handleErrors)
    .then((response) => {
      return response.json();
    }).then(function(data) {
      var groceryList = [];
      data.Result.forEach((grocery) => {
        groceryList.push(new Grocery(grocery.Id, grocery.Name));
      });
      return groceryList;
    });
  }
  
  add(name: string) {
    return fetch(Config.apiUrl + "Groceries", {
      method: "POST",
      body: JSON.stringify({
          Name: name
      }),
      headers: {
        "Authorization": "Bearer " + Config.token,
        "Content-Type": "application/json"
      }
    })
    .then(handleErrors)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      return new Grocery(data.Result.Id, name);
    });
  }
  
  delete(id: string) {
    return fetch(Config.apiUrl + "Groceries/" + id, {
      method: "DELETE",
      headers: {
        "Authorization": "Bearer " + Config.token,
        "Content-Type": "application/json"
      }
    })
    .then(handleErrors)
    .then((response) => {
      return response.json();
    });
  }
}

function handleErrors(response) {
  if (!response.ok) {
    console.log(JSON.stringify(response));
    throw Error(response.statusText);
  }
  return response;
}
