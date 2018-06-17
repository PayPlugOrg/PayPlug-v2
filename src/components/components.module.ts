import { NgModule } from "@angular/core";
import { FooterComponent } from "./footer/footer";
import { IonicModule } from "ionic-angular";
import { SimpleHeaderComponent } from "./simple-header/simple-header";
import { ExpandableComponent } from "./expandable/expandable";
import { OffersComponent } from "./home/offers/offers";
@NgModule({
  declarations: [
    FooterComponent,
    SimpleHeaderComponent,
    ExpandableComponent,
    OffersComponent
  ],
  imports: [IonicModule],
  exports: [
    FooterComponent,
    SimpleHeaderComponent,
    ExpandableComponent,
    OffersComponent
  ]
})
export class ComponentsModule {}
