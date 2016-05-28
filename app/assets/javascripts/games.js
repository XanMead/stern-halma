$(document).ready(function() {
    renderBoard();
});

var RADIUS = 10; // Radius of spaces in pixels
var boardModel = [[0,  0,  0,  0,  0,  0,  1,  0,  0,  0,  0,  0,  0],
                    [0,  0,  0,  0,  0,  1,  1,  0,  0,  0,  0,  0,  0],
                  [0,  0,  0,  0,  0,  1,  1,  1,  0,  0,  0,  0,  0],
                    [0,  0,  0,  0,  1,  1,  1,  1,  0,  0,  0,  0,  0],
                  [1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1],
                    [1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  0],
                  [0,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  0],
                    [0,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  0,  0],
                  [0,  0,  1,  1,  1,  1,  1,  1,  1,  1,  1,  0,  0],
                    [0,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  0,  0],
                  [0,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  0],
                    [1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  0],
                  [1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1],
                    [0,  0,  0,  0,  1,  1,  1,  1,  0,  0,  0,  0,  0],
                  [0,  0,  0,  0,  0,  1,  1,  1,  0,  0,  0,  0,  0],
                    [0,  0,  0,  0,  0,  1,  1,  0,  0,  0,  0,  0,  0,  0],
                  [0,  0,  0,  0,  0,  0,  1,  0,  0,  0,  0,  0,  0]];
function renderBoard() {
    for (var y = 0; y < 17; y++) {
        for (var x = 0; x < 13; x++) {
            if (boardModel[y][x]) {
                var topVal = y*rowDisplacement();
                // Spaces will be shifted to the right in every other row
                var leftVal = (2*RADIUS*x) + ((y%2)*RADIUS);
                var space = $("<div></div>");
                space.attr({
                    id: x + '-' + y,
                    class: 'space'
                });
                space.css({
                    top: topVal,
                    left: leftVal,
                    height: (1.8*RADIUS) + 'px',
                    width: (1.8*RADIUS) + 'px'
                });
                $('#board').append(space);
            }
        }
    }
}

// Calculates the vertical displacement of each row of spaces
function rowDisplacement() {
    return RADIUS*Math.sqrt(3);
}
