# Site NADIA

Site estático do NADIA - Núcleo de Análise de Dados e Inteligência Artificial.

## Como publicar no GitHub Pages

1. Crie um repositório no GitHub, por exemplo: `nadia-site`.
2. Envie todos os arquivos desta pasta para o repositório.
3. No GitHub, acesse **Settings > Pages**.
4. Em **Build and deployment**, escolha:
   - Source: `Deploy from a branch`
   - Branch: `main`
   - Folder: `/root`
5. Clique em **Save**.
6. O GitHub irá gerar um link público para o site.

## Estrutura

- `index.html`: página principal.
- `styles.css`: estilos, identidade visual e responsividade.
- `script.js`: menu responsivo.
- `assets/nadia-logo.png`: logomarca do grupo.
- `assets/pessoas/`: fotos do time.
- `projetos/`: páginas individuais dos projetos.

## Edição rápida

### Alterar textos da página principal
Edite o arquivo `index.html`. As principais seções estão marcadas por `id`, como:

- `#sobre`
- `#atuacao`
- `#projetos`
- `#time`
- `#egressos`
- `#depoimentos`
- `#publicacoes`
- `#locais`
- `#contato`

### Atualizar fotos das pessoas
1. Coloque as fotos na pasta `assets/pessoas/`.
2. O ideal é usar imagens quadradas, em JPG ou PNG, com pelo menos 800 x 800 px.
3. As fotos dos líderes já estão salvas como `gabriel-lunardi.jpg` e `adriano-quiliao.jpg`. Para trocar alguma foto, substitua o arquivo mantendo o mesmo nome, ou altere o caminho da imagem no bloco `#time` do arquivo `index.html`.

Exemplo:

```html
<img src="assets/pessoas/nome-da-pessoa.jpg" alt="Foto de Nome da Pessoa" />
```

### Adicionar uma nova pessoa ao time
Copie um bloco `article` da seção `#time`, altere nome, função, descrição e foto.

### Alterar projetos
Edite os arquivos dentro de `projetos/`.

### Adicionar novo projeto
1. Copie uma página existente da pasta `projetos/`.
2. Renomeie o arquivo.
3. Altere o conteúdo da página.
4. Adicione um novo card na seção `Projetos em destaque` do `index.html`.

### Atualizar locais físicos
Edite a seção `#locais` do arquivo `index.html`. O campo “Sala XPTO” foi mantido como marcador para atualização quando a sala definitiva do campus de Cachoeira do Sul for confirmada.

### Mudar cores, espaçamentos ou layout
Edite `styles.css`.

## Redes sociais

O site aponta para o Instagram do grupo: https://www.instagram.com/nadia.ufsm/


## Atualização v6

- A foto do professor Gabriel Machado Lunardi foi substituída pelo arquivo `assets/pessoas/gabriel-lunardi.jpg`.
- A seção de projetos agora apresenta apenas: curso de Ciência de Dados e IA; guia de IA generativa e agente conversacional; automatização de fichas SINAN; gestão de medicamentos para tuberculose; análise dos indicadores DEC e FEC da ANEEL.
- Para editar um projeto, altere o card em `index.html` e a página correspondente na pasta `projetos/`.
- Os projetos antigos de recomendação, visão computacional e agentes genéricos foram removidos do menu de projetos, preservando essas áreas como expertises do grupo na seção “Atuação”.
