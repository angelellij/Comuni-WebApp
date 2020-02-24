import { Component, OnInit } from '@angular/core';
import { Go } from 'src/app/models/go';
import { Usuario } from 'src/app/models/usuario';
import { Router } from '@angular/router';
import { EspacioService } from 'src/app/services/espacio.service';
import { Espacio } from 'src/app/models/espacio';

@Component({
  selector: 'app-app-central',
  templateUrl: './app-central.component.html',
  styleUrls: ['./app-central.component.scss']
})
export class AppCentralComponent implements OnInit {

   usuario:Go<Usuario> = {} as Go<Usuario>;

  constructor(private router:Router) { }

  ngOnInit() {
  this.usuario = JSON.parse(localStorage.getItem("usuario"));
  }

  logout(){
    localStorage.clear();
    this.router.navigate([""]);
  }

}
