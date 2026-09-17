# Lista de Tarefas

Aplicação de lista de tarefas desenvolvida com Angular 22. Ela permite adicionar tarefas, marcar tarefas como concluídas e removê-las da lista.

## Tecnologias

- Angular 22
- TypeScript
- Angular Forms (`ngModel`)
- Vitest para testes unitários
- Angular SSR

## Requisitos

- Node.js 20 ou superior
- npm 11 ou superior

## Instalação

Na pasta `lista-de-tarefas`, instale as dependências:

```bash
npm install
```

## Executar localmente

Inicie o servidor de desenvolvimento:

```bash
npm start
```

A aplicação ficará disponível em [http://localhost:4200](http://localhost:4200). O servidor usa a porta `4200` e atualiza a aplicação automaticamente quando os arquivos são alterados.

## Funcionalidades

- Adicionar uma nova tarefa.
- Marcar ou desmarcar uma tarefa como concluída.
- Remover uma tarefa.
- Exibir a quantidade de tarefas concluídas.

## Comandos disponíveis

| Comando | Descrição |
| --- | --- |
| `npm start` | Inicia o servidor local em `localhost:4200`. |
| `npm run build` | Gera o build de produção na pasta `dist/`. |
| `npm run watch` | Compila em modo de observação para desenvolvimento. |
| `npm test` | Executa os testes unitários. |

## Estrutura principal

```text
src/
	app/
		component/
			item-lista/  # Lista e gerenciamento das tarefas
		app.ts         # Componente raiz
	main.ts          # Inicialização da aplicação
public/            # Arquivos públicos
angular.json       # Configuração do Angular CLI
package.json       # Dependências e scripts
```

## Build

Para gerar os arquivos otimizados para produção:

```bash
npm run build
```

Os artefatos serão gerados em `dist/lista-de-tarefas/`.
