import { NgModule } from "@angular/core";
import { FooterComponent } from "./footer/footer";
import { IonicModule } from "ionic-angular";
import { MapComponent } from './map/map';
import { SimpleHeaderComponent } from './simple-header/simple-header';
@NgModule({
  declarations: [FooterComponent,
    MapComponent,
    SimpleHeaderComponent],
  imports: [IonicModule],
  exports: [FooterComponent,
    MapComponent,
    SimpleHeaderComponent]
})
export class ComponentsModule {}
