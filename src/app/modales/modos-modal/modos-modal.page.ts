import { Component, OnInit, Input} from '@angular/core';
import { ModalController } from '@ionic/angular';
import {FormGroup,FormControl,FormBuilder,Validators} from '@angular/forms';
import { RestService } from '../../services/rest.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-modos-modal',
  templateUrl: './modos-modal.page.html',
  styleUrls: ['./modos-modal.page.scss'],
})
export class ModosModalPage implements OnInit {

  form_sent = false;
  public modoForm : FormGroup;
  @Input() material_seleccionado : any;

  constructor(
    private modalCtrl : ModalController,
    private restService : RestService,
    public toastController: ToastController,
    private formBuilder : FormBuilder,
  ) { 
    this.modoForm = this.formBuilder.group({
      pName: new FormControl("",Validators.compose([Validators.required])),
    })

  }

  ngOnInit() {
    if(this.material_seleccionado){
      this.modoForm.setValue({
        pName : this.material_seleccionado.link_clase
      })
    }
  }

  guardar_modo(){
    this.form_sent = true;
    if(this.modoForm.invalid){
      return; 
    }else{
      if(this.material_seleccionado){
        var _id = this.material_seleccionado.id_material;
        this.restService.put_method("material/Api/material/mId/"+_id,this.modoForm.value).subscribe( data => {
          if(data.status == 200){
            this.show_toast();
          }else{
            this.show_toast();
          }
        });
      }else{
        this.restService.post_method("material/Api/material",this.modoForm.value).subscribe( data => {
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
  }

  refresh() {

}
}
