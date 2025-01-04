function findMissingNumbers(nums) {

    const missingNums = []
    const stack = new Set()


    for (let i = 0; i < nums.length; i++) {
        stack.add(nums[i])
    }

    const orderedNums = nums.sort()

    for (let i = orderedNums.pop(); i > 0; i--) {
        if (!stack.has(i)) {
            missingNums.push(i)
        }
    }


    return missingNums.sort()
}

console.log(findMissingNumbers([1, 2, 4, 6]))
// [4]