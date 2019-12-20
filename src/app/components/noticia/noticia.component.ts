import { Component, OnInit, Input } from '@angular/core';
import { Noticia } from 'src/app/models/noticia';
import { Go } from 'src/app/models/go';

@Component({
  selector: 'app-noticia',
  templateUrl: './noticia.component.html',
  styleUrls: ['./noticia.component.scss']
})
export class NoticiaComponent implements OnInit {

  @Input() noticia:Go<Noticia>;

  constructor() { }

  ngOnInit() {
  }

}
