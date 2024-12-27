function decodeFilename(filename) {

    let result = filename.split('_').splice(1).join('_').split('.')

    if (result.length > 2) {
        result.pop()
    }

    return result.join('.')
}

console.log(decodeFilename('42_chimney_dimensions.pdf.hack2023'))