import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

import { EspecialidadModalPage } from '../modales/especialidad-modal/especialidad-modal.page';
import { RestService } from '../services/rest.service';




@Component({
  selector: 'app-especialidades',
  templateUrl: './especialidades.page.html',
  styleUrls: ['./especialidades.page.scss'],
})
export class EspecialidadesPage implements OnInit {

  session; 
  especialidad_lista = [];
  constructor(
    private modalController : ModalController,
    private restService : RestService,
  ) { 
  this.cargar_especialidades();

  }

  ngOnInit() {
  }

  async crear_especialidad(){
    const modal = await this.modalController.create({
      component: EspecialidadModalPage
    });
    modal.onDidDismiss().then((data) => {

    });
    return await modal.present();
  }

  cargar_especialidades(){
    this.restService.do_get("especialidad/api/especialidad").subscribe(data =>{
      this.especialidad_lista = data.data
    })
  }


  async especialidad_seleccionada(_especialidad){
    const modal = await this.modalController.create({
      component: EspecialidadModalPage,
      componentProps : {
        "selected_especialidad" : _especialidad
      }
    });
    modal.onDidDismiss().then((data) => {

    });
    return await modal.present();
  }
}
