function inBox(box) {
    for (let i = 1; i < box.length - 1; i++) {
        const row = box[i];
        if (row[0] === '#' && row[row.length - 1] === '#' && row.includes('*')) {
            return true
        }
    }
    return false
}