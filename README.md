# Biblioteca Pessoal Digital

Protótipo web de uma biblioteca pessoal digital, desenvolvido para atividade academica.

## Objetivo desta branch

A branch `main` representa a versao de baixa fidelidade (low-fi), com foco em:

- estrutura das telas
- fluxo de navegacao
- estados de interface (placeholders e vazios)
- validacao da ideia antes de refinamento visual

## Versoes do prototipo

- `main`: prototipo de baixa fidelidade (versao de entrega)
- `prototype/medium-fi`: prototipo de media fidelidade (versao visual mais elaborada)

<<<<<<< HEAD
- **Nova Publicação**: Adicionar novos itens à biblioteca

- **Relatórios**: Análise e estatísticas de leitura
=======
## Escopo funcional
>>>>>>> e6287b8 (feat: padroniza prototipo low-fi para entrega academica)

O prototipo contem as seguintes paginas:

- Dashboard
- Publicacoes
- Nova Publicacao
- Relatorios
- Configuracoes
- 404

## Tecnologias

- HTML5
- CSS3
- JavaScript

## Estrutura do projeto

```text
Biblioteca Pessoal Digital/
|- index.html
|- 404.html
|- README.md
|- css/
|  |- styles.css
|  `- styles-screen.css
|- js/
|  `- script.js
`- pages/
   |- dashboard.html
   |- publicacoes.html
   |- nova-publicacao.html
   |- relatorios.html
   `- configuracoes.html
```

## Como executar localmente

Acesso online (GitHub Pages):

- `https://rubenspaulo.github.io/biblioteca-pessoal-digital`

Opcao 1:

- abrir `index.html` para visualizar o projeto na moldura de dispositivo

Opcao 2 (recomendado):

```bash
python -m http.server 8000
```

Depois, acesse `http://localhost:8000`.

## Observacoes

- Este repositorio separa evolucao visual por branch para facilitar comparacao e apresentacao.
- A versao low-fi prioriza clareza de estrutura, nao acabamento visual final.
