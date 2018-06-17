import { NgModule } from "@angular/core";
import { IonicPageModule } from "ionic-angular";
import { CardPage } from "./card";
import { NgxQRCodeModule } from "ngx-qrcode2";
import { ComponentsModule } from "../../components/components.module";

@NgModule({
  declarations: [CardPage],
  imports: [
    IonicPageModule.forChild(CardPage),
    ComponentsModule,
    NgxQRCodeModule
  ]
})
export class CardPageModule {}
