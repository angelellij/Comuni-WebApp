import { Component, OnInit, Input } from '@angular/core';
import { Post } from 'src/app/models/post';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  @Input() post:Post;

  constructor(private router:Router) { }

  ngOnInit() {
  }

  redirect(){
    sessionStorage.setItem("postActual", JSON.stringify(this.post));
    this.router.navigate([ 'app-central/post' ]);
  }

}
