function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const inputEl = document.querySelector('#controls input[type="number"]');
const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');
const boxesContainer = document.getElementById('boxes');

function createBoxes(amount) {
  boxesContainer.innerHTML = '';

  let size = 30;
  const square = document.createDocumentFragment();

  for (let i = 0; i < amount; i++) {
    const box = document.createElement('div');
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor();
    square.appendChild(box);
    size += 10;
  }

  boxesContainer.appendChild(square);
}

function destroyBoxes() {
  boxesContainer.innerHTML = '';
}

createBtn.addEventListener('click', () => {
  const amount = parseInt(inputEl.value.trim(), 10);

  if (isNaN(amount) || amount < 1 || amount > 100) {
    return;
  }

  createBoxes(amount);
  inputEl.value = '';
});

destroyBtn.addEventListener('click', destroyBoxes);
