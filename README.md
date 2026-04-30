# Site do NADIA

Versão atualizada com hero inicial reformulado.

## O que foi alterado
- logo principal atualizada para a versão branca com fundo transparente;
- hero inicial simplificado, sem cards e sem a logo sobreposta ao conteúdo;
- fundo do hero com imagens reais desfocadas em rotação automática;
- botões principais: **Conheça projetos** e **Equipe**;
- favicon incluído em todas as páginas;
- visual geral mantido leve e compatível com GitHub Pages.

## Arquivos principais
- `index.html` → página inicial;
- `styles.css` → estilos gerais do site e das páginas de projetos;
- `script.js` → menu mobile e rotação automática das imagens do hero;
- `assets/nadia-logo-branco.svg` → logo atual do menu;
- `assets/icons/favicon.png` → favicon do site;
- `assets/hero/` → imagens de fundo do hero inicial.

## Como trocar o texto principal do topo
No arquivo `index.html`, edite o bloco:
- `<h1>...</h1>`
- `<p class="hero-text">...</p>`

## Como trocar as imagens do topo
Substitua os arquivos dentro de `assets/hero/` e, se necessário, ajuste os caminhos no bloco `.hero-background` do `index.html`.

## Publicação no GitHub Pages
Se o repositório for de projeto, o endereço padrão será algo como:
`https://gmlunardi.github.io/nome-do-repositorio/`

Se quiser usar um domínio personalizado, crie um arquivo `CNAME` na raiz do site com o domínio desejado e configure os registros DNS no seu provedor.


## Atualização do time
- A foto do professor Thiago está em `assets/pessoas/thiago-trugillo.png`.
- Para editar o texto dos integrantes, altere a seção `Time NADIA` no arquivo `index.html`.
