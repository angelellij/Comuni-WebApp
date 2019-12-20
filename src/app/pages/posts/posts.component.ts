import { Component, OnInit } from '@angular/core';
import { Go } from 'src/app/models/go';
import { Usuario } from 'src/app/models/usuario';
import { Espacio } from 'src/app/models/espacio';
import { Post } from 'src/app/models/post';
import { PostService } from 'src/app/services/post.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  private postsVacio = true;
  private espacioActual:Go<Espacio>;
  private posts:Array<Go<Post>>;
  private cargando:boolean = true;

  constructor(
    private postSv:PostService,
    private router:Router
    ) { }

  ngOnInit() {
    this.espacioActual = JSON.parse(localStorage.getItem("espacioActual"));
    this.getPosts();
  }

  getPosts(){
    this.espacioActual = JSON.parse(sessionStorage.getItem("espacioActual"));
    this.postSv.getAll(this.espacioActual).subscribe(res=>{
      this.posts = res as Array<Go<Post>>;
      if(this.posts.length != 0){
        this.postsVacio = false;
      }
      this.cargando = false;
    });
  }
  
}
