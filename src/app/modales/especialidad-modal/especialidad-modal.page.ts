import { Component, OnInit, Input } from '@angular/core';
import {FormGroup,FormControl,FormBuilder,Validators} from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { RestService } from '../../services/rest.service';
import { ToastController } from '@ionic/angular';
import { NgZone } from '@angular/core';

@Component({
  selector: 'app-especialidad-modal',
  templateUrl: './especialidad-modal.page.html',
  styleUrls: ['./especialidad-modal.page.scss'],
})
export class EspecialidadModalPage implements OnInit {

  form_sent = false;
  public especialidadForm : FormGroup;
  @Input() especialidad_seleccionada : any;

  constructor(
    private modalCtrl : ModalController,
    private restService : RestService,
    public toastController: ToastController,
    private formBuilder : FormBuilder,
    private zone: NgZone,


  ) { 
    this.especialidadForm = this.formBuilder.group({
      pName: new FormControl("",Validators.compose([Validators.required])),
    })

  }

  ngOnInit() {
    if(this.especialidad_seleccionada){
      this.especialidadForm.setValue({
        pName : this.especialidad_seleccionada.nombre_especialidad
      })
    }
  }

  guardar_especialidad(){
    this.form_sent = true;
    if(this.especialidadForm.invalid){
      return; 
    }else{
      if(this.especialidad_seleccionada){
        var _id = this.especialidad_seleccionada.id_especialidad;
        this.restService.put_method("especialidad/Api/especialidad/eId/"+_id,this.especialidadForm.value).subscribe( data => {
          if(data.status == 200){
            this.show_toast();
          }else{
            this.show_toast();
          }
        });
      }else{
        this.restService.post_method("especialidad/Api/especialidad",this.especialidadForm.value).subscribe( data => {
          if(data.status == 200){
            this.show_toast();
          }else{
            this.show_toast();
          }
        });
      }

    }
  }

  async show_toast() {
    const toast = await this.toastController.create({
      position: 'bottom',
      buttons: [
        {
          text: 'Información Guardada',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    await toast.present();

    const { role } = await toast.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }

  dismiss() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalCtrl.dismiss({
      'dismissed': true
    });
    this.refresh();
  }

  refresh() {
      location.reload();    
  }

}
