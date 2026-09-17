import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [CommonModule, FormsModule],
  selector: 'app-item-lista',
  styleUrl: './item-lista.css',
  templateUrl: './item-lista.html',
})
export class ItemLista {
  itens = [
    { tarefa: 'Aprender Angular', concluida: false },
    { tarefa: 'Desenvolver aplicação', concluida: false },
    { tarefa: 'Apresentar Projeto', concluida: false },
    
  ];

  removerItem(item: { tarefa: string; concluida: boolean }) {
    this.itens = this.itens.filter((itemAtual) => itemAtual !== item);
  }

  get tarefasConcluidas() {
    return this.itens.filter((item) => item.concluida).length;
  }

  novaTarefa = '';

  adicionarTarefa() {
    if (this.novaTarefa.trim() !== '') {
      this.itens.push({ tarefa: this.novaTarefa, concluida: false });
      this.novaTarefa = '';
    }
  }
}