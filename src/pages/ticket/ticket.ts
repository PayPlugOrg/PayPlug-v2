import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";

/**
 * Generated class for the TicketPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-ticket",
  templateUrl: "ticket.html"
})
export class TicketPage {
  firstName: string;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.firstName = localStorage.getItem("firstname");
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
