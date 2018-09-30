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
      dummyJugador.jersey = Math.round(Math.random() * 100);
      dummyJugador.fec_nacimiento = pivot.born_date;
      dummyJugador.estatura = pivot.altura;
      dummyJugador.nombre = pivot.name;
      dummyJugador.peso = pivot.peso;
      dummyJugador.posicionB = pivot.batea;
      dummyJugador.posicionF = pivot.posicion;

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
      dummyJugador.jersey = Math.round(Math.random() * 100);
      dummyJugador.fec_nacimiento = pivot.born_date;
      dummyJugador.estatura = pivot.altura;
      dummyJugador.nombre = pivot.name;
      dummyJugador.peso = pivot.peso;
      dummyJugador.posicionB = pivot.batea;
      dummyJugador.posicionF = pivot.posicion;

    return dummyJugador;
  }
}
