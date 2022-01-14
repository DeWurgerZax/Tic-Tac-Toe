'use strict';

const field = document.getElementById('field');
const playerTurn = document.getElementById('playerTurn');
const result = document.getElementById('result');
const resetBtn = document.getElementById('resetBtn');

const mark = (event) => {
  let cell = event.target;
  if(cell.style.backgroundImage === 'none'){
    if(playerTurn.textContent === 'First Player Turn'){
      cell.style.backgroundColor = 'black';
      cell.style.backgroundImage = 'url(imgs/cross.png)';
      cell.style.backgroundColor = 'white';
      playerTurn.textContent = 'Second Player Turn';
      playerTurn.style.backgroundImage = 'linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,0,0,0) 50%, rgba(255,0,0,1) 100%)';
    } else{
      cell.style.backgroundColor = 'black';
      cell.style.backgroundImage = 'url(imgs/circle.png)';
      cell.style.backgroundColor = 'white';
      playerTurn.textContent = 'First Player Turn';
      playerTurn.style.backgroundImage = 'linear-gradient(90deg, rgba(14,0,255,1) 0%, rgba(14,0,255,0) 50%, rgba(255,255,255,1) 100%)';
    }
  } 
  check();
}

field.addEventListener('click', mark);

const check = () => {
  const fChen = field.children;
  if(fChen[0].style.backgroundImage === fChen[1].style.backgroundImage
    && fChen[0].style.backgroundImage === fChen[2].style.backgroundImage
    && fChen[1].style.backgroundImage === fChen[2].style.backgroundImage
    && fChen[0].style.backgroundImage !== 'none'
    && fChen[1].style.backgroundImage !== 'none'
    && fChen[2].style.backgroundImage !== 'none') {
      result.style.transform = 'translateY(0)';
    }
  else if(fChen[0].style.backgroundImage === fChen[3].style.backgroundImage
    && fChen[0].style.backgroundImage === fChen[6].style.backgroundImage
    && fChen[3].style.backgroundImage === fChen[6].style.backgroundImage
    && fChen[0].style.backgroundImage !== 'none'
    && fChen[3].style.backgroundImage !== 'none'
    && fChen[6].style.backgroundImage !== 'none') {
      result.style.transform = 'translateY(0)';
    }
  else if(fChen[0].style.backgroundImage === fChen[4].style.backgroundImage
    && fChen[0].style.backgroundImage === fChen[8].style.backgroundImage
    && fChen[4].style.backgroundImage === fChen[8].style.backgroundImage
    && fChen[0].style.backgroundImage !== 'none'
    && fChen[4].style.backgroundImage !== 'none'
    && fChen[8].style.backgroundImage !== 'none') {
      result.style.transform = 'translateY(0)';
    }
  else if(fChen[3].style.backgroundImage === fChen[4].style.backgroundImage
    && fChen[3].style.backgroundImage === fChen[5].style.backgroundImage
    && fChen[4].style.backgroundImage === fChen[5].style.backgroundImage
    && fChen[3].style.backgroundImage !== 'none'
    && fChen[4].style.backgroundImage !== 'none'
    && fChen[5].style.backgroundImage !== 'none') {
      result.style.transform = 'translateY(0)';
    }
  else if(fChen[6].style.backgroundImage === fChen[7].style.backgroundImage
    && fChen[6].style.backgroundImage === fChen[8].style.backgroundImage
    && fChen[7].style.backgroundImage === fChen[8].style.backgroundImage
    && fChen[6].style.backgroundImage !== 'none'
    && fChen[7].style.backgroundImage !== 'none'
    && fChen[8].style.backgroundImage !== 'none') {
      result.style.transform = 'translateY(0)';
    }
  else if(fChen[1].style.backgroundImage === fChen[4].style.backgroundImage
    && fChen[1].style.backgroundImage === fChen[7].style.backgroundImage
    && fChen[4].style.backgroundImage === fChen[7].style.backgroundImage
    && fChen[1].style.backgroundImage !== 'none'
    && fChen[4].style.backgroundImage !== 'none'
    && fChen[7].style.backgroundImage !== 'none') {
      result.style.transform = 'translateY(0)';
    }
  else if(fChen[2].style.backgroundImage === fChen[5].style.backgroundImage
    && fChen[2].style.backgroundImage === fChen[8].style.backgroundImage
    && fChen[5].style.backgroundImage === fChen[8].style.backgroundImage
    && fChen[2].style.backgroundImage !== 'none'
    && fChen[5].style.backgroundImage !== 'none'
    && fChen[8].style.backgroundImage !== 'none') {
      result.style.transform = 'translateY(0)';
  }
  else if(fChen[2].style.backgroundImage === fChen[4].style.backgroundImage
    && fChen[2].style.backgroundImage === fChen[6].style.backgroundImage
    && fChen[4].style.backgroundImage === fChen[6].style.backgroundImage
    && fChen[2].style.backgroundImage !== 'none'
    && fChen[4].style.backgroundImage !== 'none'
    && fChen[6].style.backgroundImage !== 'none') {
      result.style.transform = 'translateY(0)';
  }
}

const reset = () =>{
  const cells = field.children;
  for(let i = 0; i < cells.length; i += 1){
    cells[i].style.backgroundImage = 'none';
    cells[i].style.backgroundColor = 'grey';
  }
  result.style.transform = 'translateY(-100vh)';
}

resetBtn.addEventListener('click', reset);