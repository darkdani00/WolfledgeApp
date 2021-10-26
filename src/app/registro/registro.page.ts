import { Component,OnInit, Input } from '@angular/core';
import { RestService } from '../services/rest.service';
import { ToastController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import {FormGroup,FormControl,FormBuilder,Validators} from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage{
  public claseForm : FormGroup;
  form_sent = false;
  modo_lista = [];
  especialidad_lista = [];
  profesores_lista = [];
  session;
  @Input() clase_seleccionada : any;

  constructor(
    private restService : RestService,
    private formBuilder : FormBuilder,
    private toastController : ToastController,
    private alertController : AlertController,
  ) { 
    this.claseForm = this.formBuilder.group({
      pDesc: new FormControl("",Validators.compose([Validators.required])),
      pHoraInicio: new FormControl("",Validators.compose([Validators.required])),
      pHoraFinal: new FormControl("",Validators.compose([Validators.required])),
      pFechaInicio: new FormControl("",Validators.compose([Validators.required])),
      pFechaFin: new FormControl("",Validators.compose([Validators.required])),
      pEsp: new FormControl("",Validators.compose([Validators.required])),
      pMaterial: new FormControl("",Validators.compose([Validators.required])),
      pProfe: new FormControl("",Validators.compose([Validators.required])),
      })

    this.restService.authUserData().then(result=>{
      this.session = result;
      console.log(this.session);
  })
  this.load_especialidades();
  this.load_modos();
  this.load_profesores();
  }

  ngOnInit() {
  }

  load_especialidades(){
    this.restService.do_get("especialidad/api/especialidad").subscribe( data =>{
      this.especialidad_lista  = data.data;
    });
  }

  load_modos(){
    this.restService.do_get("material/api/material").subscribe( data =>{
      this.modo_lista  = data.data;
    });
  }

  load_profesores(){
    this.restService.do_get("clase/api/profesores").subscribe( data =>{
      this.profesores_lista  = data.data;
    });
  }

  guardar_clase(){
    this.form_sent = true;
    if(this.claseForm.invalid){
      return; 
    }else{
      if(this.clase_seleccionada){
        var _id = this.clase_seleccionada.id_clase;
        this.restService.post_method("clase/Api/clase/cId/"+_id,this.claseForm.value).subscribe( data => {
          if(data.status == 200){
            this.show_toast(data.message,"dark");
          }else{
            this.show_toast(data.message,"error");
          }
        });
      }else{
        this.restService.post_method("clase/Api/clase",this.claseForm.value).subscribe( data => {
          if(data.status == 200){
            this.show_toast(data.message,"dark");
          }else{
            this.show_toast(data.message,"error");
          }
        });
      }

    }
  }
  
  profesor(){
    this.restService.authUserData();
  }



  async show_toast (_message,_color){
    const toast = await this.toastController.create({
      message: _message,
      duration: 2000,
      color : _color
    });
    toast.present();
  }
}
