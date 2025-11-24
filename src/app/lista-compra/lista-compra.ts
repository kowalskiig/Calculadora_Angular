import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-lista-compra',
  imports: [ FormsModule],
  templateUrl: './lista-compra.html',
  styleUrl: './lista-compra.css',
})
export class ListaCompra {

  item: string = "";
  
}
