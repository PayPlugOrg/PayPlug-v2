import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';

/**
 * Generated class for the RegisterCardReminderPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register-card-reminder',
  templateUrl: 'register-card-reminder.html',
})
export class RegisterCardReminderPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterCardReminderPage');
  }

  next(page) {
    if (!page) {
      page = HomePage;
      this.navCtrl.setRoot(page, { didLogin: 'savio' }, {
        animate: true,
        direction: 'forward'
      });
    } else {
      this.navCtrl.push(page, { didLogin: 'savio' }, {
        animate: true,
        direction: 'forward'
      });
    }
  }

}
