import { Component, OnInit } from '@angular/core';
import {MatTableModule, MatTableDataSource} from '@angular/material/table';
import { DataSource } from '@angular/cdk/table';
import { Jugadores } from '../mock-players';
import { Jugador } from '../jugador';

@Component({
  selector: 'app-roster',
  templateUrl: './roster.component.html',
  styleUrls: ['./roster.component.css']
})
export class RosterComponent implements OnInit {

  dataSource = Jugadores;
  displayedColumns: string[] = ['id', 'nombre', 'jersey', 'estatura', 'peso', 'posicionF', 'posicionB', 'fec_nacimiento'];

  ListaJugadores = [];

  constructor() { 

    this.allStorage();
  }

  ngOnInit() {
  }

  allStorage() {

    var values = [],
        keys = Object.keys(localStorage),
        i = keys.length;

    while ( i-- ) {
        let temporal: string;
        let pivot;
        temporal = localStorage.getItem(keys[i]);
         pivot = JSON.parse(temporal);

        let dummyJugador = new Jugador();
        dummyJugador.id = pivot.id;
        dummyJugador.jersey = Math.round(Math.random() * 100 );
        dummyJugador.fec_nacimiento = pivot.born_date;
        dummyJugador.estatura = pivot.altura;
        dummyJugador.nombre = pivot.name;
        dummyJugador.peso = pivot.peso;
        dummyJugador.posicionB = pivot.batea;
        dummyJugador.posicionF = pivot.posicion;

        this.ListaJugadores.push(dummyJugador);

    }

    this.dataSource = this.ListaJugadores;

    return values;
}

}
