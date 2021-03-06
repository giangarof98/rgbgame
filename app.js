let numberOfSquares = 9
let squares = document.querySelectorAll('.square')
let colorDisplay = document.getElementById('colorDisplay')
let colors = generateRandomColors(numberOfSquares)
let pickedColor = pickColor();
let msg = document.getElementById('msg');
let h1 = document.querySelector('h1');
let resetBtn = document.getElementById('reset')
let easyBtn = document.getElementById('easyBtn');
let mediumBtn = document.getElementById('mediumBtn');
let hardBtn = document.getElementById('hardBtn');

easyBtn.addEventListener('click', function(){
    hardBtn.classList.remove('selected');
    mediumBtn.classList.remove('selected');
    easyBtn.classList.add('selected');

    numberOfSquares = 3
    colors = generateRandomColors(numberOfSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for(let i = 0; i < squares.length; i++){
        if(colors[i]){
            squares[i].style.backgroundColor = colors[i];
        } else {
            squares[i].style.display = 'none';
        }
    }
    msg.textContent = '';
    h1.style.backgroundColor = '#5171b1'


})

mediumBtn.addEventListener('click', function(){
    hardBtn.classList.remove('selected');
    mediumBtn.classList.add('selected');
    easyBtn.classList.remove('selected');

    numberOfSquares = 6;
    colors = generateRandomColors(numberOfSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for(let i = 0; i < squares.length; i++){
        if(colors[i]){
            squares[i].style.backgroundColor = colors[i];
            squares[i].style.display = 'block';

        } else {
            squares[i].style.display = 'none';
        }
    }
    msg.textContent = '';
    h1.style.backgroundColor = '#5171b1'


})

hardBtn.addEventListener('click', function(){
    hardBtn.classList.add('selected');
    easyBtn.classList.remove('selected');
    mediumBtn.classList.remove('selected');

    numberOfSquares = 9;
    colors = generateRandomColors(numberOfSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for(let i = 0; i < squares.length; i++){
            squares[i].style.backgroundColor = colors[i];
            squares[i].style.display = 'block';
    }
    msg.textContent = '';
    h1.style.backgroundColor = '#5171b1'


})

resetBtn.addEventListener('click', function() {
    colors = generateRandomColors(numberOfSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    resetBtn.textContent = 'New Colors'
    for(let i = 0; i < squares.length; i++){
        squares[i].style.backgroundColor = colors[i];
    }
    h1.style.backgroundColor = '#5171b1'
    msg.textContent = ''
})

colorDisplay.textContent = pickedColor;

for(let i = 0; i < squares.length; i++){
    squares[i].style.backgroundColor = colors[i]
    squares[i].addEventListener('click', function() {
        var clickedColor = this.style.backgroundColor;
        if(clickedColor === pickedColor){
            msg.textContent = 'Correct'
            changeColor(clickedColor)
            h1.style.backgroundColor = clickedColor;
            resetBtn.textContent = 'Play again?'
        } else{
            msg.textContent = 'try again'
            this.style.backgroundColor = '#232323'
        }
    })
}

function changeColor(color){
    for(let i = 0; i < squares.length; i++){
        squares[i].style.backgroundColor = color
    }
}

function pickColor(){
    let random = Math.floor(Math.random() * colors.length)
    return colors[random];
}

function generateRandomColors(num){
    let arr = [];

    for(let i = 0; i < num; i++){
        arr.push(randomColor())
    }

    return arr;
}

function randomColor(){
    let r = Math.floor(Math.random() * 256)
    let g = Math.floor(Math.random() * 256)
    let b = Math.floor(Math.random() * 256)
    return "rgb("+ r + ', ' + g + ', ' + b +")"
}