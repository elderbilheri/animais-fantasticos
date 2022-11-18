export default function initAnimacaoScroll() {
  const sectionsMenu = document.querySelectorAll('[data-anime="scroll"]');

  function animaScroll() {
    sectionsMenu.forEach((secMenu) => {
      const secTop = secMenu.getBoundingClientRect().top;
      const alturaTela = window.innerHeight * 0.5;
      const SecVisivel = secTop - alturaTela < 0;

      if (SecVisivel) secMenu.classList.add("ativo");
      else if (secMenu.classList.contains("ativo")) {
        secMenu.classList.remove("ativo");
      }
    });
  }

  if (sectionsMenu.length) {
    animaScroll();
    window.addEventListener("scroll", animaScroll);
  }
}
