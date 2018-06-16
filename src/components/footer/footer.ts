import { Component } from "@angular/core";
import { NavController, ModalController } from "ionic-angular";

/**
 * Generated class for the FooterComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: "footer",
  templateUrl: "footer.html"
})
export class FooterComponent {
  text: string;

  constructor(
    public navCtrl: NavController,
    public modalCtrl: ModalController
  ) {}

  open(page) {
    let cardModal = this.modalCtrl.create(page);
    cardModal.onDidDismiss(data => {
      // console.log(data);
    });
    cardModal.present();
  }
}
