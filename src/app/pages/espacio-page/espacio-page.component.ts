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

   usuario:Go<Usuario>;
   espacios:Array<Go<Espacio>>;

  constructor() { }

  ngOnInit() {
    this.usuario = JSON.parse(localStorage.getItem("usuario"));
    this.espacios = JSON.parse(localStorage.getItem("espacios"));
  }

}
