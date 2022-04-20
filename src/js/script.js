window.addEventListener("load", () => {
  const menuToggler = document.querySelector("[data-toggle='menuToggler']");
  const menu = document.querySelector("[data-toggle-target='menu']");

  menuToggler.addEventListener("click", () => {
    menuToggler.classList.toggle("active");
    menu.classList.toggle("hidden");
  });

  const setYear = (el, time) => {
    el.textContent = time.getFullYear();
  };

  const yearPlaceholder = document.querySelector(
    "[data-year='yearPlaceholder']"
  );

  const time = new Date();

  setYear(yearPlaceholder, time);
});
