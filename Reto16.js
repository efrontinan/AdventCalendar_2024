function removeSnow(s) {
    const finalStr = [];

    for (const elm of s) {
        if (finalStr.at(-1) === elm) {
            finalStr.pop()
        } else {
            finalStr.push(elm)
        }
    }

    return finalStr.join('')
}

console.log(removeSnow('zxxzoz')) // -> "oz"
// 1. Eliminamos "xx", quedando "zzoz"
// 2. Eliminamos "zz", quedando "oz"