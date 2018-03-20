import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RegisterOptionsPage } from './register-options';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    RegisterOptionsPage,
  ],
  imports: [
    IonicPageModule.forChild(RegisterOptionsPage),
    TranslateModule.forChild()
  ],
})
export class RegisterOptionsPageModule {}
