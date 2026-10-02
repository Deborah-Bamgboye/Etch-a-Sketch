console.log("I live");
let mainContainer = document.querySelector('.container');
let button_para = document.createElement('div');
button_para.classList.add('buttonDiv');
let button = document.createElement('button');
button.classList.add('button')
button.textContent = 'Change no of squares'
button_para.appendChild(button)
mainContainer.appendChild(button_para)

let grid = document.createElement('div')
grid.classList.add('grid')
mainContainer.appendChild(grid)

let squareNumber = 16;

function createGrid() {
    for (let i = 0; i < squareNumber; i++) {
    grid_column = document.createElement('div')
    grid_column.classList.add('gridColumn')
    grid_column.setAttribute('id', `column${i + 1}`)
    grid.appendChild(grid_column);
    for (let q = 0; q < squareNumber; q++) {
        grid_square = document.createElement('div');
         grid_square.classList.add('gridSquare')
    grid_square.setAttribute('id', `box${q + 1}`)
    grid_column.appendChild(grid_square); 
    }

    
}
}
createGrid()



function colorME() {
    squares = document.querySelectorAll('.gridSquare')
for (let i = 0; i < squares.length; i++) {
    const square = squares[i];
        let iscoloured = false
        let opacity = 0.1
    square.addEventListener('mouseover', function () {
        //square.classList.add('color')
        
        if (!iscoloured){
        square.setAttribute('style', `background-color: rgb(${(Math.floor(Math.random()*255))} ${(Math.floor(Math.random()*255))} ${(Math.floor(Math.random()*255))});`)
        iscoloured = true
        } 
        if (opacity < 1) {
                opacity += 0.1;
                
            }
        square.style.opacity = opacity})
    
}
}

colorME()

button.addEventListener('click', function(){
    squareNumber = +(prompt('how many squares per row'))
    if (isFinite(squareNumber) && squareNumber <= 100){
        grid.innerHTML = " "
        createGrid()
        colorME()
    }
})

