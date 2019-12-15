import { Component, OnInit } from '@angular/core';
import { Go } from 'src/app/models/go';
import { Usuario } from 'src/app/models/usuario';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LoginService } from 'src/app/services/login.service';
import { Router } from '@angular/router';
import { Session } from 'inspector';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  private usuario:Go<Usuario> = {} as Go<Usuario>;
  private loginForm: FormGroup;

  constructor(
    private builder:FormBuilder, 
    private loginSv:LoginService,
    private router: Router) 
  {
    this.loginForm = this.builder.group(
      {
        Email: ['', Validators.compose([Validators.email, Validators.required])],
        Contrasena: ['', Validators.compose([Validators.minLength(6), Validators.required ])]
      });
  }
  

  ngOnInit() {
  }

  login(value:JSON){

      this.usuario.Object = value as unknown as Usuario;
      this.loginSv.login(this.usuario.Object).subscribe(res=>{
        this.usuario = res as Go<Usuario>;
        if (this.usuario.Key != null){
          localStorage.setItem("usuario",JSON.stringify(this.usuario));
          this.router.navigateByUrl("/app-central/noticias");
        }
      });
  }
}
