function fixGiftList(received, expected) {

    const giftsCount = {}

    received.forEach(elm => giftsCount[elm] = ~~giftsCount[elm] + 1)
    expected.forEach(elm => giftsCount[elm] = ~~giftsCount[elm] - 1)

    const result = {
        missing: {},
        extra: {}
    }

    Object.keys(giftsCount).forEach(elm => {
        if (giftsCount[elm] > 0) {
            result.extra[elm] = giftsCount[elm]
        } else if (giftsCount[elm] < 0) {
            result.missing[elm] = Math.abs(giftsCount[elm])
        }
    })

    return result
}

console.log(
    fixGiftList(['puzzle', 'car', 'doll', 'car'], ['car', 'puzzle', 'doll', 'ball'])
)

// Devuelve:
// {
//   missing: { ball: 1 },
//   extra: { car: 1 }
// }