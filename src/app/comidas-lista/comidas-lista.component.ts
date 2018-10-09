import { Component, OnInit } from '@angular/core';
import { TypeComidas } from '../type-comidas';
import { COMIDAS } from '../model-comidas';
@Component({
  selector: 'app-comidas-lista',
  templateUrl: './comidas-lista.component.html',
  styleUrls: ['./comidas-lista.component.css']
})
export class ComidasListaComponent implements OnInit {
comidas = COMIDAS;
  selectedComida: TypeComidas;
  constructor() { }
  ngOnInit() {}
  onSelect(comida: TypeComidas): void {
    this.selectedComida = comida;
  }
}
