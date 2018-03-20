import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RegisterBusinessPage } from './register-business';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    RegisterBusinessPage,
  ],
  imports: [
    IonicPageModule.forChild(RegisterBusinessPage),
    TranslateModule.forChild()
  ],
})
export class RegisterBusinessPageModule {}
