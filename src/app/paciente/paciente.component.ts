import { Component, OnInit } from '@angular/core';
import { DBService } from '../db.service';
import { Paciente } from '../entidades/paciente';

@Component({
  selector: 'app-paciente',
  templateUrl: './paciente.component.html',
  styleUrls: ['./paciente.component.css']
})
export class PacienteComponent implements OnInit {

  novoPaciente: Paciente;

  pacientes: Paciente[];

  carregando: boolean;

  constructor(private database: DBService) {
    this.novoPaciente = new Paciente();

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
  
  cadastrar() {
    this.database.inserir('pacientes', this.novoPaciente)
      .then(() => {
        alert('Usuário cadastrado com sucesso');
        this.novoPaciente = new Paciente();
        this.carregarPacientes();
      });
  }

}
