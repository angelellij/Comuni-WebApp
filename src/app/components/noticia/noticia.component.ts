import { Component, OnInit, Input } from '@angular/core';
import { Noticia } from 'src/app/models/noticia';
import { Go } from 'src/app/models/go';
import { Router } from '@angular/router';

@Component({
  selector: 'app-noticia',
  templateUrl: './noticia.component.html',
  styleUrls: ['./noticia.component.scss']
})
export class NoticiaComponent implements OnInit {

  @Input() noticia:Go<Noticia>;

  constructor(private router:Router) { }

  ngOnInit() {
    
  }

  redirect(){
    sessionStorage.setItem("noticiaActual", JSON.stringify(this.noticia));
    this.router.navigate([ 'app-central/inner-noticia' ]);
  }

}
