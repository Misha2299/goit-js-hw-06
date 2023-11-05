const controlsDiv = document.querySelector("#controls");
const boxesDiv = document.querySelector("#boxes");

const createButton = controlsDiv.querySelector("[data-create]");
const destroyButton = controlsDiv.querySelector("[data-destroy]");
const input = controlsDiv.querySelector("input");

createButton.addEventListener("click", createBoxes);
destroyButton.addEventListener("click", destroyBoxes);

function createBoxes() {
  const amount = input.value;
  for (let i = 0; i < amount; i++) {
    const size = 30 + i * 10;
    const div = document.createElement("div");
    div.style.width = `${size}px`;
    div.style.height = `${size}px`;
    div.style.backgroundColor = getRandomHexColor();
    boxesDiv.appendChild(div);
  }
};

function destroyBoxes() {
  boxesDiv.innerHTML = "";
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
};
