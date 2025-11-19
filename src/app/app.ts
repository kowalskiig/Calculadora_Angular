import { Component, signal } from '@angular/core';
import { Calculadora } from './calculadora/calculadora';
import { ListaCompra } from './lista-compra/lista-compra';



@Component({
  selector: 'app-root',
  imports: [ ListaCompra ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('ProjetoInicial');
}
