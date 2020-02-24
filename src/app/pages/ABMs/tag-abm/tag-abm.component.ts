import { Component, OnInit, SimpleChanges } from '@angular/core';
import { Validators, FormGroup, FormBuilder, AbstractControl } from '@angular/forms';
import { Tag } from 'src/app/models/tag';
import { Go } from 'src/app/models/go';
import { TagService } from 'src/app/services/tag.service';
import { Router } from '@angular/router';
import { isNullOrUndefined } from 'util';
import { Espacio } from 'src/app/models/espacio';

@Component({
  selector: 'app-tag-abm',
  templateUrl: './tag-abm.component.html',
  styleUrls: ['./tag-abm.component.scss']
})
export class TagAbmComponent implements OnInit {

  cargando:boolean = false;
  crear:boolean = true;
   tag:Go<Tag>;;
   tagForm: FormGroup;

  mensajeValidacion = {
    'Nombre':{
      'required':'Se requiere un nombre'
    },
    'Color':{
      'required':'Se requiere un color de fondo',
      'minlength':'Debe tener 6 caracteres',
      'maxlength':'Debe tener 6 caracteres',
      'pattern':'El codigo contiene caracteres no hexagecimales'
    }
  }


  constructor(
     private builder:FormBuilder, 
     private tagSv:TagService,
     private router: Router) 
  {
    this.tagForm = this.builder.group(
      {
        Nombre: ['', Validators.compose([Validators.required])],
        ColorLetra: ['', Validators.compose(
          [Validators.required, 
            Validators.maxLength(6), 
            Validators.minLength(6), 
            Validators.pattern("[0-9a-fA-F]+")])],
        ColorBackground: ['', Validators.compose([
          Validators.required, 
          Validators.maxLength(6), 
          Validators.minLength(6), 
          Validators.pattern("[0-9a-fA-F]+")])]
      });
  }
  

  ngOnInit() {
    
    if(!isNullOrUndefined(sessionStorage.getItem("tag"))){
      this.crear = false;
      this.tag = JSON.parse(sessionStorage.getItem("tag"));
      this.tagForm.markAllAsTouched
      this.tagForm.get("Nombre").setValue(this.tag.Object.Nombre);
      this.tagForm.get("ColorLetra").setValue(this.tag.Object.ColorLetra);
      this.tagForm.get("ColorBackground").setValue(this.tag.Object.ColorBackground);
    }else{
      this.tag = {} as Go<Tag>;
      this.tag.Object = {} as Tag;
      this.tag.Object.Nombre = "etiqueta";
      this.tag.Object.ColorLetra = "111111";
      this.tag.Object.ColorBackground = "ffffff";
    }
    this.tag.Object.Espacio = JSON.parse(sessionStorage.getItem("espacioActual"));
    document.getElementById("Tag").style.backgroundColor = "#" + this.tag.Object.ColorBackground;
    document.getElementById("Tag").style.color = "#" + this.tag.Object.ColorLetra;
    sessionStorage.removeItem("tag");
  }

  NombreToTag(){
    if(this.tagForm.value.Nombre){
      this.tag.Object.Nombre = this.tagForm.value.Nombre;
    }else{
      this.tag.Object.Nombre = "etiqueta";
    }
  }

  ColorLetraToTag(){
    if(this.tagForm.value.ColorLetra){
      this.tag.Object.ColorLetra = this.tagForm.value.ColorLetra;
    } else{
      this.tag.Object.ColorLetra = "111111";
    }
    document.getElementById("Tag").style.color = "#" + this.tag.Object.ColorLetra;
  }

  ColorBackgroundToTag(){
    if(this.tagForm.value.ColorBackground){
      this.tag.Object.ColorBackground = this.tagForm.value.ColorBackground;
    }else{
      this.tag.Object.ColorBackground = "ffffff";
    }
    document.getElementById("Tag").style.backgroundColor = "#" + this.tag.Object.ColorBackground;
  }

  submit(){
    this.cargando = true;
    if(this.tagForm.valid){
      if(this.crear){
        this.tagSv.post(this.tag.Object).subscribe(res=>{
            this.cargando = false;
            this.tag = res as Go<Tag>;
            this.redirectSubmit();
            
        })
      }
      else{
        this.tagSv.put(this.tag).subscribe(res=>{
          this.cargando = false;
          this.tag = res as Go<Tag>;
          this.redirectSubmit();
        });
      }
    }
  }

  redirectSubmit(){
    if(isNullOrUndefined(this.tag)){
      alert("Server Error");
    }
    else{
      this.router.navigateByUrl("/app-central/confespacio");
    }
  }

}
