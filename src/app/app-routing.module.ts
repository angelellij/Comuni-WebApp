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
import { EspacioAbmComponent } from './pages/ABMs/espacio-abm/espacio-abm.component';
import { AgregarUsuariosComponent } from './pages/ABMs/agregar-usuarios/agregar-usuarios.component';
import { PostAbmComponent } from './pages/ABMs/post-abm/post-abm.component';
import { PostPageComponent } from './pages/post-page/post-page.component';
import { InnerNoticiasPageComponent } from './pages/inner-noticias-page/inner-noticias-page.component';

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
    {path:'editortag', component:TagAbmComponent, canActivate:[AuthGuard]},
    {path:'editoretiqueta', component:TagAbmComponent, canActivate:[AuthGuard]},
    {path:'editorespacio', component:EspacioAbmComponent, canActivate:[AuthGuard]},
    {path:'agregarusuarios', component:AgregarUsuariosComponent, canActivate:[AuthGuard]},
    {path:'editorpost', component:PostAbmComponent, canActivate:[AuthGuard]},
    {path:'post', component:PostPageComponent, canActivate:[AuthGuard]},
    {path:'inner-noticia', component:InnerNoticiasPageComponent, canActivate:[AuthGuard]}
  ]}
 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
