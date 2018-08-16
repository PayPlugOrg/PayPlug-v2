import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { CardManagementPage } from "../card-management/card-management";
import { HomePage } from "../home/home";

/**
 * Generated class for the WalletPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-wallet",
  templateUrl: "wallet.html"
})
export class WalletPage {
  items: Array<{ title: string; component: any; image: any }>;
  firstName: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.firstName = localStorage.getItem("firstname");
    this.items = [
      {
        title: "Saldo",
        image: "assets/imgs/icones-carteira-01.svg",
        component: "BalancePage"
      },
      {
        title: "Cartões",
        image: "assets/imgs/icones-carteira-01.svg",
        component: "CardManagementPage"
      },
      {
        title: "Extrato",
        image: "assets/imgs/icones-carteira-01.svg",
        component: "ReportPage"
      },
      {
        title: "Cupons",
        image: "assets/imgs/icones-carteira-01.svg",
        component: "TicketPage"
      },
      {
        title: "Likes",
        image: "assets/imgs/icones-carteira-01.svg",
        component: "LikesPage"
      }
    ];
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad WalletPage");
  }

  open(page) {
    this.navCtrl.push(
      page,
      {},
      {
        animate: true,
        direction: "forward"
      }
    );
  }
}
