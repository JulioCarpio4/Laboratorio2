import { Component, OnInit } from '@angular/core';
import { MatTableModule, MatTableDataSource } from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import { DataSource } from '@angular/cdk/table';
import { Jugador } from '../jugador';
import { PlayersService } from '../players.service'
import { MatSnackBar } from '@angular/material/snack-bar'; 

@Component({
  selector: 'app-roster',
  templateUrl: './roster.component.html',
  styleUrls: ['./roster.component.css']
})
export class RosterComponent implements OnInit {

  dataSource: Jugador[];
  displayedColumns: string[] = ['id', 'nombre', 'jersey', 'estatura', 'peso', 'posicion', 'atrapa', 'batea', 'fec_nacimiento', "actions"];

  ListaJugadores: Jugador[];

  selectedRowIndex: number = -1;

  constructor(private playerService: PlayersService, public snackBar: MatSnackBar) {
  }

  ngOnInit() {
    this.getJugadores();
    this.dataSource = this.ListaJugadores;
    
  }

  getJugadores(): void{
    this.ListaJugadores = this.playerService.getJugadores();
    this.dataSource = this.ListaJugadores;
  }

  EliminarJugador(lid){

    //Eliminar jugador
    localStorage.removeItem(String(lid));
    this.getJugadores();

    //alert("Jugador eliminado con éxito!!");

    this.snackBar.open("Jugador Eliminado con éxito", "Cerrar", {
      duration: 3000,
      verticalPosition: 'bottom',
      horizontalPosition: 'right',
      panelClass: ['green-snackbar']
    });
  }

  highlight(row){
    this.selectedRowIndex = row.id;
  }
}
