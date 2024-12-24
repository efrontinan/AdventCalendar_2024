function fixPackages(packages) {
    const stack = []
    let result = packages.split('')

    for (let i = 0; i < result.length; i++) {
        if (result[i] === '(') {
            stack.push(i)
            console.log('stack', stack)
        } else if (result[i] === ')') {
            const openIndex = stack.pop()
            const reversed = result.slice(openIndex + 1, i).reverse()
            result.splice(openIndex, i - openIndex + 1, ...reversed)
            i = openIndex + reversed.length - 1
        }
    }

    return result.join('').replace(/\(|\)/g, "")
}

console.log(fixPackages('abc(def(gh)i)jk'))