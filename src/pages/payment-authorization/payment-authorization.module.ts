import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PaymentAuthorizationPage } from './payment-authorization';

@NgModule({
  declarations: [
    PaymentAuthorizationPage,
  ],
  imports: [
    IonicPageModule.forChild(PaymentAuthorizationPage),
  ],
})
export class PaymentAuthorizationPageModule {}
