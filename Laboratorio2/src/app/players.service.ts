import { Injectable } from '@angular/core';
import { Jugador } from './jugador';

@Injectable({
  providedIn: 'root'
})
export class PlayersService {

  constructor() { }

  //Método que obtiene la información de los jugadores almacenados en localstorage. 
  getJugadores(): Jugador[] {
    var Jugadores = [],
      keys = Object.keys(localStorage),
      i = keys.length;

    while (i--) {
      let temporal: string;
      let pivot;
      temporal = localStorage.getItem(keys[i]);
      pivot = JSON.parse(temporal);

      let dummyJugador = new Jugador();
      dummyJugador.id = pivot.id;
      dummyJugador.jersey = pivot.jersey;
      dummyJugador.fec_nacimiento = pivot.fec_nacimiento;
      dummyJugador.estatura = pivot.estatura;
      dummyJugador.nombre = pivot.nombre;
      dummyJugador.peso = pivot.peso;
      dummyJugador.batea = pivot.batea;
      dummyJugador.atrapa = pivot.atrapa;
      dummyJugador.posicion = pivot.posicion;

      Jugadores.push(dummyJugador);

    }
    return Jugadores;
  }

  postJugador(id, newPlayer){
  
    //Se almacena el nuevo jugador en el localstorage
    localStorage.setItem(String(id), JSON.stringify(newPlayer)); 
  }

  getJugador(id): Jugador{
    let value = localStorage.getItem(id);
    let pivot = JSON.parse(value);

    var dummyJugador = new Jugador();
      dummyJugador.id = pivot.id;
      dummyJugador.jersey = pivot.jersey;
      dummyJugador.fec_nacimiento = pivot.fec_nacimiento;
      dummyJugador.estatura = pivot.estatura;
      dummyJugador.nombre = pivot.nombre;
      dummyJugador.peso = pivot.peso;
      dummyJugador.batea = pivot.batea;
      dummyJugador.atrapa = pivot.atrapa;
      dummyJugador.posicion = pivot.posicion;

    return dummyJugador;
  }
}
