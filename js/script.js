/* ========================================================================
 * MENU (abertura/fechamento do hambúrguer)
 * ======================================================================*/
class Nav {
  constructor() {
      // Busca o botão no HTML pelo ID e força o tipo (casting) para Button
      this.btn = document.getElementById('btn-menu');
      // Busca o elemento do menu pelo ID
      this.menu = document.getElementById('menu-links');
      // Verificação de segurança: só prossegue se ambos os elementos existirem na página
      if (this.btn && this.menu) {
          // Chama o método que vai "escutar" as interações do usuário
          this.bindEvents();
      }
  }
  bindEvents() {
      var _a, _b;
      // Abre/fecha ao clicar no botão
      // A interrogação (?.) é o optional chaining do TypeScript/JavaScript.
      // “Só execute a próxima parte se o que vem antes não for null nem undefined.
      // Se for, pare tudo silenciosamente.”
      (_a = this.btn) === null || _a === void 0 ? void 0 : _a.addEventListener('click', () => this.toggleMenu());
      // Se clicar em um link (âncora) dentro do menu, ele fecha sozinho
      (_b = this.menu) === null || _b === void 0 ? void 0 : _b.addEventListener('click', (e) => {
          const target = e.target;
          if (target.tagName === 'A') {
              this.closeMenu();
          }
      });
  }
  toggleMenu() {
      // Validação de segurança: se o menu ou botão sumirem do DOM, interrompe a função
      if (!this.menu || !this.btn)
          return;
      // Alterna a classe 'active' no menu: se tiver, remove; se não tiver, adiciona
      // A variável 'isOpen' recebe true se a classe foi adicionada, ou false se removida
      const isOpen = this.menu.classList.toggle('active');
      // Alterna a classe 'open' no botão (usada para animar o ícone do hambúrguer para o X)
      this.btn.classList.toggle('open');
      // Atualiza o atributo ARIA para que cegos ou pessoas com baixa visão saibam 
      // via leitor de tela se o conteúdo do menu está expandido (true) ou recolhido (false)
      this.btn.setAttribute('aria-expanded', isOpen.toString());
  }
  closeMenu() {
      var _a, _b;
      // O uso do '?' (Optional Chaining) tenta remover a classe 'active' apenas se 'this.menu' existir
      (_a = this.menu) === null || _a === void 0 ? void 0 : _a.classList.remove('active');
      // Remove a classe 'open' do botão, forçando o ícone a voltar ao estado de hambúrguer
      (_b = this.btn) === null || _b === void 0 ? void 0 : _b.classList.remove('open');
  }
}

window.addEventListener('DOMContentLoaded', () => {
  new Nav(); // Instancia o menu
});