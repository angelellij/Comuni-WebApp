import { Component, OnInit } from '@angular/core';
import { TagService } from 'src/app/services/tag.service';

@Component({
  selector: 'app-contactos',
  templateUrl: './contactos.component.html',
  styleUrls: ['./contactos.component.scss']
})
export class ContactosComponent implements OnInit {

  prueba:Object;

  constructor(private tagService:TagService) { }

  ngOnInit() {
    this.tagService.getAll();
  }

}
