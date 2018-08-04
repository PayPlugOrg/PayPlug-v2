import { NgModule } from "@angular/core";
import { IonicPageModule } from "ionic-angular";
import { OfferPage } from "./offer";
import { ComponentsModule } from "../../components/components.module";

@NgModule({
  declarations: [OfferPage],
  imports: [IonicPageModule.forChild(OfferPage), ComponentsModule]
})
export class OfferPageModule {}
