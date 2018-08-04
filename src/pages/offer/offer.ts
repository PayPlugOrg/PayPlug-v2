import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";

/**
 * Generated class for the OfferPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-offer",
  templateUrl: "offer.html"
})
export class OfferPage {
  store: any;
  offer: any;
  show: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.store = this.navParams.get("store");
    this.offer = this.navParams.get("offer");
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad OfferPage");
  }
}
