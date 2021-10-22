import { Component, OnInit } from '@angular/core';
import { RestService } from '../../services/rest.service';
import {FormControl,FormGroup,FormBuilder,Validator,Validators} from "@angular/forms";
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-creacion',
  templateUrl: './creacion.page.html',
  styleUrls: ['./creacion.page.scss'],
})

export class CreacionPage{
  form_sent = false;
  public creacionForm : FormGroup;
  constructor(
    private restService : RestService,
    private formBuilder :  FormBuilder,
    public toastController: ToastController,
  ) { 


    this.creacionForm = this.formBuilder.group({
    pName: new FormControl("",Validators.compose([Validators.required])),
    pApellido1: new FormControl("",Validators.compose([Validators.required])),
    pApellido2: new FormControl("",Validators.compose([Validators.required])),
    pEdad: new FormControl("",Validators.compose([Validators.required])),
    pPais: new FormControl("",Validators.compose([Validators.required])),
    pEmail: new FormControl("",Validators.compose([Validators.required])),
    pPassword: new FormControl("",Validators.compose([Validators.required])),
    pPrivilegios: new FormControl("",Validators.compose([Validators.required])),
    })
  }



  async guardar_usuario(){
    this.form_sent = true;
    if(this.creacionForm.valid){
      console.info(this.creacionForm.value);
      this.restService.post_method("usuario/Api/usuario",this.creacionForm.value).subscribe(result => {
        this.guardado();
      })
    }
  }

  async guardado() {
    const toast = await this.toastController.create({
      message: 'Cuenta Creada.',
      duration: 2000
    });
    toast.present();
  }

  close_sess(){
    this.restService.cambio();
  }

}
