import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { PacienteComponent } from './paciente/paciente.component';
import { ConsultasComponent } from './consultas/consultas.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CadastroComponent,
    PacienteComponent,
    ConsultasComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
