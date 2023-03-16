import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  title: string = 'MAIN';
  prueba: string = '';
  personas = ['pepe', 'juan', 'carlos', 'pedro'];
  valorSwitch: string = '';

  nombre: string = '';
  apellido: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  verDatos(): void {
    console.log('Nombre: ', this.nombre);
    console.log('Apellido: ', this.apellido);
  }

  cargarDatos(): void {
    this.nombre = "Lionel";
    this.apellido = "Messi";
  }

}
