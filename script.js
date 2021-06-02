const paletas = document.querySelectorAll('.color');
paletas[0].style.backgroundColor = 'black';
paletas[1].style.backgroundColor = 'blue';
paletas[2].style.backgroundColor = 'green';
paletas[3].style.backgroundColor = 'pink';

const colors = document.querySelector('#color-palette');

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
