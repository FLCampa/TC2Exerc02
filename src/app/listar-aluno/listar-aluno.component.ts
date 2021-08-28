// Felipe Luis Campanelli SC3006255
import { Component, OnInit } from '@angular/core'
import { Aluno } from '../../models/aluno.model'

@Component({
  selector: 'app-listar-aluno',
  templateUrl: './listar-aluno.component.html',
  styleUrls: ['./listar-aluno.component.css']
})
export class ListarAlunoComponent implements OnInit {
  aluno: Aluno = {
    nome: 'Felipe',
    dataIngresso: '10/01/2019',
    previsaoFormatura: '10/12/2021'
  }
  constructor() {}

  ngOnInit(): void {}
}
