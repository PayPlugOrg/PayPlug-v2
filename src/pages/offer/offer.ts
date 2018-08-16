import { Component } from "@angular/core";
import {
  IonicPage,
  NavController,
  NavParams,
  AlertController
} from "ionic-angular";

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
  show = "timeLeft";
  firstName: string;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public alertCtrl: AlertController
  ) {
    this.firstName = localStorage.getItem("firstname");
    this.store = this.navParams.get("store");
    this.offer = this.navParams.get("offer");
  }

  addCart(item) {
    const alert = this.alertCtrl.create({
      title: "CARRINHO",
      message: `VOCÊ ADICIONOU ESTA OFERTA AO CARRINHO`,
      buttons: ["OK"]
    });
    alert.present();
  }

  open(page) {
    this.navCtrl.push(
      page,
      {},
      {
        animate: true
      }
    );
  }
}
