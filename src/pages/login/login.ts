import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  login() {
    this.navCtrl.push(HomePage, { didLogin: 'savio' }, {
      animate: true,
      direction: 'forward'
    })
  }

  register() {
    this.navCtrl.push('RegisterPage', {}, {
      animate: true,
      direction: 'forward'
    });
  }

  resetPassword() {
    this.navCtrl.push('ResetPasswordPage', {}, {
      animate: true,
      direction: 'forward'
    });
  }

}
