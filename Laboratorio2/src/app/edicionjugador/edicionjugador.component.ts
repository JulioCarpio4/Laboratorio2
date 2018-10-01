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
  
  atrapa: string;
  batea: string;

  BD: boolean;
  BZ: boolean;
  AD: boolean;
  AZ: boolean;

  seleccion: string;

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
      this.atrapa = this.selectedvalue.posicionF;
      this.batea = this.selectedvalue.posicionB;
      this.chequeoBat(this.lposB);
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

  chequeoBat(valor){
    if (valor == "Ambidiestro")
    {
        this.BD = true;
        this.BZ = true;
    }

    else if (valor == "Zurdo")
    {
      this.BZ = true;
      this.BD = false;
    }

    else 
    {
      this.BD = true;
      this.BZ = false;
    }
  }

  checkValueAD(event: any){
    if (event == "Derecho" )
    {
      if(this.atrapa == "Zurdo")
      {
        this.atrapa = "Ambidiestro";
      }

      else if (this.atrapa == "")
      {
        this.atrapa = "Derecho"
      }
      
    }
    else 
    {
      if (this.atrapa == "Ambidiestro")
      {
        this.atrapa = "Zurdo";
      }
      
      else 
      {
        this.atrapa = "";
      }
    }

    console.log(this.atrapa)
  };

  checkValueAZ(event: any){
    if (event == "Zurdo" )
    {
      if(this.atrapa == "Derecho")
      {
        this.atrapa = "Ambidiestro";
      }

      else if (this.atrapa == "")
      {
        this.atrapa = "Zurdo"
      }
      
    }
    else 
    {
      if (this.atrapa == "Ambidiestro")
      {
        this.atrapa = "Derecho";
      }
      else 
      {
        this.atrapa = "";
      }      
    }
    console.log(this.atrapa)
  }

  checkValueBD(event: any){
    if (event == "Derecho" )
    {
      if(this.batea == "Zurdo")
      {
        this.batea = "Ambidiestro";
      }

      else if (this.batea == "")
      {
        this.batea = "Derecho"
      }
      
    }
    else 
    {
      if (this.batea == "Ambidiestro")
      {
        this.batea = "Zurdo";
      }
      
      else 
      {
        this.batea = "";
      }
    }

    console.log(this.batea)
  };

  checkValueBZ(event: any){
    if (event == "Zurdo" )
    {
      if(this.batea == "Derecho")
      {
        this.batea = "Ambidiestro";
      }

      else if (this.batea == "")
      {
        this.batea = "Zurdo"
      }
      
    }
    else 
    {
      if (this.batea == "Ambidiestro")
      {
        this.batea = "Derecho";
      }
      else 
      {
        this.batea = "";
      }      
    }
    console.log(this.batea)
  }

  GuardarJugador(){

    this.selectedvalue.nombre = this.lnombre ;
    this.selectedvalue.estatura = this.lestatura;
    this.selectedvalue.jersey = this.ljersey;
    this.selectedvalue.fec_nacimiento = this.lfec;
    this.selectedvalue.id = this.lid;
    this.selectedvalue.peso = this.lpeso;
    this.selectedvalue.posicionB = this.batea;
    this.selectedvalue.posicionF = this.atrapa;

    //Se actualiza el nuevo jugador. 
    this.playerService.postJugador(this.lid, this.selectedvalue)
    this.seleccion = "Seleccione un jugador...";
    
    this.selectedplayer = undefined;
    alert("Jugador almacenado con éxito!");
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
