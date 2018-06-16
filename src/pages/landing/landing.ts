import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform, MenuController } from 'ionic-angular';
import { TranslateService } from '@ngx-translate/core';

/**
 * Generated class for the LandingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

export interface Slide {
  title: string;
  description: string;
  image: string;
  icone: string;
}

@IonicPage()
@Component({
  selector: 'page-landing',
  templateUrl: 'landing.html',
})
export class LandingPage {

  slides: Slide[];
  showSkip = true;
  dir: string = 'ltr';
  class: string = 'slide1';

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public platform: Platform,
    public translate: TranslateService,
    public menu: MenuController
  ) {
    this.dir = platform.dir();
    this.translate.get([
      "LANDING_TITLE",
      "LANDING_DESCRIPTION",
      "LANDING_BUTTON",
    ]).subscribe(
      (values) => {
        console.log('Loaded values', values);
        
      }
    )
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LandingPage');
  }

  startApp() {
    this.navCtrl.setRoot('LoginPage', {}, {
      animate: true,
      direction: 'forward'
    });
  }

  register() {
    this.navCtrl.push('RegisterPage', {}, {
      animate: true,
      direction: 'forward'
    });
  }
  
  registerPhone() {
    this.navCtrl.push('RegisterPhonePage', {}, {
      animate: true,
      direction: 'forward'
    });
  }

  onSlideChangeStart(slider) {
    this.showSkip = !slider.isEnd();
    if (this.slides[slider.getActiveIndex()]) {
      this.class = this.slides[slider.getActiveIndex()].image;
    }
  }

  ionViewDidEnter() {
    // the root left menu should be disabled on the tutorial page
    this.menu.enable(false);
  }

  ionViewWillLeave() {
    // enable the root left menu when leaving the tutorial page
    this.menu.enable(true);
  }

  next(page) {
    this.navCtrl.push(page, {}, {
      animate: true,
      direction: 'forward'
    });
  }

}
