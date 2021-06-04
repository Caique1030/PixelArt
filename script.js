const boar = '#board-size';

function gerarCorRandomicamente() {
  const r = Math.random() * 255;
  const g = Math.random() * 255;
  const b = Math.random() * 255;

  return `rgb(${r}, ${g}, ${b})`;
}

const paletas = document.querySelectorAll('.color');
paletas[0].style.backgroundColor = 'black';
paletas[1].style.backgroundColor = gerarCorRandomicamente();
paletas[2].style.backgroundColor = gerarCorRandomicamente();
paletas[3].style.backgroundColor = gerarCorRandomicamente();

const btnLimpar = document.querySelector('#clear-board');
const colors = document.querySelector('#color-palette');
const btnGenerate = document.querySelector('#generate-board');

colors.addEventListener('click', (event) => {
  const colorSelected = document.querySelector('.selected');
  colorSelected.classList.remove('selected');
  event.target.classList.add('selected');
});

const divPixelBoard = document.querySelector('#pixel-board');
let colorSelected = 'rgb(0, 0, 0)';
colors.addEventListener('click', () => {
  const selectedColor = document.querySelector('.selected');
  colorSelected = getComputedStyle(selectedColor).backgroundColor;
  return colorSelected;
});

divPixelBoard.addEventListener('click', (click) => {
  const clickMouse = click;
  clickMouse.target.style.backgroundColor = colorSelected;
});

btnLimpar.addEventListener('click', () => {
  const pixelBoard = document.querySelectorAll('.pixel');
  for (let i = 0; i < pixelBoard.length; i += 1) {
    pixelBoard[i].style.backgroundColor = 'white';
  }
});

function removeTable() {
  const line = document.querySelectorAll('.linha');
  const board = document.querySelector(boar);
  if (board.value > 5 || board.value < 50) {
    for (let i = 0; i < line.length; i += 1) {
      line[i].remove();
    }
  }
}

function limitInput() {
  const size = document.querySelector(boar);
  if (size.value < 5) {
    size.value = 5;
  }
  if (size.value > 50) {
    size.value = 50;
  }
}

function inputValue() {
  const input = document.querySelector(boar);
  if (input.value < 5 || input.value > 50) {
    return alert('Board inválido!');
  }
}

function insertCell(newLine) {
  const boardSize = document.querySelector(boar);
  for (let indexPixel = 0; indexPixel < boardSize.value; indexPixel += 1) {
    const newPixel = newLine.insertCell(indexPixel);
    newPixel.classList.add('pixel');
  }
}
btnGenerate.addEventListener('click', () => {
  inputValue();
  limitInput();
  removeTable();
  const boardSize = document.querySelector(boar);
  const line = document.querySelectorAll('.linha');
  const table = document.querySelector('.table');
  if (line.length < boardSize.value) {
    for (let indexLinha = 0; indexLinha < boardSize.value; indexLinha += 1) {
      const newLine = table.insertRow(indexLinha);
      newLine.classList.add('linha');
      insertCell(newLine);
    }
  }
});
