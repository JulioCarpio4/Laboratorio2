import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
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

  selectedplayer: string; 
  selectedvalue = new Jugador();
  lnombre: string;
  lestatura: number;
  ljersey: number;
  lfec: Date;
  lid: number;
  lpeso: string;
  lposB: string;
  lposF: string;

  constructor(private playerService: PlayersService) {
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
      this.lposB = this.selectedvalue.posicionB;
      this.lposF = this.selectedvalue.posicionF;
    }
  };

  inicio(){
    this.selectedvalue.nombre = "";
    this.selectedvalue.estatura = 0;
    this.selectedvalue.jersey = 0;
    this.selectedvalue.fec_nacimiento = new Date("1900/01/01");
    this.selectedvalue.id = 0;
    this.selectedvalue.peso = "";
    this.selectedvalue.posicionB = "";
    this.selectedvalue.posicionF = "";
  }
}
