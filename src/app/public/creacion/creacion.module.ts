import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';


import { CreacionPageRoutingModule } from './creacion-routing.module';

import { CreacionPage } from './creacion.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreacionPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [CreacionPage]
})
export class CreacionPageModule {}
