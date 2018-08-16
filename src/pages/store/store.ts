import { Component } from "@angular/core";
import {
  IonicPage,
  NavController,
  NavParams,
  AlertController
} from "ionic-angular";
import { StoreProvider } from "../../providers/store/store";

/**
 * Generated class for the StorePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-store",
  templateUrl: "store.html"
})
export class StorePage {
  show = "offers";
  listOffers: any;
  store: any;
  firstName: string;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public alertCtrl: AlertController,
    public stores: StoreProvider
  ) {
    this.firstName = localStorage.getItem("firstname");
    this.store = this.stores.getStoreById(this.navParams.get("store"));
    this.listOffers = this.store["offers"];
  }

  addCart(item) {
    let message = "";
    if (item.cart === "cinza") {
      item.cart = "secondary";
      message = `VOCÊ ADICIONOU ESTA OFERTA AO CARRINHO`;
    } else {
      item.cart = "cinza";
      message = `VOCÊ REMOVEU ESTA OFERTA DO CARRINHO`;
    }
    const alert = this.alertCtrl.create({
      title: "CARRINHO",
      message: `${message}`,
      buttons: ["OK"]
    });
    alert.present();
  }

  like(item) {
    let message = "";
    if (item.like === "cinza") {
      item.like = "danger";
      message = `VOCÊ CURTIU ESTA OFERTA`;
    } else {
      item.like = "cinza";
      message = `VOCÊ DESCURTIU ESTA OFERTA`;
    }
    const alert = this.alertCtrl.create({
      title: "LIKE",
      subTitle: `<h3>${message}<h3>`,
      buttons: ["OK"]
    });
    alert.present();
  }

  showAlert(item) {
    const alert = this.alertCtrl.create({
      title: "TEMPO RESTANTE",
      subTitle: `<h1>${item.timeLeft}<h1>`,
      buttons: ["OK"]
    });
    alert.present();
  }

  openOffer(offer, store) {
    this.navCtrl.push(
      "OfferPage",
      { offer, store },
      {
        animate: true
      }
    );
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
