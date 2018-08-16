import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";

/**
 * Generated class for the MessagesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-messages",
  templateUrl: "messages.html"
})
export class MessagesPage {
  message: boolean;
  messages: any;
  firstName: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.firstName = localStorage.getItem("firstname");
    this.messages = [
      {
        title: "TÍTULO DA MENSAGEM",
        content:
          "Pariatur cillum non occaecat esse in sunt ullamco Lorem sit velit. Nulla cupidatat non eu nostrud."
      },
      {
        title: "TÍTULO DA MENSAGEM",
        content:
          "Pariatur cillum non occaecat esse in sunt ullamco Lorem sit velit. Nulla cupidatat non eu nostrud."
      },
      {
        title: "TÍTULO DA MENSAGEM",
        content:
          "Pariatur cillum non occaecat esse in sunt ullamco Lorem sit velit. Nulla cupidatat non eu nostrud."
      },
      {
        title: "TÍTULO DA MENSAGEM",
        content:
          "Pariatur cillum non occaecat esse in sunt ullamco Lorem sit velit. Nulla cupidatat non eu nostrud."
      }
    ];
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad MessagesPage");
  }

  ngAfterContentInit() {
    this.message = false;
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
