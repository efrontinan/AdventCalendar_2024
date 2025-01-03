function distributeWeight(weight) {

    let remaining = weight

    const boxes = []

    const boxRepresentations = {
        1: [" _ ", "|_|"],
        2: [" ___ ", "|___|"],
        5: [" _____ ", "|     |", "|_____|"],
        10: [" _________ ", "|         |", "|_________|"]
    }

    const numbers = Object.keys(boxRepresentations).map(Number).reverse()

    findBiggestBox = (boxWeight) => {
        return numbers.find(number => boxWeight >= number)
    }

    while (remaining > 0) {
        const box = findBiggestBox(remaining)
        boxes.push(boxRepresentations[box])
        remaining -= box
    }

    for (let i = 0; i < boxes.length; i++) {
        if (boxes[i + 1]) {
            let lastBottom = boxes[i + 1][boxes[i + 1].length - 1]
            const addBottom = boxes[i][0]?.slice(0, lastBottom.length + 1)

            lastBottom = `${lastBottom?.trim()}${addBottom?.trim()}`

            boxes[i + 1][boxes[i + 1].length - 1] = lastBottom
            boxes[i].shift()

        }
    }

    const result = boxes.map(eachBox => eachBox.join('\n'))


    return result.reverse().join('\n')
}

console.log(distributeWeight(6))