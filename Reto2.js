function createFrame(names) {

    const namesLength = names.map(elm => elm.length)
    const maxLength = Math.max(...namesLength)

    const border = '*'.repeat(maxLength + 4)

    const namesFormated = names.map(elm => {
        return `* ${elm}${' '.repeat(maxLength - elm.length)} *`
    })

    return [border, ...namesFormated, border].join('\n')
}