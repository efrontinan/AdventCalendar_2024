function generateGiftSets(gifts) {
    const results = []

    const backtracking = (start, currentSet) => {

        if (currentSet.length > 0) {
            results.push([...currentSet])
        }

        for (let i = start; i < gifts.length; i++) {
            currentSet.push(gifts[i])
            backtracking(i + 1, currentSet)
            currentSet.pop()
        }

    }

    backtracking(0, [])

    return results.sort((a, b) => a.length - b.length)
}


console.log(generateGiftSets(['car', 'doll', 'puzzle']))
// [
//   ['car'],
//   ['doll'],
//   ['puzzle'],
//   ['car', 'doll'],
//   ['car', 'puzzle'],
//   ['doll', 'puzzle'],
//   ['car', 'doll', 'puzzle']
// ]