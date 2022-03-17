let squares = document.querySelectorAll('.square')
let colorDisplay = document.getElementById('colorDisplay')
let colors = generateRandomColors(6)
let pickedColor = pickColor();
let msg = document.getElementById('msg');
let h1 = document.querySelector('h1');
let resetBtn = document.getElementById('reset')

resetBtn.addEventListener('click', function() {
    colors = generateRandomColors(6);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for(let i = 0; i < squares.length; i++){
        squares[i].style.backgroundColor = colors[i];
    }
    h1.style.backgroundColor = '#232323'

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