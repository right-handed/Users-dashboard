import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';

import {AppComponent} from './app.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {StatsComponent} from './stats/stats.component';

import {HttpClientModule} from '@angular/common/http';

@NgModule({
    declarations: [AppComponent, DashboardComponent, StatsComponent],
    imports: [BrowserModule, AppRoutingModule, HttpClientModule],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
