import "./styles.css";
import createHomeContent from "./pageLoad";
import createMenuContent from "./menu";
import createContactContent from "./contact.js"

function clearContent() {
  const contentDiv = document.getElementById('content');
  contentDiv.innerHTML = '';
}

document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('nav button');

  const homeBtn = buttons[0];
  const menuBtn = buttons[1];
  const contactBtn = buttons[2];

  createHomeContent();

  homeBtn.addEventListener('click', () => {
    clearContent();
    createHomeContent();
  });

  menuBtn.addEventListener('click', () => {
    clearContent();
    createMenuContent();
  });

  contactBtn.addEventListener('click', () => {
    clearContent();
    createContactContent();
  })
})
