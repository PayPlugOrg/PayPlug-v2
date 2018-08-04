import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import fakestores from "./fakestores";

/*
  Generated class for the StoreProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class StoreProvider {
  stores: any;
  constructor(public http: HttpClient) {
    this.stores = fakestores;
  }
  getHotOffers(): any {
    return this.stores.hotOffers;
  }

  getStoreById(id: any): any {
    let values = this.stores.stores.find(v => {
      return v.id === id;
    });
    return values;
  }
}
