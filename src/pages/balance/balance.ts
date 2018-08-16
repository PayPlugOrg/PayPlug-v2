import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";

/**
 * Generated class for the BalancePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-balance",
  templateUrl: "balance.html"
})
export class BalancePage {
  firstName: string;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.firstName = localStorage.getItem("firstname");
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad BalancePage");
  }

  open(page) {
    this.navCtrl.push(page, {}, { direction: "forward", animate: true });
  }
}
