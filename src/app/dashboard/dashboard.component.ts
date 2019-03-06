import { Component, OnInit } from "@angular/core";
import { HttpService } from "../http.service";
import { User } from "../user";

class httpResponse {
  results: User[];
}

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.less"]
})
export class DashboardComponent implements OnInit {
  users: User[] = [];
  stringified: string;
  selectedUser: User;
  count: number = 20;

  constructor(private _httpService: HttpService) {}

  ngOnInit() {
    if (sessionStorage.getItem("users") != null) {
      console.log("from storage");
      this.users = JSON.parse(sessionStorage.getItem("users"));
      console.log(this.users);
    } else {
      console.log("new request");
      this.getUsers();
    }
  }

  onSelect(user: User) {
    if (this.selectedUser === user) {
      this.selectedUser = undefined;
    } else {
      this.selectedUser = user;
    }
  }

  newList() {
    console.log("new request");
    this.getUsers();
    console.log(this.users);
  }
  clearList() {
    this.users = [];
    sessionStorage.setItem("users", null);
  }

  getUsers() {
    this._httpService.getUsers(this.count).subscribe((res: httpResponse) => {
      this.users = res.results.map(response => {
        return response;
      });
      this.stringified = JSON.stringify(this.users);
      sessionStorage.setItem("users", this.stringified);
    });
  }
}
