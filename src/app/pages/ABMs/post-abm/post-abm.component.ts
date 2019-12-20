import { Component, OnInit } from '@angular/core';
import { Tag } from 'src/app/models/tag';
import { Go } from 'src/app/models/go';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { TagService } from 'src/app/services/tag.service';
import { Router } from '@angular/router';
import { Espacio } from 'src/app/models/espacio';
import { Post } from 'src/app/models/post';
import { PostService } from 'src/app/services/post.service';
import { isNullOrUndefined } from 'util';

@Component({
  selector: 'app-post-abm',
  templateUrl: './post-abm.component.html',
  styleUrls: ['./post-abm.component.scss']
})
export class PostAbmComponent implements OnInit {

  cargando:boolean = false;
  crear:boolean = true;
  private tagElegido = false;
  private tags:Array<Go<Tag>>;
  private postForm: FormGroup;
  private post:Go<Post>;

  mensajeValidacion = {
    'Texto':{
      'required':'Se requiere este extracto',
      'minlength':'El extracto debe tener al menos 3 caracteres',
      'maxlength':'el extracto debe tener menos de 30 caracteres',
    }
  }

  constructor(
    private builder:FormBuilder, 
    private tagSv:TagService,
    private postSv:PostService,
    private router: Router) 
  {
    this.postForm = this.builder.group(
      {
        Titulo: ['', Validators.compose(
          [Validators.required, 
            Validators.maxLength(30), 
            Validators.minLength(3)])],
            Descripcion: ['', Validators.compose([
          Validators.required, 
          Validators.minLength(3)])]
      });
  }
  

  ngOnInit() {
    this.cargando = true;
    this.post = {} as Go<Post>;
    this.post.Object = {} as Post;
    this.post.Object.Espacio = JSON.parse(sessionStorage.getItem("espacioActual"));
    this.post.Object.Usuario = JSON.parse(localStorage.getItem("usuario"));
    this.tagSv.getAll(this.post.Object.Espacio ).subscribe(res => {
      this.tags = res as Array<Go<Tag>>;
      this.cargando = false;
    });
  }

  selectTag(tagx){
    this.post.Object.Tag = tagx;
    this.tagElegido = true;
  }

  submit(){
    var now = new Date(); 
    this.post.Object.Date = now.toLocaleString();
    this.cargando = true;
    if(this.postForm.valid){
      this.post.Object.Titulo = this.postForm.get("Titulo").value;
      this.post.Object.Descripcion = this.postForm.get("Descripcion").value;
        this.postSv.post(this.post.Object).subscribe(res=>{
          this.cargando = false;
          this.post = res as Go<Post>;
          this.redirectSubmit();  
      });
    }
  }

  redirectSubmit(){
    if(isNullOrUndefined(this.post)){
      alert("Server Error");
    }
    else{
      this.router.navigateByUrl("/app-central/posts");
    }
  }

}
