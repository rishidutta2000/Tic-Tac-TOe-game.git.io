var restart = document.querySelectorAll(".btn")[0].children[0];
console.log(restart)
var squares = document.querySelectorAll('td');

function clearBoard(){
  for(var i = 0; i < squares.length; i++) {
    squares[i].textContent = '';
  }
}

restart.addEventListener('click',clearBoard);

function changeMaker(){
  if(this.textContent === ''){
    this.textContent='X';
  }else if (this.textContent === 'X') {
    this.textContent='o';
  }else{
    this.textContent='';
  }



}
for(var i=0;i<squares.length;i++){
  squares[i].addEventListener('click',changeMaker)
}
