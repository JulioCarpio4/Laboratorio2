import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  newplayer = {
    id: -1, 
    name: "", 
    born_date: "", 
    altura: null,
    peso: null,
    posicion: "",
    atrapa: "", 
    batea: ""

  };

  isCheckedBZ = false;
  isCheckedBD = false;
  isCheckedAD = false;
  isCheckedAZ = false;

  ddvalor = "";

  posiciones = ["Primera Base", "Segunda Base", "Tercera Base", "Shortstop", "Right Fielder", 
  "Center Fielder", "Left Fielder", "Receptor", "Lanzador"];

  constructor() { 
      console.log("HOLA CONSTRUCTOR!");
  }

  ngOnInit() {
  }


  setearValores(){
    this.newplayer.id = -1;
    this.newplayer.name = "";
    this.newplayer.born_date = "";
    this.newplayer.altura = null;
    this.newplayer.peso = null;
    this.newplayer.posicion = "";
    this.newplayer.atrapa = "";
    this.newplayer.batea = "";
    this.isCheckedBZ = false;
    this.isCheckedBD = false;
    this.isCheckedAZ = false;
    this.isCheckedAD = false;
    this.ddvalor = "";

  }

  GuardarJugador(){
    if (this.newplayer.name == "")
    {
      alert("Por favor, llenar el nombre del jugador!");
      return;
    }
    if (this.newplayer.born_date == "")
    {
      alert("Por favor, selecciona la fecha de nacimiento del jugador!");
      return;
    }
    if (this.newplayer.altura == "")
    {
      alert("Por favor, llenar la altura del jugador!");
      return;
    }
    if (this.newplayer.peso == "")
    {
      alert("Por favor, llenar el peso del jugador!");
      return;
    }
    if (this.newplayer.posicion == "")
    {
      alert("Por favor, llenar la posición del jugador!");
      return;
    }
    if (this.newplayer.atrapa == "")
    {
      alert("Por favor, llenar la forma de fieldeo del jugador!");
      return;
    }
    if (this.newplayer.atrapa == "")
    {
      alert("Por favor, llenar la forma de bateo del jugador!");
      return;
    }

    this.newplayer.id = Math.round(Math.random() * 1000); //Se le genera un nuevo id al nuevo jugador. 
    localStorage.setItem(String(this.newplayer.id), JSON.stringify(this.newplayer)); //Se almacena el nuevo jugador en el localstorage

    this.setearValores(); //Se limpia la variable donde se almacenan los datos del nuevo jugador. 

    alert("Jugador almacenado con éxito!");
  }

  SelectOption(event: any){
    this.newplayer.posicion = event.target.value;
  };

  checkValueAD(event: any){
    if (event == "Derecho" )
    {
      if(this.newplayer.atrapa == "Zurdo")
      {
        this.newplayer.atrapa = "Ambidiestro";
      }

      else if (this.newplayer.atrapa == "")
      {
        this.newplayer.atrapa = "Derecho"
      }
      
    }
    else 
    {
      if (this.newplayer.atrapa == "Ambidiestro")
      {
        this.newplayer.atrapa = "Zurdo";
      }
      
      else 
      {
        this.newplayer.atrapa = "";
      }
    }

    console.log(this.newplayer.atrapa)
  };

  checkValueAZ(event: any){
    if (event == "Zurdo" )
    {
      if(this.newplayer.atrapa == "Derecho")
      {
        this.newplayer.atrapa = "Ambidiestro";
      }

      else if (this.newplayer.atrapa == "")
      {
        this.newplayer.atrapa = "Zurdo"
      }
      
    }
    else 
    {
      if (this.newplayer.atrapa == "Ambidiestro")
      {
        this.newplayer.atrapa = "Derecho";
      }
      else 
      {
        this.newplayer.atrapa = "";
      }      
    }
    console.log(this.newplayer.atrapa)
  }

  checkValueBD(event: any){
    if (event == "Derecho" )
    {
      if(this.newplayer.batea == "Zurdo")
      {
        this.newplayer.batea = "Ambidiestro";
      }

      else if (this.newplayer.batea == "")
      {
        this.newplayer.batea = "Derecho"
      }
      
    }
    else 
    {
      if (this.newplayer.batea == "Ambidiestro")
      {
        this.newplayer.batea = "Zurdo";
      }
      
      else 
      {
        this.newplayer.batea = "";
      }
    }

    console.log(this.newplayer.batea)
  };

  checkValueBZ(event: any){
    if (event == "Zurdo" )
    {
      if(this.newplayer.batea == "Derecho")
      {
        this.newplayer.batea = "Ambidiestro";
      }

      else if (this.newplayer.batea == "")
      {
        this.newplayer.batea = "Zurdo"
      }
      
    }
    else 
    {
      if (this.newplayer.batea == "Ambidiestro")
      {
        this.newplayer.batea = "Derecho";
      }
      else 
      {
        this.newplayer.batea = "";
      }      
    }
    console.log(this.newplayer.batea)
  }
}
