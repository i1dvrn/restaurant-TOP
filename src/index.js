import "./styles.css";
import createHome from "./home.js";
import createMenu from "./menu.js";
import createContact from "./contact.js";

console.log("Restaurant page loaded");

const content = document.querySelector("#content");
const buttons = document.querySelectorAll("nav button");

const tabs = {
  home: createHome,
  menu: createMenu,
  contact: createContact,
};

function showTab(name) {
  content.replaceChildren();
  content.appendChild(tabs[name]());

  buttons.forEach((button) => {
    button.classList.toggle("active", button.dataset.tab === name);
  });
}

buttons.forEach((button) => {
  button.addEventListener("click", () => showTab(button.dataset.tab));
});

// Initial page load
showTab("home");
