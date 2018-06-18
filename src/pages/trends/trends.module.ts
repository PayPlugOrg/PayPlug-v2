import { NgModule } from "@angular/core";
import { IonicPageModule } from "ionic-angular";
import { TrendsPage } from "./trends";
import { ComponentsModule } from "../../components/components.module";

@NgModule({
  declarations: [TrendsPage],
  imports: [IonicPageModule.forChild(TrendsPage), ComponentsModule]
})
export class TrendsPageModule {}
