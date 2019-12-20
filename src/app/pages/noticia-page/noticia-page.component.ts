import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Location } from '@angular/common';
import { Noticia } from 'src/app/models/noticia';
import { Go } from 'src/app/models/go';
import { Usuario } from 'src/app/models/usuario';
import { NoticiaService } from 'src/app/services/noticia.service';

@Component({
  selector: 'app-noticia-page',
  templateUrl: './noticia-page.component.html',
  styleUrls: ['./noticia-page.component.scss']
})
export class NoticiaPageComponent implements OnInit {
  @Output() sendUsuario: EventEmitter<any> = new EventEmitter<any>()
  private usuario:Go<Usuario>;
  private noticias:Array<Go<Noticia>>;
  private noticias1:Array<Go<Noticia>>;;
  private noticias2:Array<Go<Noticia>>;

  constructor(
    private noticiaSv:NoticiaService) { }

  ngOnInit() {
    this.usuario = JSON.parse(localStorage.getItem("usuario"));
    this.getNoticias();
  }

  getNoticias(){
    this.noticiaSv.getAll().subscribe(res=>{
      this.noticias = res as Array<Go<Noticia>>;
    });
  }

  displayFabs(){
    var elems = document.querySelectorAll('.fixed-action-btn');
  }
  
}
