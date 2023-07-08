const grid = document.getElementById('grid');
let boxes = [];

function randomColorGenerator() {
    return Math.floor(Math.random()*16777215).toString(16);
}

function makeSquares(numSquares) {
    if (grid.childElementCount != 0) {
        for (let i = boxes.length - 1; i >= 0; i--) {
            grid.removeChild(boxes[i]);
            boxes.splice(i, 1);
        }
    }

    for (let i = 0; i < Math.pow(numSquares, 2); i++) {
        boxes[i] = document.createElement('div');
        boxes[i].className = 'flexSquare';
        boxes[i].id = 'flexSquare' + (i + 1);
        boxes[i].addEventListener("mouseover", () => {
            boxes[i].style.backgroundColor = "#" + randomColorGenerator();
    
            setTimeout( () => {
                boxes[i].style.backgroundColor = "white";
            }, 500);
        });
        grid.appendChild(boxes[i]);
    }

    const squares = document.querySelectorAll(".flexSquare");
    squares.forEach((square) => {
        // @ts-ignore
        square.style.width = (900 / numSquares) + "px";
        // @ts-ignore
        square.style.height = (900 / numSquares) + "px";
    });

}

let numSquares;
document.getElementById('submitButton').onclick = () => {
    // @ts-ignore
    numSquares = document.getElementById("numSquares").value;
    if (numSquares >= 1 && numSquares <= 100) {
        makeSquares(numSquares);
    }
};