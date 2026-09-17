import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ItemLista } from './component/item-lista/item-lista';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [RouterOutlet, ItemLista, FormsModule],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('lista-de-tarefas');
}
