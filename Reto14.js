function minMovesToStables(reindeer, stables) {

    const moves = []

    reindeer.sort()
    stables.sort()

    for (let i = reindeer.length - 1; i >= 0; i--) {

        const movement = Math.abs(reindeer[i] - stables.pop())

        moves.push(movement)
        console.log(moves)
    }

    return moves.reduce((acc, eachNumber) => acc + eachNumber)
}

console.log(minMovesToStables([1, 1, 3], [1, 8, 4]))