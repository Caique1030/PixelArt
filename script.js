let paletas = document.querySelectorAll('.color');
paletas[0].style.backgroundColor = 'black';
paletas[1].style.backgroundColor = 'blue';
paletas[2].style.backgroundColor = 'green';
paletas[3].style.backgroundColor = 'pink';


let colors=document.querySelector('#color-palette');


colors.addEventListener('click',function(event){
    const colorSelected=document.querySelector('.selected');
    colorSelected.classList.remove('selected');
    event.target.classList.add('selected');
})
  