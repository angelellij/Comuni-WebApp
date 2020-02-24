import { Component, OnInit } from '@angular/core';
import { Go } from 'src/app/models/go';
import { Noticia } from 'src/app/models/noticia';

@Component({
  selector: 'app-inner-noticias-page',
  templateUrl: './inner-noticias-page.component.html',
  styleUrls: ['./inner-noticias-page.component.scss']
})
export class InnerNoticiasPageComponent implements OnInit {

  noticia:Go<Noticia>;

  constructor() { }

  ngOnInit() {
    this.noticia = JSON.parse(sessionStorage.getItem("noticiaActual"));
  }

}
