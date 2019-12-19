import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { isNullOrUndefined } from 'util';
import { Go } from 'src/app/models/go';
import { Espacio } from 'src/app/models/espacio';
import { EspacioService } from 'src/app/services/espacio.service';
import { Usuario } from 'src/app/models/usuario';

@Component({
  selector: 'app-espacio-abm',
  templateUrl: './espacio-abm.component.html',
  styleUrls: ['./espacio-abm.component.scss']
})
export class EspacioAbmComponent implements OnInit {

  cargando:boolean = false;
  crear:boolean = true;
  private espacioActual:Go<Espacio>;
  private espacio:Go<Espacio>;
  private espacioForm: FormGroup;
  private usuario:Go<Usuario>;
  private allEspacios:Array<Go<Espacio>>;

  mensajeValidacion = {
    'Texto':{
      'required':'Se requiere un nombre',
      'minlength':'Debe tener 3 caracteres',
      'maxlength':'Debe tener 20 caracteres maximo',
      'maxlengthDescripcion':'Debe tener 200 caracteres maximo'
    }
  }


  constructor(
    private builder:FormBuilder,
    private router: Router,
    private espacioSv:EspacioService) 
  {
    this.espacioForm = this.builder.group(
      {
        Nombre: ['', Validators.compose(
          [Validators.required, 
            Validators.minLength(3),
            Validators.maxLength(20)])],

        Descripcion: ['', Validators.compose(
          [Validators.required, 
            Validators.minLength(3),
            Validators.maxLength(200)])]
      });
  }
  

  ngOnInit() {
    this.espacioActual = JSON.parse(sessionStorage.getItem("espacioActual"));
    this.usuario = JSON.parse(localStorage.getItem("usuario"));
    if(JSON.parse(sessionStorage.getItem("op")) == 2){
      this.crear = false;
      this.espacio = this.espacioActual;
      this.espacioForm.markAllAsTouched
      this.espacioForm.get("Nombre").setValue(this.espacio.Object.Nombre);
      this.espacioForm.get("Descripcion").setValue(this.espacio.Object.Descripcion);
    }else{
      this.espacio = {} as Go<Espacio>;
      this.espacio.Object = {} as Espacio;
      var url;
      if(isNullOrUndefined(this.espacio.Object.UrlEspacio)){
        url = this.espacioActual.Key;
      }
      else{
        url = this.espacioActual.Object.UrlEspacio + "/" + this.espacio.Key;
      }
      this.espacio.Object.UrlEspacio = url;
      this.allEspacios = JSON.parse(localStorage.getItem("espacios"));
    }
  }

  submit(){
    
    if(this.espacioForm.invalid){
      alert("Corrija los errores");
    }else{
      this.espacio.Object.Nombre = this.espacioForm.value.Nombre;
      this.espacio.Object.Descripcion = this.espacioForm.value.Descripcion;
      this.cargando = true;  
        if(this.crear){
          this.espacio.Object.Administradores = {} as Array<Go<Usuario>>
          this.espacio.Object.Administradores[this.usuario.Key] = this.usuario.Object;
          this.espacioSv.post(this.espacio.Object).subscribe(res=>{
              this.cargando = false;
              this.addEspacioToArray();
              sessionStorage.setItem("espacioActual",JSON.stringify(this.espacio));
              this.router.navigateByUrl("/app-central/confespacio");
          });
        }
        else{
          this.espacioSv.put(this.espacio).subscribe(res=>{
              this.cargando = false;
              this.addEspacioToArray();
              sessionStorage.setItem("espacioActual",JSON.stringify(this.espacio));
              this.router.navigateByUrl("/app-central/confespacio");
          });
        }
    }
  }

  addEspacioToArray(){
    this.allEspacios.push(this.espacio);
    localStorage.setItem("espacios",JSON.stringify(this.allEspacios));
  }

}
