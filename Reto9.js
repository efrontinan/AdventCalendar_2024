// function moveTrain(board, mov) {

//     let startPos = { y: undefined, x: undefined }
//     let finalPos
//     let finalElm

//     board.forEach((elm, idx) => {
//         if (elm.search('@') != -1) {
//             startPos.y = idx
//             startPos.x = elm.search('@')
//         }
//     })


//     switch (mov) {
//         case 'L':
//             finalPos = {
//                 y: startPos.y,
//                 x: startPos.x - 1
//             }

//             break
//         case 'R':
//             finalPos = {
//                 y: startPos.y,
//                 x: startPos.x + 1
//             }
//             break
//         case 'U':
//             finalPos = {
//                 y: startPos.y - 1,
//                 x: startPos.x
//             }
//             break
//         case 'D':
//             finalPos = {
//                 y: startPos.y + 1,
//                 x: startPos.x
//             }
//             break
//     }

//     if (
//         finalPos.y < 0 || finalPos.y >= board.length ||
//         finalPos.x < 0 || finalPos.x >= board[finalPos.y]?.length
//     ) {
//         return 'crash'

//     } else {
//         finalElm = board[finalPos.y][finalPos.x]
//     }

//     switch (finalElm) {
//         case undefined:
//         case 'o':
//             return 'crash'
//         case '*':
//             return 'eat'
//         default:
//             return 'none'
//     }

// }

function moveTrain(board, mov) {
    const directions = {
        U: (row, col) => board[row - 1]?.[col],
        D: (row, col) => board[row + 1]?.[col],
        R: (row, col) => board[row][col + 1],
        L: (row, col) => board[row][col - 1],
    };

    const flatBoard = board.join('')
    const trainHeadIndex = flatBoard.indexOf('@')

    const totalColumns = board[0].length
    const currentRow = Math.floor(trainHeadIndex / totalColumns)
    const currentColumn = trainHeadIndex % totalColumns

    const nextCell = directions[mov](currentRow, currentColumn)

    const results = {
        '*': 'eat',
        '·': 'none',
    }

    return results[nextCell] || 'crash'
}

const board = [
    '·····',
    '*····',
    '@····',
    'o····',
    'o····'
]

//   Recibirás dos parámetros board y mov.

// board es un array de strings que representa el tablero:

// @ es la locomotora del tren.
// o son los vagones del tren.
// * es una fruta mágica.
// · son espacios vacíos.
// mov es un string que indica el próximo movimiento del tren desde la cabeza del tren @:

// 'L': izquierda
// 'R': derecha
// 'U': arriba
// 'D': abajo.
// Con esta información, debes devolver una cadena de texto:

// 'crash': Si el tren choca contra los bordes del tablero o contra sí mismo.
// 'eat': Si el tren recoge una fruta mágica (*).
// 'none': Si avanza sin chocar ni recoger ninguna fruta mágica.

console.log(moveTrain(board, 'U'))
//   // ➞ 'eat'
//   // Porque el tren se mueve hacia arriba y encuentra una fruta mágica

console.log(moveTrain(board, 'D'))
//   // ➞ 'crash'
//   // El tren se mueve hacia abajo y la cabeza se choca consigo mismo

console.log(moveTrain(board, 'L'))
//   // ➞ 'crash'
//   // El tren se mueve a la izquierda y se choca contra la pared

console.log(moveTrain(board, 'R'))
//   // ➞ 'none'
//   // El tren se mueve hacia derecha y hay un espacio vacío en la derecha