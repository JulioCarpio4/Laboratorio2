import { Component, OnInit } from '@angular/core';
import { MatTableModule, MatTableDataSource } from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import { DataSource } from '@angular/cdk/table';
import { Jugador } from '../jugador';
import { PlayersService } from '../players.service'
import { MatSnackBar } from '@angular/material/snack-bar'; 

import { Router } from '@angular/router';

@Component({
  selector: 'app-roster',
  templateUrl: './roster.component.html',
  styleUrls: ['./roster.component.css']
})
export class RosterComponent implements OnInit {

  dataSource: Jugador[];
  displayedColumns: string[] = ['id', 'nombre', 'jersey', 'estatura', 'peso', 'posicion', 'atrapa', 'batea', 'fec_nacimiento', "actions"];

  ListaJugadores: any[];

  selectedRowIndex: number = -1;

  constructor(private playerService: PlayersService, public snackBar: MatSnackBar, private router: Router) {
  }

  ngOnInit() {
    this.getJugadores();
    
  }

  getJugadores(): void{

    this.playerService.obtenerJugadores()
    .then(
     (recibidos) => {
       var self = this;
       var cadena;
       var listado = [];
       cadena = recibidos;


        var i = cadena.data.length;
        while (i--) {
          let temporal: string;
          let pivot;
          temporal = cadena.data[i];
          pivot = temporal;
    
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
          
          listado.push(dummyJugador);
          
      }
      self.ListaJugadores = listado;
      self.dataSource = listado; 
    })
    .catch(function (error){
      console.log(error.message);
    })

  }

  EliminarJugador(lid){

    //Eliminar jugador
    //localStorage.removeItem(String(lid));
    this.playerService.eliminarJugador(lid)
    .then((exito) => {
      var self = this;
      self.getJugadores();

      self.snackBar.open("Jugador Eliminado con éxito", "Cerrar", {
        duration: 3000,
        verticalPosition: 'bottom',
        horizontalPosition: 'right',
        panelClass: ['green-snackbar']
      });
    })
    .catch((error) =>{
      var self = this;

      self.snackBar.open("Error al intentar eliminar jugador", "Cerrar", {
        duration: 3000,
        verticalPosition: 'bottom',
        horizontalPosition: 'right',
        panelClass: ['red-snackbar']
      });
    })

  }

  EditarJugador(lid){
    this.router.navigate(['/edicionjugador', lid]);
  }

  highlight(row){
    this.selectedRowIndex = row.id;
  }
}
