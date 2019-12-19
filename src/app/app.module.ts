import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PresentacionComponent } from './pages/presentacion/presentacion.component';
import { LoginComponent } from './pages/login/login.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { NoticiaComponent } from './components/noticia/noticia.component';
import { NoticiaPageComponent } from './pages/noticia-page/noticia-page.component';
import { AppCentralComponent } from './pages/app-central/app-central.component';
import { EspacioPageComponent } from './pages/espacio-page/espacio-page.component';
import { MensajeriaPageComponent } from './pages/mensajeria-page/mensajeria-page.component';
import { PostComponent } from './components/post/post.component';
import { ChatComponent } from './components/chat/chat.component';
import { ContactosComponent } from './components/contactos/contactos.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NoticiaABMComponent } from './pages/ABMs/noticia-abm/noticia-abm.component';
import { EspacioComponent } from './components/espacio/espacio.component';
import { PostsComponent } from './pages/posts/posts.component';
import { ConfEspacioPageComponent } from './pages/conf-espacio-page/conf-espacio-page.component';
import { TagAbmComponent } from './pages/ABMs/tag-abm/tag-abm.component';
import { TagComponent } from './components/tag/tag.component';
import { ShortpressDirective } from './directives/shortpress.directive';
import { LongpressDirective } from './directives/longpress.directive';
import { EspacioAbmComponent } from './pages/ABMs/espacio-abm/espacio-abm.component';
import { AgregarUsuariosComponent } from './pages/ABMs/agregar-usuarios/agregar-usuarios.component';


@NgModule({
  declarations: [
    AppComponent,
    PresentacionComponent,
    LoginComponent,
    RegistroComponent,
    NoticiaComponent,
    NoticiaPageComponent,
    AppCentralComponent,
    EspacioPageComponent,
    MensajeriaPageComponent,
    PostComponent,
    ChatComponent,
    ContactosComponent,
    NoticiaABMComponent,
    EspacioComponent,
    PostsComponent,
    ConfEspacioPageComponent,
    TagAbmComponent,
    TagComponent,
    ShortpressDirective,
    LongpressDirective,
    EspacioAbmComponent,
    AgregarUsuariosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
