import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Go } from 'src/app/models/go';
import { Usuario } from 'src/app/models/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent implements OnInit {

  private cargando:boolean = false;
  private usuario:Go<Usuario> = {} as Go<Usuario>;
  private registrarseForm: FormGroup;

  constructor(
    private builder:FormBuilder, 
    private usuarioSv:UsuarioService) {
    this.registrarseForm = this.builder.group(
      {
        Nombre: ['', Validators.required],
        Apellido: ['', Validators.required],
        Email: ['', Validators.compose([Validators.email, Validators.required])],
        Contrasena: ['', Validators.compose([Validators.minLength(6), Validators.required ])],
        Contrasena2: ['', Validators.compose([Validators.minLength(6), Validators.required ])]
      });
   }

  ngOnInit() {
  }

  submit(value:JSON){
    this.cargando = true;
    if((value["Contrasena"] as string).match(value["Contrasena2"] as string)){
      delete value["Contrasena2"];
      this.usuario.Object = value as unknown as Usuario;
      this.usuarioSv.post(this.usuario.Object).subscribe(res=>{
        this.cargando = false;
      });
    }
    else{
      this.cargando = false;
      alert("Las contrasenas no coinciden.");
    }
  }

}
