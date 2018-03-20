import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TranslateService } from '@ngx-translate/core';

/**
 * Generated class for the RegisterOptionsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register-options',
  templateUrl: 'register-options.html',
})
export class RegisterOptionsPage {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public translate: TranslateService,
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterOptionsPage');
  }

  authFacebook() {
    console.log('do somenthing to authentication with Facebook');
  }

  authGoogle() {
    console.log('do somenthing to authentication with Google');
  }

  next(page) {
    this.navCtrl.push(page, {}, {
      animate: true,
      direction: 'forward'
    });
  }
}
