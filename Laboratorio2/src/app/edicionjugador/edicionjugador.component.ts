import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSnackBar } from '@angular/material/snack-bar'; 
import { Jugador } from '../jugador';
import { PlayersService } from '../players.service';

@Component({
  selector: 'app-edicionjugador',
  templateUrl: './edicionjugador.component.html',
  styleUrls: ['./edicionjugador.component.css']
})
export class EdicionjugadorComponent implements OnInit {

  jugadores: Jugador[];
  posiciones = ["Primera Base", "Segunda Base", "Tercera Base", "Shortstop", "Right Fielder", 
  "Center Fielder", "Left Fielder", "Receptor", "Lanzador"];

  ValoresAtrapa = ["Derecho", "Zurdo", "Ambidiestro"];

  selectedplayer: string; 
  selectedvalue = new Jugador();
  
  //Variables Locales
  lid: number;
  lnombre: string;
  lfec: Date;
  lestatura: number;
  lpeso: string;
  lposicion: string;
  ljersey: number;
  lbatea: string;
  latrapa: string;

  seleccion: string;

  constructor(private playerService: PlayersService, public snackBar: MatSnackBar) {
    this.inicio();
   }

  ngOnInit() {
    this.getJugadores();
    
  }

  getJugadores(): void{
    this.jugadores = this.playerService.getJugadores();
  }

  SelectOption(event: any){
    
    if (event.target.value == "Seleccione un jugador...")
    {
      this.selectedplayer = undefined;
    }
    else
    {
      this.selectedplayer = "Sí";
      let option = String(event.target.value).split('-');
      this.selectedvalue = this.playerService.getJugador(Number(option[0]));
      
      this.lnombre = this.selectedvalue.nombre;
      this.lestatura = this.selectedvalue.estatura;
      this.ljersey = this.selectedvalue.jersey;
      this.lfec = this.selectedvalue.fec_nacimiento;
      this.lid = this.selectedvalue.id;
      this.lpeso = this.selectedvalue.peso
      this.lbatea = this.selectedvalue.batea;
      this.latrapa = this.selectedvalue.atrapa;
      this.lposicion = this.selectedvalue.posicion;
    }
  };

  
  CambioAtrapa(event: any){
    this.latrapa = event.target.value;
  };

  CambioBatea(event: any){
    this.lbatea = event.target.value;
  };


  inicio(){
    this.selectedvalue.nombre = "";
    this.selectedvalue.estatura = 0;
    this.selectedvalue.jersey = 0;
    this.selectedvalue.fec_nacimiento = new Date("1900/01/01");
    this.selectedvalue.id = 0;
    this.selectedvalue.peso = "";
    this.selectedvalue.atrapa = "";
    this.selectedvalue.batea = "";
    this.selectedvalue.posicion = "";
    
  }

  ActualizarJugador(){

    this.selectedvalue.nombre = this.lnombre ;
    this.selectedvalue.estatura = this.lestatura;
    this.selectedvalue.jersey = this.ljersey;
    this.selectedvalue.fec_nacimiento = this.lfec;
    this.selectedvalue.id = this.lid;
    this.selectedvalue.peso = this.lpeso;
    this.selectedvalue.batea = this.lbatea;
    this.selectedvalue.atrapa = this.latrapa;
    this.selectedvalue.posicion = this.lposicion;

    //Se actualiza el nuevo jugador. 
    this.playerService.postJugador(this.lid, this.selectedvalue)
    this.seleccion = "Seleccione un jugador...";
    
    this.selectedplayer = undefined;

    this.snackBar.open("Jugador actualizado con éxito", "Cerrar", {
      duration: 3000,
      verticalPosition: 'bottom',
      horizontalPosition: 'right',
      panelClass: ['green-snackbar']
    });

    //alert("Jugador almacenado con éxito!");
  }

  EliminarJugador(){

    //Eliminar jugador
    localStorage.removeItem(String(this.lid));
    this.selectedplayer = undefined;
    this.seleccion = "Seleccione un jugador...";
    this.getJugadores();

    alert("Jugador eliminado con éxito!!");

  }
}
