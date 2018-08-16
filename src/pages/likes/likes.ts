import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";

/**
 * Generated class for the LikesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-likes",
  templateUrl: "likes.html"
})
export class LikesPage {
  likes: any;
  firstName: string;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.firstName = localStorage.getItem("firstname");
    this.likes = [
      {
        id: "1",
        estabelecimento: "restaurante do shopping iguatemi",
        descricao: "jantar para duas pessoas com sobremesa",
        from: "179,00",
        to: "129,90"
      }
    ];
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
