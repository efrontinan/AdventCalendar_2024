function drawRace(indices, length) {

    let result = []

    indices.forEach((elm, idx) => {

        const space = ' '.repeat(indices.length - 1 - idx)

        const horseLane = '~'.repeat(length).split('')

        if (elm != 0) {
            horseLane.splice(elm, 1, 'r')
        }

        result.push(`${space}${horseLane.join('')} /${idx + 1}`)
    })


    return result.join('\n')
}
