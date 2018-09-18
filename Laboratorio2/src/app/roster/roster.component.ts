import { Component, OnInit } from '@angular/core';
import {MatTableModule, MatTableDataSource} from '@angular/material/table';
import { DataSource } from '@angular/cdk/table';
import { Jugadores } from '../mock-players';

@Component({
  selector: 'app-roster',
  templateUrl: './roster.component.html',
  styleUrls: ['./roster.component.css']
})
export class RosterComponent implements OnInit {

  dataSource = Jugadores;
  displayedColumns: string[] = ['id', 'nombre', 'jersey', 'estatura', 'peso', 'posicionF', 'posicionB', 'fec_nacimiento'];

  constructor() { }

  ngOnInit() {
  }

}
