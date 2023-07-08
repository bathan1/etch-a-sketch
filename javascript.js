const grid = document.getElementById('grid');
let colorMode = "black";
let boxes = [];

function randomColorGenerator() {
    return Math.floor(Math.random()*16777215).toString(16);
}

function makeSquares(numSquares, colorMode) {
    if (grid.childElementCount != 0) {
        for (let i = boxes.length - 1; i >= 0; i--) {
            grid.removeChild(boxes[i]);
            boxes.splice(i, 1);
        }
    }
    if (colorMode === "random") {
        for (let i = 0; i < Math.pow(numSquares, 2); i++) {
            boxes[i] = document.createElement('div');
            boxes[i].className = 'flexSquare';
            boxes[i].id = 'flexSquare' + (i + 1);
            boxes[i].addEventListener("mouseover", () => {
                boxes[i].style.backgroundColor = "#" + randomColorGenerator();
            });
            grid.appendChild(boxes[i]);
        }
    }
    else if (colorMode === "black") {
        for (let i = 0; i < Math.pow(numSquares, 2); i++) {
            boxes[i] = document.createElement('div');
            boxes[i].className = 'flexSquare';
            boxes[i].id = 'flexSquare' + (i + 1);
            boxes[i].addEventListener("mouseover", () => {
                boxes[i].style.backgroundColor = "black";
            });
            grid.appendChild(boxes[i]);
        }   
    }

    const squares = document.querySelectorAll(".flexSquare");
    squares.forEach((square) => {
        // @ts-ignore
        square.style.width = (650 / numSquares) + "px";
        // @ts-ignore
        square.style.height = (650 / numSquares) + "px";
    });

}

let numSquares;
let totalSquares;
document.getElementById('submitButton').onclick = () => {
    // @ts-ignore
    numSquares = document.getElementById("numSquares").value;
    if (numSquares >= 1 && numSquares <= 100) {
        makeSquares(numSquares, colorMode);
        totalSquares = Math.pow(numSquares, 2);
    }
};

//@ts-ignore
document.getElementById("resetButton").onclick = () => {
    for (let i = 0; i < totalSquares; i++) {
        boxes[i].style.backgroundColor = "white";
    }
}

document.getElementById("randomButton").onclick = () => {
    colorMode = "random";
}

document.getElementById("blackButton").onclick = () => {
    colorMode = "black";
}