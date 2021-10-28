import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EspecialidadesPageRoutingModule } from './especialidades-routing.module';
import { EspecialidadModalPageModule } from '../modales/especialidad-modal/especialidad-modal.module';

import { EspecialidadesPage } from './especialidades.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EspecialidadesPageRoutingModule,
    EspecialidadModalPageModule
  ],
  declarations: [EspecialidadesPage]
})
export class EspecialidadesPageModule {}
