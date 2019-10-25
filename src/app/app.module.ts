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
    ContactosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
