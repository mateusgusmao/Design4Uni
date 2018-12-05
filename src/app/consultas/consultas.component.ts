import { Component, OnInit } from '@angular/core';
import { DBService } from '../db.service';
import { Consulta } from '../entidades/consulta';


@Component({
  selector: 'app-consultas',
  templateUrl: './consultas.component.html',
  styleUrls: ['./consultas.component.css']
})
export class ConsultasComponent implements OnInit {
 
  novaConsulta: Consulta;

  consultas: Consulta[];

  carregando: boolean;

  constructor(private database: DBService) {
    this.novaConsulta = new Consulta();

    this.carregarConsultas();
  }

  ngOnInit() {
  }
  private carregarConsultas() {
    this.carregando = true;

    this.database.listar<Consulta>('consultas')
      .then(consultasDB => {
        this.consultas = consultasDB;

        this.carregando = false;
      });
  }
  
  cadastrar() {
    this.database.inserir('consultas', this.novaConsulta)
      .then(() => {
        alert('Consulta cadastrada com sucesso');
        this.novaConsulta = new Consulta();
        this.carregarConsultas();
      });
  }

}

