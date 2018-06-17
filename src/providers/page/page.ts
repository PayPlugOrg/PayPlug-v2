import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { NavController, App } from "ionic-angular";

/*
  Generated class for the PageProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class PageProvider {
  constructor(public app: App) {}

  open(page: any, params: any, direction: string): any {
    let nav = this.app.getActiveNav();
    nav.push(page, params, {
      animate: true,
      direction: direction
    });
  }
}
