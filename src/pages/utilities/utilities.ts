import { Component } from "@angular/core";
import {
  IonicPage,
  NavController,
  NavParams,
  ViewController
} from "ionic-angular";

/**
 * Generated class for the UtilitiesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-utilities",
  templateUrl: "utilities.html"
})
export class UtilitiesPage {
  partners: any[];
  editButton: string = "ALTERAR";
  editing: boolean = false;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public viewCtrl: ViewController
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

  toggleEdit() {
    this.editing = !this.editing;
    if (this.editing) {
      this.editButton = "FEITO";
    } else {
      this.editButton = "ALTERAR";
    }
  }

  reorderArray(array: any[], indexes: { from: number; to: number }): any[] {
    const element = array[indexes.from];
    array.splice(indexes.from, 1);
    array.splice(indexes.to, 0, element);
    return array;
  }

  reorderData(indexes: any) {
    this.partners = this.reorderArray(this.partners, indexes);
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }
}
