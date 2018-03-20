import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TranslateService } from '@ngx-translate/core';

/**
 * Generated class for the RegisterPhoneCheckPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register-phone-check',
  templateUrl: 'register-phone-check.html',
})
export class RegisterPhoneCheckPage {

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public translate: TranslateService,
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPhoneCheckPage');
  }

  reSendSms() {
    console.log('do something to sms resend');
  }

  confirm() {
    console.log('do somenthing to confirm the sms check');
    this.navCtrl.push('RegisterOptionsPage', {}, {
      animate: true,
      direction: 'forward'
    });
  }

}
