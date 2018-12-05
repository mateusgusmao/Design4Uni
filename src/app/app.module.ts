import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { environment } from '../environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabase } from '@angular/fire/database';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { PacienteComponent } from './paciente/paciente.component';
import { ConsultasComponent } from './consultas/consultas.component';
import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './home/home.component';
import { EditarComponent } from './editar/editar.component';
import { ListaConsultaComponent } from './lista-consulta/lista-consulta.component';
import { ListaPacienteComponent } from './lista-paciente/lista-paciente.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CadastroComponent,
    PacienteComponent,
    ConsultasComponent,
    MenuComponent,
    HomeComponent,
    EditarComponent,
    ListaConsultaComponent,
    ListaPacienteComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    RouterModule.forRoot([
      {path: '', component:  LoginComponent},
      {path: 'cadastro', component: CadastroComponent},
      {path: 'menu', component:  MenuComponent,
      children: [ 
        {path: 'home', component: HomeComponent},
        {path: 'paciente', component: PacienteComponent},
        {path: 'lista-paciente', component: ListaPacienteComponent},
        {path: 'consultas', component: ConsultasComponent},
        {path: 'lista-consulta', component: ListaConsultaComponent},

          {path: 'editar', component: EditarComponent},
      ]
    }
    ])
  ],
  providers: [AngularFireDatabase],
  bootstrap: [AppComponent]
})
export class AppModule { }
