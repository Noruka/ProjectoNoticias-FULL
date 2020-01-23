import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ActualidadPageRoutingModule } from './actualidad-routing.module';

import { ActualidadPage } from './actualidad.page';
import {ComponentsModule} from "../../../components/components.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ActualidadPageRoutingModule,
    ComponentsModule
  ],
  declarations: [ActualidadPage]
})
export class ActualidadPageModule {}
