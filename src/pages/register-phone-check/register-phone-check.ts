import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TranslateService } from '@ngx-translate/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

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

  form: FormGroup;
  isReady: boolean;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public translate: TranslateService,
    public formBuilder: FormBuilder
  ) {
    this.form = formBuilder.group({
      code: ['', Validators.required]
    })
    this.form.valueChanges.subscribe((v) => {
      this.isReady = this.form.valid;
    })
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
