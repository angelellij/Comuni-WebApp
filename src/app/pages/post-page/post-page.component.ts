import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/models/post';
import { Go } from 'src/app/models/go';

@Component({
  selector: 'app-post-page',
  templateUrl: './post-page.component.html',
  styleUrls: ['./post-page.component.scss']
})
export class PostPageComponent implements OnInit {
  post:Go<Post>;

  constructor() { 
    this.post = JSON.parse(sessionStorage.getItem("postActual"));
  }

  ngOnInit() {
  }

}
