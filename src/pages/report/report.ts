import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";

/**
 * Generated class for the ReportPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-report",
  templateUrl: "report.html"
})
export class ReportPage {
  dates: any = [];
  cards: any = [];
  items: any = [];
  itemExpandHeight: number = 100;
  type: string = "dates";
  isAndroid: boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.dates = [
      { title: "ÚLTIMOS 5 DIAS", expanded: false },
      { title: "ÚLTIMOS 30 DIAS", expanded: false },
      { title: "MARÇO/2018", expanded: false },
      { title: "FEVEREIRO/2018", expanded: false }
    ];
    this.cards = [
      { title: "VISA ***999", expanded: false },
      { title: "VISA ***000", expanded: false },
      { title: "SODEXO REFEIÇÃO", expanded: false },
      { title: "PYPLUG", expanded: false }
    ];
    this.items = this.dates;
  }

  segmentChanged(ev) {
    console.log(ev);
    if (this.type == "dates") {
      this.items = this.dates;
    } else this.items = this.cards;
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

  expandItem(item) {
    if (this.type == "dates") {
      this.dates.map(listItem => {
        if (item == listItem) {
          listItem.expanded = !listItem.expanded;
        } else {
          listItem.expanded = false;
        }
        return listItem;
      });
    } else {
      this.cards.map(listItem => {
        if (item == listItem) {
          listItem.expanded = !listItem.expanded;
        } else {
          listItem.expanded = false;
        }
        return listItem;
      });
    }
  }
}
