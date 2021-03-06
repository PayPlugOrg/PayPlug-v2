import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TranslateService } from '@ngx-translate/core';

/**
 * Generated class for the RegisterBusinessPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register-business',
  templateUrl: 'register-business.html',
})
export class RegisterBusinessPage {

  constructor(public navCtrl: NavController, 
    public navParams: NavParams
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterBusinessPage');
  }

  next(page) {
    this.navCtrl.push(page, {}, {
      animate: true,
      direction: 'forward'
    });
  }

}
