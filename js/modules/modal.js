export default function initModal() {
  const botaoAbrir = document.querySelector('[data-modal="login"]');
  const botaoFechar = document.querySelector('[data-modal="btnFechar"]');
  const containerModal = document.querySelector('[data-modal="container"]');

  function toggleModal(event) {
    event.preventDefault();
    containerModal.classList.toggle("ativo");
  }

  function clickForaModal(event) {
    if (event.target === this) {
      toggleModal(event);
    }
  }

  if (botaoAbrir && botaoFechar && containerModal) {
    botaoAbrir.addEventListener("click", toggleModal);
    botaoFechar.addEventListener("click", toggleModal);
    containerModal.addEventListener("click", clickForaModal);
  }
}
