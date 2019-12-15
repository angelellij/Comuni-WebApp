import { Component, OnInit } from '@angular/core';
import { EspacioService } from 'src/app/services/espacio.service';
import { TagService } from 'src/app/services/tag.service';
import { Tag } from 'src/app/models/tag';
import { Go } from 'src/app/models/go';

@Component({
  selector: 'app-conf-espacio-page',
  templateUrl: './conf-espacio-page.component.html',
  styleUrls: ['./conf-espacio-page.component.scss']
})
export class ConfEspacioPageComponent implements OnInit {
  private tags:Array<Go<Tag>>


  constructor(
    private espacioSv:EspacioService,
    private tagSv:TagService
    ) { }

  ngOnInit() {
  }

  getEspacio(){

  }

  getTags(){
    this.tagSv.getAll(JSON.parse(sessionStorage.getItem["espacioActual"])).subscribe(res=>{
      this.tags = res as Array<Go<Tag>>;
    });
  }

}
