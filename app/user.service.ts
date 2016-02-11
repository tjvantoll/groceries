import {Injectable} from "angular2/core";
import {User} from "./user";
import {Config} from "./config";

@Injectable()
export class UserService {
  login(user: User) {
    return fetch(Config.apiUrl + "oauth/token", {
      method: "POST",
      body: JSON.stringify({
        username: user.email,
        password: user.password,
        grant_type: "password"
      }),
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then(handleErrors)
    .then(response => {
      return response.json();
    }).then(data => {
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
