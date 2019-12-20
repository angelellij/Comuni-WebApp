import { Component, OnInit, SimpleChanges } from '@angular/core';
import { EspacioService } from 'src/app/services/espacio.service';
import { TagService } from 'src/app/services/tag.service';
import { Tag } from 'src/app/models/tag';
import { Go } from 'src/app/models/go';
import { Espacio } from 'src/app/models/espacio';
import { Usuario } from 'src/app/models/usuario';
import { isNullOrUndefined } from 'util';
import { Router } from '@angular/router';

@Component({
  selector: 'app-conf-espacio-page',
  templateUrl: './conf-espacio-page.component.html',
  styleUrls: ['./conf-espacio-page.component.scss']
})
export class ConfEspacioPageComponent implements OnInit {
  
  private usuario:Go<Usuario>;
  private tags:Array<Go<Tag>>;
  private espacioActual:Go<Espacio>;
  private espacios:Array<Go<Espacio>>;
  private admins:Array<Go<Usuario>>;
  private Administrador:boolean = false;
  private miembrosVacio:boolean = false;
  private tagsVacio:boolean = false;

  constructor(
    private espacioSv:EspacioService,
    private tagSv:TagService,
    private router:Router
    ) { }

  ngOnInit() {
    this.usuario = JSON.parse(localStorage.getItem("usuario"));
    this.getEspacio();
    this.getTags();
  }

  getEspacio(){
    this.espacios = JSON.parse(localStorage.getItem("espacios"));
    this.espacioActual = JSON.parse(sessionStorage.getItem("espacioActual"));
    if(!isNullOrUndefined(this.espacioActual.Object.Administradores[this.usuario.Key])){
      this.Administrador = true;
    }
    if(Object.values(this.espacioActual.Object.Miembros).length == 0){
      this.miembrosVacio = true;
    }
  }

  editEspacio(op:number){
    sessionStorage.setItem("op",JSON.stringify(op));
    this.router.navigate(['./app-central/editorespacio']);
  }

  getTags(){
     this.tagSv.getAll(this.espacioActual).subscribe(res=>{
       this.tags = res as Array<Go<Tag>>;
       console.log(this.tags);
       if (this.tags.length == 0){
        this.tagsVacio = true;
       }
     });
  }

  editTag(tag:Go<Tag>){
    sessionStorage.setItem("tag", JSON.stringify(tag));
    this.router.navigate(["./app-central/editoretiqueta"]);
  }

  delteTag(tag:Go<Tag>){
    this.tagSv.delete(tag,this.espacioActual).subscribe(res=>{
      var i:number = 0;
      Object.values(this.tags).forEach(element =>{
        if(element.Key.match(tag.Key)){
          delete this.tags[i];
          if(Object.values(this.tags).length == 0){
            this.tagsVacio == true;
          }
        }
        i++;   
      })
    });
  }

  agregarUsuarios(op:number){
    sessionStorage.setItem("op",JSON.stringify(op));
    this.router.navigate(['./app-central/agregarusuarios']);
  }

  deleteAdmin(admin:string){
    if(Object.keys(this.espacioActual.Object.Administradores).length != 1){
      delete this.espacioActual.Object.Administradores[admin];
      var i = 0;
      this.espacioSv.put(this.espacioActual).subscribe(res=>{
        this.espacios.forEach(element=>{
          if (element.Key.match(this.espacioActual.Key)){
            this.espacios[i] = this.espacioActual;
          }
          i++;
        });
        localStorage.setItem("espacios",JSON.stringify(this.espacioActual));
        sessionStorage.setItem("espacioActual",JSON.stringify(this.espacioActual));
      });
    }
    else{
      alert("No se puede borrar si solo tiene un administrador");
    }
  }

  deleteMiembro(miembro:string){
      delete this.espacioActual.Object.Miembros[miembro];
      var i = 0;
      this.espacioSv.put(this.espacioActual).subscribe(res=>{
        this.espacios.forEach(element=>{
          if (element.Key.match(this.espacioActual.Key)){
            this.espacios[i] = this.espacioActual;
          }
          i++;
        });
        localStorage.setItem("espacios",JSON.stringify(this.espacioActual));
        sessionStorage.setItem("espacioActual",JSON.stringify(this.espacioActual));
      });
  }

}
