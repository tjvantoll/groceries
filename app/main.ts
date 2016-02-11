import {bootstrap}    from 'angular2/platform/browser';
// import {AppComponent} from './heroes/app.component';
import {AppComponent} from './groceries/app.component';
import {ROUTER_PROVIDERS} from "angular2/router";

bootstrap(AppComponent, [ROUTER_PROVIDERS]);
