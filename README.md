## Sistema de cadastro de veículos

### Partes do Sistema

- Cadstro de veículos (CRUD)

### Tecnologias

- React + TypeScript
- Vite
- Material UI (MUI)
- Zod
- React Hook form
- React Query
- Axios
- React Router DOM

### Como iniciar a aplicação

Para executar a aplicação na sua máquina é preciso que você já tenha instalado de forma local o Node + npm.

1. Após ter clonado o repositório, execute no terminal:

```console
npm install
```

2. Após concluir a instalação, execute no terminal:

```console
npm run dev
```

4. Abra no navegador: http://localhost:5173

O primeiro comando irá instalar as dependências, o segundo comando irá iniciar a aplicação React no endereço: http://localhost:5173 

#### Cadastro de veículos:

Uma das rotas protegidas do sistema. Faz parte dos componentes de DashBoard. Sua principal função é exibir os dados cadastrais dos veículos retornados pela a api, essa exibição é feita através de uma Table. É possível também adicionar novos cadastros, editar e deletar cadastros já existentes.

#### Rotas protegidas
Estamos utilizando o CORS no endpoint 