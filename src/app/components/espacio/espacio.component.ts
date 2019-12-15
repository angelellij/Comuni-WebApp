import { Component, OnInit, Input } from '@angular/core';
import { Espacio } from 'src/app/models/espacio';
import { Go } from 'src/app/models/go';
import { Router } from '@angular/router';

@Component({
  selector: 'app-espacio',
  templateUrl: './espacio.component.html',
  styleUrls: ['./espacio.component.scss']
})
export class EspacioComponent implements OnInit {
  @Input() espacio:Go<Espacio>;
  
  constructor(private router:Router) { }

  ngOnInit() {
  }

  goToEspacio(){
    sessionStorage.setItem("espacioActual", JSON.stringify(this.espacio));
    this.router.navigateByUrl("localhost:4200/app-central/posts");
  }

}
