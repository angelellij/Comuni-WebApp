import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { Go } from 'src/app/models/go';
import { Usuario } from 'src/app/models/usuario';
import { MensajeService } from 'src/app/services/mensaje.service';
import { Mensaje } from 'src/app/models/mensaje';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DatePipe } from '@angular/common'
import {timer} from 'rxjs';
import {take} from 'rxjs/operators'; 
import { TimeInterval } from 'rxjs/internal/operators/timeInterval';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

  
   dataAccesed:Boolean = false;
   usuarioLogueado:Go<Usuario>;
  @Input() usuario:Go<Usuario>;
   mensajes:Array<Go<Mensaje>>;
  mensajeriaForm:FormGroup;

  constructor(
    private mensajeriaSv:MensajeService,
    private builder:FormBuilder
  ) {
    this.mensajeriaForm = this.builder.group(
      {
        Texto: ['', Validators.email],
      });
   }

  ngOnInit() {
    this.usuarioLogueado = JSON.parse(localStorage.getItem("usuario"));
  }

  submitMessage(value:JSON){
    var mensaje:Mensaje = {} as Mensaje;
    mensaje = value as unknown as Mensaje;

    var now = new Date(); 
    mensaje.Date = now.toLocaleString();
    mensaje.Emisor = this.usuarioLogueado.Key;
    mensaje.Receptor = this.usuario.Key;
    this.mensajeriaSv.post(mensaje).subscribe(res=>{
    });
    this.mensajeriaForm.reset();
  }

  ngOnChanges(changes: SimpleChanges): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
    if (this.usuario != undefined && this.usuario!= null){
      this.dataAccesed = false;

        var mensaje:Mensaje = {} as Mensaje;
        mensaje.Emisor = this.usuario.Key;
        mensaje.Receptor = this.usuarioLogueado.Key;
        this.mensajeriaSv.getAll(mensaje).subscribe(res=>{
          this.mensajes = res as Array<Go<Mensaje>>;
          this.dataAccesed = true;
        });   
        
    }
  }

}
