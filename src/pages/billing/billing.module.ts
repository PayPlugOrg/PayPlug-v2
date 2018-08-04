import { NgModule } from "@angular/core";
import { IonicPageModule } from "ionic-angular";
import { BillingPage } from "./billing";
import { NgxQRCodeModule } from "ngx-qrcode2";
import StringMask from "string-mask";
import { ComponentsModule } from "../../components/components.module";

@NgModule({
  declarations: [BillingPage],
  imports: [
    IonicPageModule.forChild(BillingPage),
    NgxQRCodeModule,
    ComponentsModule
  ]
})
export class BillingPageModule {}
