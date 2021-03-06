import { Component } from "@angular/core";
import { ViewChild } from "@angular/core";
import { Slides, NavController, AlertController } from "ionic-angular";
import { StorePage } from "../../../pages/store/store";
import { StoreProvider } from "../../../providers/store/store";

/**
 * Generated class for the OffersComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: "offers",
  templateUrl: "offers.html"
})
export class OffersComponent {
  text: string;
  @ViewChild(Slides) slides: Slides;
  hotOffers: any;

  constructor(
    public navCtrl: NavController,
    public stores: StoreProvider,
    public alertCtrl: AlertController
  ) {
    this.hotOffers = this.stores.getHotOffers();
  }

  goToSlide() {
    this.slides.slideTo(2, 500);
  }

  open(page, store) {
    this.navCtrl.push(page, { store }, { direction: "forward", animate: true });
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
}
