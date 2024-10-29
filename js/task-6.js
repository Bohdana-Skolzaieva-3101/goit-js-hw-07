function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const input = document.querySelector('#controls input[type="number"]');
const createButton = document.querySelector('button[data-create]');
const destroyButton = document.querySelector('button[data-destroy]');
const boxesContainer = document.querySelector('#boxes');


createButton.addEventListener('click', createBoxes);
destroyButton.addEventListener('click', destroyBoxes);


function createBoxes() {
  const amount = Number(input.value);


  if (amount < 1 || amount > 100) {
      return; 
  }

  destroyBoxes(); 

  const boxes = [];

  for (let i = 0; i < amount; i++) {
      const size = 30 + i * 10; 
      const box = document.createElement('div');
      box.style.width = `${size}px`; 
      box.style.height = `${size}px`; 
      box.style.backgroundColor = getRandomHexColor(); 
      boxes.push(box); 
  }

  boxesContainer.append(...boxes);

  input.value = '';
}

function destroyBoxes() {
  boxesContainer.innerHTML = '';
}
