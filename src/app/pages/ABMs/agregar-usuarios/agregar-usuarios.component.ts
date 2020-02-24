import { Component, OnInit } from '@angular/core';
import { Go } from 'src/app/models/go';
import { Espacio } from 'src/app/models/espacio';
import { Usuario } from 'src/app/models/usuario';
import { EspacioService } from 'src/app/services/espacio.service';
import { UsuarioService } from 'src/app/services/usuario.service';
import { isNullOrUndefined } from 'util';

@Component({
  selector: 'app-agregar-usuarios',
  templateUrl: './agregar-usuarios.component.html',
  styleUrls: ['./agregar-usuarios.component.scss']
})
export class AgregarUsuariosComponent implements OnInit {

   cargando:boolean = false;
   tipo:string;
   espacioActual:Go<Espacio>;
   usuarios:Array<Go<Usuario>>;

  constructor(
    private espacioSv:EspacioService,
    private usuarioSv:UsuarioService) 
  {
  }
  

  ngOnInit() {
    
    this.espacioActual = JSON.parse(sessionStorage.getItem("espacioActual"));
    if(JSON.parse(sessionStorage.getItem("op")) == 1){
      this.tipo = "Administrador";
    }
    else{
      this.tipo = "Miembro";
    }
    this.cargando = true;
    this.usuarioSv.getAll().subscribe(res=>{ 
      this.cargando = false;
      this.usuarios = res as Array<Go<Usuario>>;
      var i = 0;
      if(JSON.parse(sessionStorage.getItem("op")) == 1){
        for (let key in Object.keys(this.espacioActual.Object.Administradores)) {
          this.filterUsuarios((Object.keys(this.espacioActual.Object.Administradores)[i]));
          i++;
        }
      }
      else{
        for (let key in  Object.keys(this.espacioActual.Object.Miembros)) {
          this.filterUsuarios((Object.keys(this.espacioActual.Object.Miembros)[i]));
          i++;
        }
      }
    });
  }

  submit(usuariox:Go<Usuario>){
    
      if(this.tipo.match("Administrador")){
        this.cargando = true;
        if(!isNullOrUndefined( this.espacioActual.Object.Miembros[usuariox.Key])){
          delete this.espacioActual.Object.Miembros[usuariox.Key];
        }
        this.espacioActual.Object.Administradores[usuariox.Key] = usuariox.Object;
        this.filterUsuarios(usuariox.Key);
        this.updateEspacio();
      }
      else{ 
        if(!isNullOrUndefined( this.espacioActual.Object.Administradores[usuariox.Key]) &&
          Object.keys(this.espacioActual.Object.Administradores).length == 1){
            alert("No puede agregar a miembros al unico administrador.");
        }
          else {
          this.cargando = true;
          if(!isNullOrUndefined( this.espacioActual.Object.Administradores[usuariox.Key])){
            delete this.espacioActual.Object.Administradores[usuariox.Key];  
          }
          this.espacioActual.Object.Miembros[usuariox.Key] = usuariox.Object;
          this.filterUsuarios(usuariox.Key);
          this.updateEspacio();
        }
      }
    }
   


  filterUsuarios(key:string){
    for(var i = 0; i < Object.values(this.usuarios).length; i++){
      if(this.usuarios[i].Key.match(key)){
        this.usuarios.splice(i,1);
      }
    }
  }

  updateEspacio(){
    this.espacioSv.put(this.espacioActual).subscribe(res=>{
        this.cargando = false; 
        sessionStorage.setItem("espacioActual",JSON.stringify(this.espacioActual));
    });
  }
}