function execute(code) {
    let copyCode = [...code]
    let result = 0

    const actions = {
        '>': () => { },
        '+': () => result++,
        '-': () => result--,
        '[': () => {
            if (result === 0) copyCode = copyCode.slice(copyCode.indexOf(']') - 1)
        },
        ']': () => {
            result = 0
        },
        '{': () => {
            if (result === 0) copyCode = copyCode.slice(copyCode.indexOf('}'))
        },
        '}': () => { },
    }

    while (copyCode.length) actions[copyCode.shift()]()

    return result
}

console.log(execute('>+++[-]')) // 0
console.log(execute('>>>+{++}'))// 3
console.log(execute('+{[-]+}+')) // 2
console.log(execute('{+}{+}{+}'))// 0
console.log(execute('------[+]++')) // 2
console.log(execute('-[++{-}]+{++++}'))// 5