import { Component, OnInit } from '@angular/core';
import { DBService } from '../db.service';
import { Paciente } from '../entidades/paciente';

@Component({
  selector: 'app-lista-paciente',
  templateUrl: './lista-paciente.component.html',
  styleUrls: ['./lista-paciente.component.css']
})
export class ListaPacienteComponent implements OnInit {

  pacientes: Paciente[];

  carregando: boolean;

  constructor(private database: DBService) {
        this.carregarPacientes();
  }

  ngOnInit() {
  }

  private carregarPacientes() {
    this.carregando = true;

    this.database.listar<Paciente>('pacientes')
      .then(pacientesDB => {
        this.pacientes = pacientesDB;

        this.carregando = false;
      });
  }

  remover(uid: string) {
    this.database.remover('pacientes', uid)
      .then(() => {
        alert('Paciente removido com sucesso');

        this.carregarPacientes();
      });
  }

  editar(pacinte) {
    pacinte.editando = true;
  }
  cancelEdit(paciente) {
    paciente.editando = false;
  }

  confirmEdit(paciente) {
    this.database.atualizar('pacientes', paciente.uid, { nome: paciente.nome, idade: paciente.idade, cpf: paciente.cpf })
      .then(() => {
        alert('Paciente atualizado com sucesso');

        this.carregarPacientes();
      });
  }


}
