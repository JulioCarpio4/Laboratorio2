import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { Jugador } from '../jugador';

@Component({
  selector: 'app-edicionjugador',
  templateUrl: './edicionjugador.component.html',
  styleUrls: ['./edicionjugador.component.css']
})
export class EdicionjugadorComponent implements OnInit {

  jugadores = [];
  selectedplayer: string; 
  selectedvalue:string;

  constructor() {

      this.allStorage();
      console.log(this.jugadores);
   }

  ngOnInit() {
  }

  allStorage() {

    var values = [],
        keys = Object.keys(localStorage),
        i = keys.length;

    while ( i-- ) {
      let id: number;
      let name: string; 
      let temporal: string; 
      let pivot;

      temporal = localStorage.getItem(keys[i]);
      pivot = JSON.parse(temporal);

      id = pivot.id;
      name = pivot.name 

      this.jugadores.push({"id": id, "name": name});
    }
  }

  SelectOption(event: any){
    
    if (event.target.value == "Seleccione un jugador...")
    {
      this.selectedplayer = undefined;
    }
    else
    {
      this.selectedplayer = "Sí";
    }
  };
}
