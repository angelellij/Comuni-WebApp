import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PresentacionComponent } from './pages/presentacion/presentacion.component';
import { LoginComponent } from './pages/login/login.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { AppCentralComponent } from './pages/app-central/app-central.component';
import { NoticiaPageComponent } from './pages/noticia-page/noticia-page.component';
import { EspacioPageComponent } from './pages/espacio-page/espacio-page.component';
import { MensajeriaPageComponent } from './pages/mensajeria-page/mensajeria-page.component';
import { NoticiaABMComponent } from './pages/ABMs/noticia-abm/noticia-abm.component';
import { PostsComponent } from './pages/posts/posts.component';
import { ConfEspacioPageComponent } from './pages/conf-espacio-page/conf-espacio-page.component';
import { TagAbmComponent } from './pages/ABMs/tag-abm/tag-abm.component';
import {AuthGuard } from "./guards/auth.guard"

const routes: Routes = [
  {path:'', redirectTo:'/presentacion', pathMatch: 'full'},
  {path:'presentacion', component:PresentacionComponent},
  {path:'login', component:LoginComponent},
  {path:'registro', component:RegistroComponent},
  {path:'app-central', component:AppCentralComponent , canActivate:[AuthGuard],
    children: [
    {path:'noticias', component:NoticiaPageComponent, canActivate:[AuthGuard]},
    {path:'espacios', component:EspacioPageComponent, canActivate:[AuthGuard]},
    {path:'mensajeria', component:MensajeriaPageComponent, canActivate:[AuthGuard]},
    {path:'posts', component:PostsComponent, canActivate:[AuthGuard]},
    {path:'confespacio', component:ConfEspacioPageComponent, canActivate:[AuthGuard]},
    {path:'editornoticia', component:NoticiaABMComponent, canActivate:[AuthGuard]},
    {path:'editortag', component:TagAbmComponent, canActivate:[AuthGuard]}
  ]}
 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
