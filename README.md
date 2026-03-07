# 📚 Biblioteca Pessoal Digital

Protótipo de baixa fidelidade de um sistema de gerenciamento de biblioteca pessoal digital, criado originalmente no Figma Make e desenvolvido em versão web funcional.

## 📋 Sobre o Projeto

A Biblioteca Pessoal Digital é uma aplicação web para dispositivos móveis que permite gerenciar sua coleção pessoal de livros e revistas.

## ✨ Funcionalidades

- **Dashboard**: Visualização geral com estatísticas de leitura
  - Total de publicações
  - Contadores de status (Não lidos, Lendo, Lidos)
  - Meta anual de leitura com barra de progresso
  - Publicações mais bem avaliadas

- **Publicações**: Gerenciamento completo do acervo
  - Busca por título ou autor
  - Filtros por status de leitura
  - Listagem de todas as publicações

- **Nova Publicação**: Adicionar novos itens à biblioteca
-
- **Relatórios**: Análise e estatísticas de leitura

- **Configurações**: Personalização da aplicação

## 🛠️ Tecnologias Utilizadas

- **HTML5**: Estrutura semântica das páginas
- **CSS3**: Estilização e design responsivo
  - `/css/styles.css`: Estilos principais
  - `/css/styles-screen.css`: Estilos para visualização em moldura (simulador de iPhone)
- **JavaScript/TypeScript**: Interatividade e funcionalidades
  - Menu hambúrguer responsivo
  - Navegação entre páginas
  - Acessibilidade com ARIA

## 📁 Estrutura do Projeto

```
Biblioteca Pessoal Digital/
│
├── index.html                     # Página inicial com moldura de iPhone
├── 404.html                       # Página de erro
├── README.md                      # Este arquivo
│
├── /css/
│   ├── styles.css                 # Estilos principais
│   └── styles-screen.css          # Estilos para moldura do dispositivo
│
├── /js/
│   └── script.js                  # Lógica JavaScript (menu, navegação)
│
└── /pages/
    ├── dashboard.html             # Dashboard principal
    ├── publicacoes.html           # Lista de publicações
    ├── nova-publicacao.html       # Formulário para adicionar publicação
    ├── relatorios.html            # Página de relatórios
    └── configuracoes.html         # Configurações do sistema
```

## 🚀 Como Acessar

1. **Acesso online (GitHub Pages)**

- Projeto publicado em: `https://rubenspaulo.github.io/biblioteca-pessoal-digital`

2. **Execução local (opcional)**

- Clone o repositório (ou baixe os arquivos)

```bash
git clone <url-do-repositorio>
cd "Biblioteca Pessoal Digital"
```

- Para visualização com moldura de iPhone: abra `index.html`
- Para visualização direta: abra `dashboard.html`

3. **Servidor local (recomendado para desenvolvimento)**

```bash
# Com Python
python -m http.server 8000

# Com Node.js (http-server)
npx http-server

# Com PHP
php -S localhost:8000
```

- Acesse: `http://localhost:8000`

## 🎨 Design

O projeto mantém a estética de protótipo de baixa fidelidade:

- Elementos de placeholder como `[ÍCONE]` e `[★]`
- Tipografia monoespaçada característica
- Interface minimalista e focada em funcionalidade
- Design responsivo com menu hambúrguer

## ♿ Acessibilidade

O projeto implementa boas práticas de acessibilidade:

- Atributos ARIA para leitores de tela (`aria-label`, `aria-expanded`)
- Navegação por teclado
- Estrutura semântica HTML5
- Contraste adequado de cores

## 📱 Responsividade

- Menu hambúrguer para dispositivos móveis
- Layout adaptável a diferentes tamanhos de tela
- Visualização em moldura de iPhone para demonstração

## 🔄 Estado Atual

Este é um **protótipo funcional** com:

- ✅ Interface completa
- ✅ Navegação entre páginas
- ✅ Menu responsivo
- ⏳ Funcionalidades de backend (a implementar)
- ⏳ Persistência de dados (a implementar)
- ⏳ Sistema de busca e filtros (a implementar)

## 🎯 Próximos Passos

- [ ] Implementar persistência de dados (LocalStorage ou Backend)
- [ ] Adicionar funcionalidade de busca real
- [ ] Implementar filtros nas publicações
- [ ] Sistema de avaliação de livros
- [ ] Gráficos e relatórios dinâmicos

**Nota**: Este é um protótipo de baixa fidelidade criado para uma atividade acadêmica.
