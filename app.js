let squares = document.querySelectorAll('.square')
let colorDisplay = document.getElementById('colorDisplay')
let colors = [
    'rgb(255, 0, 0)',
    'rgb(255, 255, 0)',
    'rgb(255, 0, 255)',
    'rgb(0, 255, 0)',
    'rgb(0, 0, 255)',
    'rgb(0, 255, 255)',
];
let pickedColor = colors[3]
colorDisplay.textContent = pickedColor

for(let i = 0; i < squares.length; i++){
    squares[i].style.backgroundColor = colors[i]
    squares[i].addEventListener('click', function() {
        var clickedColor = this.style.backgroundColor;
        if(clickedColor === pickedColor){
            alert('correct');
        } else{
            alert('try again!')
        }
    })
}