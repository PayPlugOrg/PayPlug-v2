import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RegisterCardReminderPage } from './register-card-reminder';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    RegisterCardReminderPage,
  ],
  imports: [
    IonicPageModule.forChild(RegisterCardReminderPage),
    TranslateModule.forChild()
  ],
})
export class RegisterCardReminderPageModule {}
