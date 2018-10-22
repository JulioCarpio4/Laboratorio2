import { Component, OnInit } from '@angular/core';
import { FormsModule, Validators } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { PlayersService } from '../players.service';
import { MatSnackBar } from '@angular/material/snack-bar'; 

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  newplayer = {
    id: -1, 
    nombre: "", 
    fec_nacimiento: "", 
    estatura: null,
    peso: null,
    posicion: "",
    atrapa: "", 
    batea: "",
    jersey: undefined

  };

  ddvalor = "";

  posiciones = ["Primera Base", "Segunda Base", "Tercera Base", "Shortstop", "Right Fielder", 
  "Center Fielder", "Left Fielder", "Receptor", "Lanzador"];

  ValoresAtrapa = ["Derecho", "Zurdo", "Ambidiestro"];

  constructor(private playerService: PlayersService, public snackBar: MatSnackBar) { 
  }

  ngOnInit() {
  }


  setearValores(){
    this.newplayer.id = -1;
    this.newplayer.nombre = "";
    this.newplayer.fec_nacimiento = "";
    this.newplayer.estatura = null;
    this.newplayer.peso = null;
    this.newplayer.posicion = "";
    this.newplayer.atrapa = "";
    this.newplayer.batea = "";
    this.ddvalor = "";

  }

  GuardarJugador(){
    this.newplayer.id = Math.round(Math.random() * 10000); //Se le genera un nuevo id al nuevo jugador. 
    
    //Se invoca al servicio que almacena el nuevo jugador. 
    this.playerService.postJugador(this.newplayer.id, this.newplayer);

    //this.setearValores(); //Se limpia la variable donde se almacenan los datos del nuevo jugador. 

    this.snackBar.open("Jugador Almacenado con éxito", "Cerrar", {
      duration: 3000,
      verticalPosition: 'bottom',
      horizontalPosition: 'right',
      panelClass: ['green-snackbar']
    });
    //alert("Jugador almacenado con éxito!");
  }

  SelectOption(event: any){
    this.newplayer.posicion = event.target.value;
  };

  CambioAtrapa(event: any){
    this.newplayer.atrapa = event.target.value;
  };

  CambioBatea(event: any){
    this.newplayer.batea = event.target.value;
  };
}
