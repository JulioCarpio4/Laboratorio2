import { Injectable } from '@angular/core';
import { Jugador } from './jugador';

import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class PlayersService {

  constructor() { }

  //Método que obtiene la información de los jugadores almacenados en localstorage. 
  getJugadores(): Jugador[] {
    var Jugadores = [];
    return Jugadores;
    
  }
  postJugador(id, newPlayer) {

    //Se almacena el nuevo jugador en el localstorage
    localStorage.setItem(String(id), JSON.stringify(newPlayer));


  }

  getJugador(id): Jugador {
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

  obtenerJugadores(){
    return new Promise((resolve, reject) => {
      var resultado = axios.get('http://localhost:3001/api/v1/jugadores')
      if (resultado)
      {
        resolve(resultado);
      }
      else
      {
        var error = new Error("No se logró obtener a los jugadores");
        reject(error);
      }
    })
  }

  obtenerJugador(id){
    return new Promise((resolve, reject) =>{
      var resultado = axios.get('http://localhost:3001/api/v1/jugadores/' + id)
      if (resultado)
      {
        resolve(resultado);
      }
      else
      {
        var error = new Error("No se logró obtener al jugador con id " + id);
        reject(error);
      }
    })
  }

  eliminarJugador(id){
    return new Promise((resolve, reject) =>{
      var resultado = axios.delete('http://localhost:3001/api/v1/jugadores/' + id)
      if (resultado)
      {
        resolve(resultado);
      }
      else
      {
        var error = new Error("No se logró eliminar al jugador con id " + id);
        reject(error);
      }
    })
  }

  insertarJugador(id, newPlayer){

    return new Promise((resolve, reject) => {
      var resultado = axios.post('http://localhost:3001/api/v1/jugadores', 
      { id: newPlayer.id, 
        nombre: newPlayer.nombre,
        jersey: newPlayer.jersey,
        estatura: newPlayer.estatura,
        peso: newPlayer.peso,
        fec_nacimiento: newPlayer.fec_nacimiento, 
        posicion: newPlayer.posicion, 
        atrapa: newPlayer.atrapa, 
        batea: newPlayer.batea
      })
      if (resultado)
      {
        console.log(newPlayer);
        resolve(resultado);
      }
      else 
      {
        var error = new Error("No se logró insertar al jugador con id " + newPlayer.id)
        reject(error);
      }
    })
  }

  actualizarJugador(id, newPlayer){
    return new Promise((resolve, reject) => {
      var resultado = axios.put('http://localhost:3001/api/v1/jugadores/' + id, 
      { id: newPlayer.id, 
        nombre: newPlayer.nombre,
        jersey: newPlayer.jersey,
        estatura: newPlayer.estatura,
        peso: newPlayer.peso,
        fec_nacimiento: newPlayer.fec_nacimiento, 
        posicion: newPlayer.posicion, 
        atrapa: newPlayer.atrapa, 
        batea: newPlayer.batea
      })
      if (resultado)
      {
        console.log(newPlayer);
        resolve(resultado);
      }
      else 
      {
        var error = new Error("No se logró actualizar los datos del jugador con id " + newPlayer.id)
        reject(error);
      }
    })
  }
}
