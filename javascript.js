const grid = document.getElementById('grid');
let boxes = [];

function randomColorGenerator() {
    return Math.floor(Math.random()*16777215).toString(16);
}

for (let i = 0; i < 16; i++) {
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
