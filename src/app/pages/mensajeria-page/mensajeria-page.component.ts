import { Component, OnInit } from '@angular/core';
import { Go } from 'src/app/models/go';
import { Usuario } from 'src/app/models/usuario';

@Component({
  selector: 'app-mensajeria-page',
  templateUrl: './mensajeria-page.component.html',
  styleUrls: ['./mensajeria-page.component.scss']
})
export class MensajeriaPageComponent implements OnInit {

  usuarioElegido:Go<Usuario>;

  constructor() { }

  ngOnInit() {
  }

}
