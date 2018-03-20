import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the RegisterBusinessAddressPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register-business-address',
  templateUrl: 'register-business-address.html',
})
export class RegisterBusinessAddressPage {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterBusinessAddressPage');
  }

  next(page) {
    this.navCtrl.push(page, {}, {
      animate: true,
      direction: 'forward'
    });
  }

}
