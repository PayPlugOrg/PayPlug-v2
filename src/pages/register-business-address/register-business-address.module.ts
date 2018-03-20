import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RegisterBusinessAddressPage } from './register-business-address';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    RegisterBusinessAddressPage,
  ],
  imports: [
    IonicPageModule.forChild(RegisterBusinessAddressPage),
    TranslateModule.forChild()
  ],
})
export class RegisterBusinessAddressPageModule {}
