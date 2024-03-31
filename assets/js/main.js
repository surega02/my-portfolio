/*=============== SHOW MENU ===============*/
const navMenu = document.querySelector(".nav-menu");

document.querySelector(".nav-toggle").onclick = () => {
  navMenu.classList.add("show-menu");
};

document.querySelector(".nav-close").onclick = () => {
  navMenu.classList.remove("show-menu");
};
/*=============== CHANGE BACKGROUND HEADER ===============*/
const bgHeader = () => {
  const header = document.querySelector("#header");
  this.scrollY >= 160 ? header.classList.add("bg-header") : header.classList.remove("bg-header");
};

window.addEventListener("scroll", bgHeader);

/*=============== DARK LIGHT THEME ===============*/
const themeButton = document.querySelector("#theme-button");
const darkTheme = "dark-theme";
const iconTheme = "ri-sun-line";

// Selected theme (if user selected)
const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon");

// dark-theme class
const getCurrentTheme = () => (document.body.classList.contains("darkTheme") ? "dark" : "light");
const getCurrentIcon = () => (themeButton.classList.contains("iconTheme") ? "ri-moon-line" : "ri-sun-line");

// we validate if the user previously choose a topic
if (selectedTheme) {
  // if the validate is fulfilled
  document.body.classList[selectedTheme === "dark" ? "add" : "remove"](darkTheme);
  themeButton.classList[selectedIcon === "ri-moon-line" ? "add" : "remove"](iconTheme);
}

// active / deactive
themeButton.addEventListener("click", () => {
  // add or remove theme
  document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(iconTheme);
  // save into local storage
  localStorage.setItem("selected-theme", getCurrentTheme);
  localStorage.setItem("selected-icon", getCurrentIcon);
});
