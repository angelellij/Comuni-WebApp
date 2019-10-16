import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PresentacionComponent } from './pages/presentacion/presentacion.component';
import { InicioComponent } from './pages/inicio/inicio.component';


const routes: Routes = [
  {path:'', redirectTo:'/presentacion', pathMatch: 'full'},
  {path:'presentacion', component:PresentacionComponent},
  {path:'inicio', component:InicioComponent}
 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
