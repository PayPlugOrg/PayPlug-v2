import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';

/**
 * Generated class for the CardCreatePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-card-create',
  templateUrl: 'card-create.html',
})
export class CardCreatePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CardCreatePage');
  }

  next(page) {
    if(!page) {
      page = HomePage;
    }
    this.navCtrl.setRoot(page, {}, {
      animate: true,
      direction: 'forward'
    });
  }

}
