import {Injectable} from "angular2/core";
import {Http, Headers} from "angular2/http";
import {User} from "./user";
import {Config} from "./config";
import "rxjs/add/operator/map";

@Injectable()
export class UserService {
  constructor(private _http: Http) {}
  
  login(user: User) {
    var headers = new Headers();
    headers.append("Content-Type", "application/json");

    return this._http.post(
      Config.apiUrl + "oauth/token",
      JSON.stringify({
        username: user.email,
        password: user.password,
        grant_type: "password"
      }),
      { headers: headers }
    )
    .map(res => res.json())
    .subscribe((data) => {
      Config.token = data.Result.access_token;
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
