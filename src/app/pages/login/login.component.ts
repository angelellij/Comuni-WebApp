import { Component, OnInit } from '@angular/core';
import { Go } from 'src/app/models/go';
import { Usuario } from 'src/app/models/usuario';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LoginService } from 'src/app/services/login.service';
import { Router } from '@angular/router';
import { Session } from 'inspector';
import { Espacio } from 'src/app/models/espacio';
import { EspacioService } from 'src/app/services/espacio.service';
import { isNullOrUndefined } from 'util';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  private cargando:boolean = false;
  private espacios:Array<Go<Espacio>>;
  private usuario:Go<Usuario> = {} as Go<Usuario>;
  private loginForm: FormGroup;

  constructor(
    private builder:FormBuilder, 
    private loginSv:LoginService,
    private router: Router,
    private espacioSv:EspacioService) 
  {
    this.loginForm = this.builder.group(
      {
        Email: ['', Validators.compose([Validators.email, Validators.required])],
        Contrasena: ['', Validators.compose([Validators.minLength(6), Validators.required ])]
      });
  }
  

  ngOnInit() {
  }

  login(value:JSON){

      this.usuario.Object = value as unknown as Usuario;
      this.cargando = true;
      this.loginSv.login(this.usuario.Object).subscribe(res=>{
        this.usuario = res as Go<Usuario>;
        if (this.usuario.Key != null){
          localStorage.setItem("usuario",JSON.stringify(this.usuario));
          this.espacioSv.getAll(this.usuario.Key).subscribe(res=>{
            this.espacios = res as Array<Go<Espacio>>;
            localStorage.setItem("espacios",JSON.stringify(this.espacios));
          this.router.navigateByUrl("/app-central/noticias");
          }); 
        } else{
          this.cargando = false;
        }
      });
      
  }

  salvameJebus(){
    var espacio:Espacio = {} as Espacio;
    espacio.Nombre = "UTN";
    espacio.Descripcion = "Universidad Tecnologica Nacional";
    espacio.Administradores = {} as Array<Go<Usuario>>;
    espacio.Administradores[this.usuario.Key] = this.usuario.Object;
    this.espacioSv.post(espacio).subscribe(res=>{
    });
  }
}
