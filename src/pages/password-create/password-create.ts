import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';

/**
 * Generated class for the PasswordCreatePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-password-create',
  templateUrl: 'password-create.html',
})
export class PasswordCreatePage {

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PasswordCreatePage');
  }

  createPassword() {
    this.navCtrl.push('RegisterCardReminderPage', {}, {
      animate: true,
      direction: 'forward'
    });
  }

}
