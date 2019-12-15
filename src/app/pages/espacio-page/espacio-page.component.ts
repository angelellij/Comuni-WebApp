import { Component, OnInit } from '@angular/core';
import { Go } from 'src/app/models/go';
import { Espacio } from 'src/app/models/espacio';
import { Usuario } from 'src/app/models/usuario';
import { EspacioService } from 'src/app/services/espacio.service';

@Component({
  selector: 'app-espacio-page',
  templateUrl: './espacio-page.component.html',
  styleUrls: ['./espacio-page.component.scss']
})
export class EspacioPageComponent implements OnInit {

  private usuario:Go<Usuario>;
  espacios:Array<Go<Espacio>>;

  constructor(private espacioSv:EspacioService) { }

  ngOnInit() {
    this.usuario = JSON.parse(localStorage.getItem("usuario"));
    this.espacioSv.getAll(this.usuario.Key).subscribe(res=>{
      this.espacios = res as Array<Go<Espacio>>;
      console.log(res);
      console.log(this.espacios.length);
    });
    //this.salvameJebus();
  }

  salvameJebus(){
    var espacio:Espacio = {} as Espacio;
    espacio.Nombre = "UTN";
    espacio.Descripcion = "Universidad Tecnologica Nacional";
    espacio.Administradores = {} as Usuario;
    espacio.Administradores[this.usuario.Key] = this.usuario.Object;
    this.espacioSv.post(espacio).subscribe(res=>{
      console.log(res);
    });
  }

}
