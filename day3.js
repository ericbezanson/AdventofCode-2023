const input = `
467..114..
...*......
..35..633.
......#...
617*......
.....+.58.
..592.....
......755.
...$.*....
.664.598..
`
const directions = ["N", "NE", "E", "SE", "S", "SW", "W", "NW"]
let partNumberSum = 0

function moveInDirection(y, x, direction) {
    switch (direction) {
        case 'N':
            return [y - 1, x];
        case 'W':
            return [y, x - 1];
        case 'E':
            return [y, x + 1];
        case 'S':
            return [y + 1, x];
        case 'NW':
            return [y - 1, x - 1];
        case 'NE':
            return [y - 1, x + 1];
        case 'SW':
            return [y + 1, x - 1];
        case 'SE':
            return [y + 1, x + 1];
        default:
            throw new Error(
                'Invalid direction for moveInDirection. Valid directions are N, W, E, S, NW, NE, SW, SE'
            );
    }
}

function traverseSchematic(inputGrid) {
    for (let y = 0; y < inputGrid.length; y++) {
        for (let x = 0; x < inputGrid[y].length; x++) {
            if (symbolFound(inputGrid[y][x])) {
                for (let d = 0; d < directions.length; d++) {
                    // look around in all directions
                    lookAround(y, x, directions[d])
                }
            }
        }
    }
}

function lookAround(yPosition, xPosition, direction) {
    // check numbers that are one space away from special character in any direction
    // if found record that number sequence.
    const newCoordinates = moveInDirection(yPosition, xPosition, direction)
    if (partNumberFound(inputGrid[newCoordinates[0]][newCoordinates[1]])) {
        completePartNumber(newCoordinates[0], newCoordinates[1])
    }
}

function completePartNumber(y, x) {

    let partNumber = []

    partNumber.pop(inputGrid[y][x])
    console.log("INITIAL PART NUM FOUND", inputGrid[y][x])
    // look left
    let xLeft = x - 1
    while (partNumberFound(inputGrid[y][xLeft])) {
        partNumber.unshift(inputGrid[y][xLeft])
        xLeft = xLeft - 1
    }

    // look right
    let xRight = x + 1
    while (partNumberFound(inputGrid[y][xRight])) {
        partNumber.push(inputGrid[y][xRight])
        xRight = xRight + 1
    }
    console.log("PART NUMBER", partNumber)
}

function symbolFound(inputString) {
    return /[^0-9.]/.test(inputString);
}

function partNumberFound(inputString) {
    return /\d/.test(inputString);
}

const inputArray = input.split('\n').filter(Boolean);
const inputGrid = inputArray.map(word => word.split(''));


traverseSchematic(inputGrid)