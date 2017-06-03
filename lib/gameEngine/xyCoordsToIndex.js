module.exports = indexBasedOnCoords = function(x,y) {
    let adjX = x - 1;
    let adjY = y - 1;
    let index = adjX + (adjY * 3);
    return index;
}

