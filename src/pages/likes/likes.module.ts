import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LikesPage } from './likes';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    LikesPage,
  ],
  imports: [
    IonicPageModule.forChild(LikesPage), ComponentsModule,
  ],
})
export class LikesPageModule {}
