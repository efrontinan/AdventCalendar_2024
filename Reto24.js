function isTreesSynchronized(tree1, tree2) {

    const areMirrors = (node1, node2) => {
        if (!node1 && !node2) return true
        if (!node1 || !node2 || node1.value !== node2.value) return false

        const leftAndRightAreMirrors = areMirrors(node1.left, node2.right)
        const rightAndLeftAreMirrors = areMirrors(node1.right, node2.left)

        return leftAndRightAreMirrors && rightAndLeftAreMirrors
    }

    const sync = tree1.value === tree2.value && areMirrors(tree1, tree2)

    return [sync, tree1.value]
}

const tree1 = {
    value: '🎄',
    left: { value: '⭐' },
    right: { value: '🎅' }
}

const tree2 = {
    value: '🎄',
    left: { value: '🎅' },
    right: { value: '⭐' },
}

console.log(isTreesSynchronized(tree1, tree2)) // [true, '🎄']