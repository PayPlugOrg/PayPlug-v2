import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LandingPage } from '../landing/landing';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  ionViewWillEnter() {
    var didLogin: boolean = false;
    if(!localStorage.getItem('didLogin')) {
      this.navCtrl.setRoot(LandingPage);
    }
  }

}
