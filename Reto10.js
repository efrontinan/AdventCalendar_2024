function compile(instructions) {

    const results = {}
    let pointer = 0

    const actions = {
        MOV: (x, y) => results[y] = results[x] ?? x,
        INC: (x) => results[x] = ~~results[x] + 1,
        DEC: (x) => results[x] = ~~results[x] - 1,
        JMP: (x, y) => !results[x] && (pointer = y - 1),
    }

    while (pointer < instructions.length) {
        const actionArr = instructions[pointer].split(' ')
        actions[actionArr[0]]?.(actionArr[1], actionArr[2])

        pointer++
    }

    return results.A
}

const instructions = [
    'MOV -1 C', // copia -1 al registro 'C',
    'INC C', // incrementa el valor del registro 'C'
    'JMP C 1', // salta a la instrucción en el índice 1 si 'C' es 0
    'MOV C A', // copia el registro 'C' al registro 'a',
    'INC A' // incrementa el valor del registro 'a'
]

console.log(compile(instructions)) // -> 2