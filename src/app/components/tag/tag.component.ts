import { Component, OnInit, SimpleChanges, Input } from '@angular/core';
import { Tag } from 'src/app/models/tag';
import { Go } from 'src/app/models/go';

@Component({
  selector: 'app-tag',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.scss']
})
export class TagComponent implements OnInit {

  @Input() tag:Go<Tag>;

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
    console.log(this.tag);
    document.getElementById("Tag").style.color = "#" + this.tag.Object.ColorLetra;
    document.getElementById("Tag").style.backgroundColor = "#" + this.tag.Object.ColorBackground;
  }

}
