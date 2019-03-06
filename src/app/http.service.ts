import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { map } from "rxjs/operators";
const httpOptions = {
  headers: new HttpHeaders({
    // "Content-Type": "application/json",
    // "Access-Control-Allow-Origin": "*"
  })
};
@Injectable({
  providedIn: "root"
})
export class HttpService {
  url = "https://randomuser.me/api/?nat=us&results=";
  count;
  serverUrl;
  constructor(private _http: HttpClient) {}

  getUsers(count: number = 10) {
    this.count = count.toString() || "10";
    this.serverUrl = this.url + this.count;
    return this._http.get(this.serverUrl, httpOptions).pipe(map(data => data));
  }
}
