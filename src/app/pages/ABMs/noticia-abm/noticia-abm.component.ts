import { Component, OnInit } from '@angular/core';
import { Noticia } from 'src/app/models/noticia';
import { Go } from 'src/app/models/go';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NoticiaService } from 'src/app/services/noticia.service';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/models/usuario';
import { isNullOrUndefined } from 'util';

@Component({
  selector: 'app-noticia-abm',
  templateUrl: './noticia-abm.component.html',
  styleUrls: ['./noticia-abm.component.scss']
})
export class NoticiaABMComponent implements OnInit {

  cargando:boolean = false;
  crear:boolean = true;
   noticiaForm: FormGroup;
   noticia:Go<Noticia>;

  mensajeValidacion = {
    'Texto':{
      'required':'Se requiere este extracto',
      'minlength':'El extracto debe tener al menos 3 caracteres',
      'maxlength':'el extracto debe tener menos de 30 caracteres',
    }
  }

  constructor(
    private builder:FormBuilder, 
    private noticiaSv:NoticiaService,
    private router: Router) 
  {
    this.noticiaForm = this.builder.group(
      {
        Titulo: ['', Validators.compose(
          [Validators.required, 
            Validators.maxLength(30), 
            Validators.minLength(3)])],
            Descripcion: ['', Validators.compose([
          Validators.required, 
          Validators.minLength(3)])]
      });
  }
  

  ngOnInit() {
    this.noticia = {} as Go<Noticia>;
    this.noticia.Object = {} as Noticia;
    this.noticia.Object.Usuario = JSON.parse(localStorage.getItem("usuario"));
  }

  submit(){
    var now = new Date(); 
    this.noticia.Object.Date = now.toLocaleString();
    this.cargando = true;
    if(this.noticiaForm.valid){
      this.noticia.Object.Titulo = this.noticiaForm.get("Titulo").value;
      this.noticia.Object.Descripcion = this.noticiaForm.get("Descripcion").value;
        this.noticiaSv.post(this.noticia.Object).subscribe(res=>{
          this.cargando = false;
          this.noticia = res as Go<Noticia>;
          this.redirectSubmit();  
      });
    }
  }

  redirectSubmit(){
    if(isNullOrUndefined(this.noticia)){
      alert("Server Error");
    }
    else{
      this.router.navigateByUrl("/app-central/noticias");
    }
  }
}
