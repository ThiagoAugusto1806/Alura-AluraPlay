## 📼 AluraPlay 📼

Este projeto parece ser uma plataforma web para compartilhar vídeos, desenvolvida com HTML, CSS e JavaScript, utilizando uma estrutura de arquivos bem organizada.

## 💻 Tecnologias Utilizadas:

- HTML
- CSS
- JavaScript
- NodeJS
- Json-server

## 📂 Arquitetura do Projeto

### 📁 css/

Contém os arquivos CSS responsáveis pelo estilo visual da plataforma.

- `estilos-form.css`: Estilos específicos para formulários.
- `estilos.css`: Estilos gerais da aplicação.
- `flexbox.css`: Estilos utilizando flexbox para layout.
- `reset.css`: Arquivo de reset para padronizar estilos entre navegadores.

### 📁 img/

Imagens utilizadas na plataforma.

- `cabecalho/`: Imagens para o cabeçalho da página.
    - `Logo.png`: Logo principal.
    - `search.png`: Ícone de pesquisa.
    - `video_call.png`: Ícone relacionado a videochamadas.
- `favicon.ico`: Ícone que aparece na aba do navegador.
- `logo.png`:  Logo da Alura.
- `upload.png`: Ícone de upload de vídeo.

### 📁 js/

Arquivos JavaScript que implementam a lógica e interação da plataforma.

- `buscarVideo.js`: Funcionalidades de busca de vídeos.
- `conectaApi.js`: Lógica de conexão com a API (backend).
- `criarVideo.js`: Funcionalidades para criar/enviar novos vídeos.
- `mostrarVideos.js`: Funcionalidades para exibir vídeos na interface.

### 📁 pages/

Páginas HTML da plataforma.

- `enviar-video.html`: Formulário para enviar novos vídeos.
- `envio-concluido.html`: Página de confirmação de envio de vídeo.

### 📄 Arquivos da raiz

- `db.json`: Banco de dados JSON (usado para desenvolvimento local).
- `index.html`: Página inicial da plataforma. 
- `package.json`: Gerencia as dependências do projeto (se houver).

## Descrição do Projeto

Este projeto está presente no curso "JavaScript: consumindo e tratando dados de uma API" da plataforma alura

### Desenvolvimento

De começo foi disponibilizado o modelo HTML e CSS esperado ao consumir a API e o trabalho feito foi tornar o site dinamico com Javascript, fazendo requisições GET e POST em uma API utilizando json-server

### Funcionalidades

Com o consumo da API com o uso de responses o site é capaz de mostrar os iframes dos videos, junto com o icone do canal e o titulo do video, na barra de pesquisa é possivel pesquisar pelo video e ao clicar no botão de camera na direita o usuario é levado para uma pagina de postagem em que pode ser feito a postagem do video na API.

## Screenshots
![Screenshot da tela inicial do AluraPlay](https://imgur.com/aymxEsh.png)
![Screenshot da tela do formulário do AluraPlay](https://imgur.com/ShNADf2.png)

## Como usar

Como a API utilizada é uma API em json-server feita localmente na maquina é necessário a instalação de nodeJS e a utilização dos seguintes comandos

### Instalação do JSON Server
``` bash
npm install -g json-server@0.17.4
```

### Criação do Servidor JSON
``` bash
json-server --watch backend/db.json
```

O endereço retornado como padrão será *http://localhost:3000/videos*, em caso de um outro endereço o mesmo deve ser alterado no carquivo script.js 

```javascript
const conexao = await fetch('endereço__retornado')
```
