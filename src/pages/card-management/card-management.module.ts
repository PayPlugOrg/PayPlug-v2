import { NgModule } from "@angular/core";
import { IonicPageModule } from "ionic-angular";
import { CardManagementPage } from "./card-management";
import { ComponentsModule } from "../../components/components.module";

@NgModule({
  declarations: [CardManagementPage],
  imports: [IonicPageModule.forChild(CardManagementPage), ComponentsModule]
})
export class CardManagementPageModule {}
