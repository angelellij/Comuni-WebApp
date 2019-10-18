import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PresentacionComponent } from './pages/presentacion/presentacion.component';
import { LoginComponent } from './pages/login/login.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { AppCentralComponent } from './pages/app-central/app-central.component';
import { NoticiaPageComponent } from './pages/noticia-page/noticia-page.component';
import { EspacioPageComponent } from './pages/espacio-page/espacio-page.component';
import { MensajeriaPageComponent } from './pages/mensajeria-page/mensajeria-page.component';


const routes: Routes = [
  {path:'', redirectTo:'/presentacion', pathMatch: 'full'},
  {path:'presentacion', component:PresentacionComponent},
  {path:'login', component:LoginComponent},
  {path:'registro', component:RegistroComponent},
  {path:'app-central', component:AppCentralComponent , 
    children: [
    {path:'noticias', component:NoticiaPageComponent},
    {path:'espacios', component:EspacioPageComponent},
    {path:'mensajeria', component:MensajeriaPageComponent}
  ]}
 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
