import {Component, OnInit} from '@angular/core';
import {HttpService} from './http.service';
import {User} from './user';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {
    title = 'Dashboard';

    constructor() {
    }

    ngOnInit() {

    }

}
