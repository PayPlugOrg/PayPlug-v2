import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PasswordCreatePage } from './password-create';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    PasswordCreatePage,
  ],
  imports: [
    IonicPageModule.forChild(PasswordCreatePage),
    TranslateModule.forChild()
  ],
})
export class PasswordCreatePageModule {}
