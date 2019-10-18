import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PresentacionComponent } from './pages/presentacion/presentacion.component';
import { LoginComponent } from './pages/login/login.component';
import { RegistroComponent } from './pages/registro/registro.component';


const routes: Routes = [
  {path:'', redirectTo:'/presentacion', pathMatch: 'full'},
  {path:'presentacion', component:PresentacionComponent},
  {path:'login', component:LoginComponent},
  {path:'registro', component:RegistroComponent}
 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
