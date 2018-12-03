import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { PacienteComponent } from './paciente/paciente.component';
import { ConsultasComponent } from './consultas/consultas.component';
import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './home/home.component';
import { EditarComponent } from './editar/editar.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CadastroComponent,
    PacienteComponent,
    ConsultasComponent,
    MenuComponent,
    HomeComponent,
    EditarComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: '', component:  LoginComponent},
      {path: 'cadastro', component: CadastroComponent},
      {path: 'menu', component:  MenuComponent,
      children: [ 
        {path: 'home', component: HomeComponent},
        {path: 'paciente', component: PacienteComponent},
        {path: 'consultas', component: ConsultasComponent},
          {path: 'editar', component: EditarComponent},
      ]
    }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
