import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Jugador } from '../jugador';
import { PlayersService } from '../players.service';

import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

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

  parametro: any;
  lpar: number;
  hayParam: boolean;

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

  constructor(private playerService: PlayersService, public snackBar: MatSnackBar, private route: ActivatedRoute, private router: Router) {
    this.inicio();
  }

  ngOnInit() {
    this.getJugadores();

    this.parametro = this.route.params.subscribe(params => {
      this.lpar = params['id'];
    });

    if (this.lpar != undefined) {
      this.hayParam = true;
      this.ParamPlayer(this.lpar);
    }
    else {
      this.hayParam = false;
    }

  }

  getJugadores(): void {
    this.playerService.obtenerJugadores()
      .then(
        (recibidos) => {
          var self = this;

          console.log(self.jugadores);

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
          self.jugadores = listado;
          self.jugadores = listado;
        })
      .catch(function (error) {
        console.log(error.message);
      })
  }

  SelectOption(event: any) {

    if (event.target.value == "Seleccione un jugador...") {
      this.selectedplayer = undefined;
    }
    else {
      this.selectedplayer = "Sí";
      let option = String(event.target.value).split('-');

      //this.selectedvalue = this.playerService.getJugador(Number(option[0]));
      this.playerService.obtenerJugador(Number(option[0]))
        .then((recibido) => {
          var self = this;
          var returnedPlayer;
          var datos;

          returnedPlayer = recibido;
          datos = returnedPlayer.data;


          self.selectedvalue.nombre = datos.nombre;
          self.selectedvalue.estatura = datos.estatura;
          self.selectedvalue.jersey = datos.jersey;
          self.selectedvalue.fec_nacimiento = datos.fec_nacimiento;
          self.selectedvalue.id = datos.id;
          self.selectedvalue.peso = datos.peso;
          self.selectedvalue.batea = datos.batea;
          self.selectedvalue.atrapa = datos.atrapa;
          self.selectedvalue.posicion = datos.posicion;

          self.lnombre = datos.nombre;
          self.lestatura = datos.estatura;
          self.ljersey = datos.jersey;
          self.lfec = datos.fec_nacimiento;
          self.lid = datos.id;
          self.lpeso = datos.peso
          self.lbatea = datos.batea;
          self.latrapa = datos.atrapa;
          self.lposicion = datos.posicion;

        })
        .catch(function (error) {
          console.log(error.message);
        })
    }
  };


  CambioAtrapa(event: any) {
    this.latrapa = event.target.value;
  };

  CambioBatea(event: any) {
    this.lbatea = event.target.value;
  };


  inicio() {
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

  ActualizarJugador() {

    this.selectedvalue.nombre = this.lnombre;
    this.selectedvalue.estatura = this.lestatura;
    this.selectedvalue.jersey = this.ljersey;
    this.selectedvalue.fec_nacimiento = this.lfec;
    this.selectedvalue.id = this.lid;
    this.selectedvalue.peso = this.lpeso;
    this.selectedvalue.batea = this.lbatea;
    this.selectedvalue.atrapa = this.latrapa;
    this.selectedvalue.posicion = this.lposicion;

    //Se actualiza el nuevo jugador. 
    //this.playerService.postJugador(this.lid, this.selectedvalue)
    this.playerService.actualizarJugador(this.lid, this.selectedvalue)
      .then((resultado) => {
        var self = this;
        self.seleccion = "Seleccione un jugador...";

        self.selectedplayer = undefined;


        self.snackBar.open("Jugador actualizado con éxito", "Cerrar", {
          duration: 4000,
          verticalPosition: 'bottom',
          horizontalPosition: 'right',
          panelClass: ['green-snackbar']
        });

        if (self.hayParam) {
          self.router.navigate(['/rosteractual']);
        }

      })
      .catch((error) => {
        var self = this;

        self.snackBar.open("No se pudo actualizar los datos del jugador, " + error, "Cerrar", {
          duration: 4000,
          verticalPosition: 'bottom',
          horizontalPosition: 'right',
          panelClass: ['red-snackbar']
        });
      })


  }

  EliminarJugador() {

    //Eliminar jugador
    localStorage.removeItem(String(this.lid));
    this.selectedplayer = undefined;
    this.seleccion = "Seleccione un jugador...";
    this.getJugadores();

    alert("Jugador eliminado con éxito!!");

  }

  ParamPlayer(lid) {
    this.selectedplayer = "Sí";
    //let option = String(event.target.value).split('-');

    //this.selectedvalue = this.playerService.getJugador(Number(lid));
    this.playerService.obtenerJugador(lid)
      .then((recibido) => {
        var self = this;
        var returnedPlayer;
        var datos;

        returnedPlayer = recibido;
        datos = returnedPlayer.data;

        self.lnombre = datos.nombre;
        self.lestatura = datos.estatura;
        self.ljersey = datos.jersey;
        self.lfec = datos.fec_nacimiento;
        self.lid = datos.id;
        self.lpeso = datos.peso
        self.lbatea = datos.batea;
        self.latrapa = datos.atrapa;
        self.lposicion = datos.posicion;

        self.seleccion = self.lid + " - " + self.lnombre;

      })
      .catch(function (error) {
        console.log(error.message);
      })

  }
}
