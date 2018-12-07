import { Component, OnInit } from '@angular/core';
import { DBService } from '../db.service';
import { Consulta } from '../entidades/consulta';

@Component({
  selector: 'app-lista-consulta',
  templateUrl: './lista-consulta.component.html',
  styleUrls: ['./lista-consulta.component.css']
})
export class ListaConsultaComponent implements OnInit {
  
  consultas: Consulta[];

  carregando: boolean;

  constructor(private database: DBService) { 
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

  remover(uid: string) {
    this.database.remover('consultas', uid)
      .then(() => {
        alert('Consulta removida com sucesso');

        this.carregarConsultas();
      });
  }

  editar(consulta) {
    consulta.editando = true;
  }
  cancelEdit(consulta) {
    consulta.editando = false;
  }

  confirmEdit(consulta) {
    this.database.atualizar('consultas', consulta.uid, { especialidade: consulta.especialidade, medico: consulta.medico, dia: consulta.dia })
      .then(() => {
        alert('Consulta atualizada com sucesso');

        this.carregarConsultas();
      });
  }

}
