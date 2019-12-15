import { Component, OnInit } from '@angular/core';
import { Noticia } from 'src/app/models/noticia';
import { Go } from 'src/app/models/go';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NoticiaService } from 'src/app/services/noticia.service';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/models/usuario';

@Component({
  selector: 'app-noticia-abm',
  templateUrl: './noticia-abm.component.html',
  styleUrls: ['./noticia-abm.component.scss']
})
export class NoticiaABMComponent implements OnInit {

  private usuario:Go<Usuario>;
  private noticia:Go<Noticia> = {} as Go<Noticia>;
  private noticiaForm: FormGroup;

  constructor(
    private builder:FormBuilder, 
    private noticiaSv:NoticiaService,
    private router: Router) 
  {
    this.noticiaForm = this.builder.group(
      {
        Titulo: ['', Validators.compose([Validators.required])],
        Descripcion: ['', Validators.compose([Validators.required ])]
      });
  }
  

  ngOnInit() {
  }

  submit(value:JSON){
      this.noticia.Object = value.parse as unknown as Noticia;
      this.noticiaSv.post(this.noticia.Object).subscribe(res=>{
        this.noticia = res as Go<Noticia>;
        if (this.noticia.Key != null){
          this.router.navigateByUrl("/app-central/noticias");
        }
      });
  }

}
