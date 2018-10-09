import { Component, OnInit, Input } from '@angular/core';
import {TypeComidas} from '../type-comidas';

@Component({
  selector: 'app-comidas-detalle',
  templateUrl: './comidas-detalle.component.html',
  styleUrls: ['./comidas-detalle.component.css']
})
export class ComidasDetalleComponent  implements OnInit {
  @Input() comida: TypeComidas;
  constructor() { }
  ngOnInit() {}}
