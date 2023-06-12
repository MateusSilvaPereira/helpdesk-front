import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Tecnico } from 'src/app/models/tecnico';

@Component({
  selector: 'app-tecnico-list',
  templateUrl: './tecnico-list.component.html',
  styleUrls: ['./tecnico-list.component.css']
})
export class TecnicoListComponent implements OnInit {
  
  ELEMENT_DATA: Tecnico[] = [
    {
      id: 1,
      nome: 'Mateus Silva Pereira',
      cpf: '123.456.789-10',
      email: 'mateussilvapereira2018@gmail.com',
      senha: '1234',
      perfis: ['0'],
      dataCriacao: '15/08/20222'
    },
    {
      id: 1,
      nome: 'Matia Antonia',
      cpf: '123.456.789-10',
      email: 'MatiaAntonia@gmail.com',
      senha: '12ddd',
      perfis: ['0'],
      dataCriacao: '12/02/2022'
    },
    {
      id: 1,
      nome: 'Valdir Pereira dos Santos',
      cpf: '123.456.789-10',
      email: 'ValdirPereiraantos@gmail.com',
      senha: 'rr4',
      perfis: ['0'],
      dataCriacao: '10/02/20222'
    }
  ]

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol', 'acoes'];
  dataSource = new MatTableDataSource<Tecnico>(this.ELEMENT_DATA);
  constructor() { }

  ngOnInit(): void {
  }



  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

}