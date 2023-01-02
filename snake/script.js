let box = document.getElementById('box');
let key = window.addEventListener('keydown', move)
let posBox = box.getBoundingClientRect();
let x = posBox.x;
let y = posBox.y;
function move(a){
  if(a.key === 'd'){
    x+= 10;
    box.style.left   = `${x}px`;
    console.log(x,y)
  }
  if(a.key === 'a'){
    x-= 10;
    box.style.left = `${x}px`;
  }
  if(a.key === 's'){
    y+= 10;
    box.style.top = `${y}px`;
  }
  if(a.key === 'w'){
    y-= 10;
    box.style.top = `${y}px`;
  }
}