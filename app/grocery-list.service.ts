import {Injectable} from "angular2/core";
import {Http, Headers} from "angular2/http";
import {Config} from "./config";
import {Grocery} from "./grocery";

declare var fetch: Function;

@Injectable()
export class GroceryListService {
  constructor(private _http: Http) {}

  load() {
    var headers = new Headers();
    headers.append("Authorization", "Bearer " + Config.token);

    return this._http.get(Config.apiUrl + "Groceries", {
      headers: headers
    })
    .map(res => res.json())
    .map((data) => {
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
