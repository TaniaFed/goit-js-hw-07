const changeColorbtn = document.querySelector(`button.change-color`);

const span = document.querySelector(`span.color`);

changeColorbtn.addEventListener("click", changeColor);

function changeColor() {
  const color = getRandomHexColor();
  document.body.style.backgroundColor = color;
  span.textContent = color;
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
};









