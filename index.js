const button = document.querySelector(".navigation-button");
const listMenu = document.querySelector(".list-menu");
const iconX = document.querySelector(".fa-x");
const iconBars = document.querySelector(".fa-bars");

button.addEventListener("click", () => {
  listMenu.classList.toggle("hidden");
  iconX.classList.toggle("visible");
  iconX.classList.toggle("hidden");
  iconBars.classList.toggle("visible");
  iconBars.classList.toggle("hidden");
});
