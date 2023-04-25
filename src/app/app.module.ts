import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RegistraExpedienteComponent } from './components/registra-expediente/registra-expediente.component';
import { ListaxexpedienteComponent } from './components/listaxexpediente/listaxexpediente.component';
import { ListaxpartidaComponent } from './components/listaxpartida/listaxpartida.component';
import { AddUsuarioComponent } from './components/add-usuario/add-usuario.component';
import { AddAdministradoComponent } from './components/add-administrado/add-administrado.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistraExpedienteComponent,
    ListaxexpedienteComponent,
    ListaxpartidaComponent,
    AddUsuarioComponent,
    AddAdministradoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
