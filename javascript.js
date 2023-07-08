const grid = document.getElementById('grid');
let boxes = [];

for (let i = 0; i < 16; i++) {
    boxes[i] = document.createElement('div');
    boxes[i].className = 'flexSquare';
    boxes[i].id = 'flexSquare' + (i + 1);
    grid.appendChild(boxes[i]);
}