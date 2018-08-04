import { Component, ViewChild } from "@angular/core";
import { NavController, ModalController, Slides } from "ionic-angular";

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
  partners: any[];
  @ViewChild(Slides) slides: Slides;

  constructor(
    public navCtrl: NavController,
    public modalCtrl: ModalController
  ) {
    this.partners = [
      {
        partner: "Abrinq",
        info1: "Phoria",
        info2: "Volition",
        icon: "assets/imgs/utilities/icones_utilitario-abrinq.svg"
      },
      {
        partner: "Algar",
        info1: "Adele",
        info2: "25",
        icon: "assets/imgs/utilities/icones_utilitario-algar.svg"
      },
      {
        partner: "Balaroti",
        info1: "Queen",
        info2: "A Night at the Opera",
        icon: "assets/imgs/utilities/icones_utilitario-balaroti.svg"
      },
      {
        partner: "Burguer King",
        info1: "Journey",
        info2: "Escape",
        icon: "assets/imgs/utilities/icones_utilitario-bk.svg"
      },
      {
        partner: "Bradesco",
        info1: "Nirvana",
        info2: "Nevermind",
        icon: "assets/imgs/utilities/icones_utilitario-bradesco.svg"
      },
      {
        partner: "Imax",
        info1: "The Beatles",
        info2: "Magical Mystery Tour",
        icon: "assets/imgs/utilities/icones_utilitario-imax.svg"
      },
      {
        partner: "Madero",
        info1: "The Eagles",
        info2: "Hotel California",
        icon: "assets/imgs/utilities/icones_utilitario-madero.svg"
      },
      {
        partner: "Outback",
        info1: "Nine Inch Nails",
        info2: "With Teeth",
        icon: "assets/imgs/utilities/icones_utilitario-outback.svg"
      },
      {
        partner: "Renault",
        info1: "The Who",
        info2: "Who Are You",
        icon: "assets/imgs/utilities/icones_utilitario-renault.svg"
      },
      {
        partner: "Subway",
        info1: "The Who",
        info2: "Who Are You",
        icon: "assets/imgs/utilities/icones_utilitario-subway.svg"
      },
      {
        partner: "Uber",
        info1: "The Who",
        info2: "Who Are You",
        icon: "assets/imgs/utilities/icones_utilitario-uber.svg"
      },
      {
        partner: "Walmart",
        info1: "The Who",
        info2: "Who Are You",
        icon: "assets/imgs/utilities/icones_utilitario-walmart.svg"
      }
    ];
  }

  slideChanged(ev) {
    // console.log(ev);
    // console.log(this.slides.isEnd());
    // console.log();
    if (this.slides._activeIndex == 2) {
      this.slides.lockSwipeToNext(true);
    } else this.slides.lockSwipeToNext(false);
  }

  open(page) {
    let cardModal = this.modalCtrl.create(page);
    cardModal.onDidDismiss(data => {
      // console.log(data);
    });
    cardModal.present();
  }
}
