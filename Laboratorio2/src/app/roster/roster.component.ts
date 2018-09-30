import { Component, OnInit } from '@angular/core';
import { MatTableModule, MatTableDataSource } from '@angular/material/table';
import { DataSource } from '@angular/cdk/table';
import { Jugador } from '../jugador';
import { PlayersService } from '../players.service'

@Component({
  selector: 'app-roster',
  templateUrl: './roster.component.html',
  styleUrls: ['./roster.component.css']
})
export class RosterComponent implements OnInit {

  dataSource: Jugador[];
  displayedColumns: string[] = ['id', 'nombre', 'jersey', 'estatura', 'peso', 'posicionF', 'posicionB', 'fec_nacimiento'];

  ListaJugadores: Jugador[];

  constructor(private playerService: PlayersService) {

    //this.allStorage();
  }

  ngOnInit() {
    this.getJugadores();
    this.dataSource = this.ListaJugadores;
  }

  getJugadores(): void{
    this.ListaJugadores = this.playerService.getJugadores();
  }

}
