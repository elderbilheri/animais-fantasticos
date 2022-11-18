export default function initDropdownMenu() {
  const dropdownMenus = document.querySelectorAll("[data-dropdown]");

  function outsideClick(element, callback) {
    const html = document.documentElement;
    html.addEventListener("click", handleOutsideClick);
    function handleOutsideClick(event) {
      if (!element.contains(event.target)) {
        callback();
      }
    }
  }

  function handleClick(event) {
    event.preventDefault();
    this.classList.add("ativo");
    outsideClick(this, () => {
      this.classList.remove("ativo");
    });
  }

  dropdownMenus.forEach((menu) => {
    ["touchstart", "click"].forEach((userEvent) => {
      menu.addEventListener(userEvent, handleClick);
    });
  });
}
