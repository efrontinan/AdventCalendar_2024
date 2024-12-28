function isRobotBack(moves) {

    let movesArr = moves.split('')
    let finalArr = []

    let finalPos = [0, 0]

    for (let i = 0; i < movesArr.length; i++) {

        switch (movesArr[i]) {
            case '*':
                finalArr.push(movesArr[i + 1])
                break
            case '!':
                if (movesArr[i + 1] === 'L') {
                    finalArr.push('R')
                    i++
                } else if (movesArr[i + 1] === 'R') {
                    finalArr.push('L')
                    i++
                } else if (movesArr[i + 1] === 'U') {
                    finalArr.push('D')
                    i++
                } else if (movesArr[i + 1] === 'D') {
                    finalArr.push('U')
                    i++
                }
                break
            case '?':
                if (movesArr[i + 1] === finalArr[finalArr.length - 1]) {
                    i++
                }
                break
            default:
                finalArr.push(movesArr[i])
        }

    }

    const directions = {
        L: () => finalPos[0]--,
        R: () => finalPos[0]++,
        U: () => finalPos[1]++,
        D: () => finalPos[1]--
    }

    for (let i = 0; i < finalArr.length; i++) {

        directions[finalArr[i]]()

    }

    if (finalPos[0] === 0 && finalPos[1] === 0) {
        return true
    }
    return finalPos
}

console.log(isRobotBack('UU!U?D'))