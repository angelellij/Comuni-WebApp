import { Component, OnInit } from '@angular/core';
import { TagService } from 'src/app/services/tag.service';
import { stringify } from 'querystring';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Usuario } from 'src/app/models/usuario';
import { Go } from 'src/app/models/go';
import { MensajeriaPageComponent } from 'src/app/pages/mensajeria-page/mensajeria-page.component';

@Component({
  selector: 'app-contactos',
  templateUrl: './contactos.component.html',
  styleUrls: ['./contactos.component.scss']
})
export class ContactosComponent implements OnInit {
  usuarios:Array<Go<Usuario>>;
  prueba:Object;
  

  constructor(private usuarioService:UsuarioService,
    private parent:MensajeriaPageComponent
      ) { }

  ngOnInit() {
    this.usuarioService.getAll().subscribe(res=>{ 
      this.usuarios = res as Array<Go<Usuario>>;
    });
  }

  onClickUsuario(usuariox:Go<Usuario>){
    this.parent.usuarioElegido = usuariox;
  }
}
