function createXmasTree(height, ornament) {

    const treeRows = []

    const maxRow = ornament.repeat((height - 1) * 2 + 1)

    for (let i = 0; i < height; i++) {
        const treeRow = ornament.repeat(i * 2 + 1)
        const spaceRow = '_'.repeat((maxRow.length - treeRow.length) / 2)
        treeRows.push(`${spaceRow}${treeRow}${spaceRow}`)
    }

    const treeBase = []
    const baseRow = '_'.repeat((maxRow.length - 1) / 2)
    treeBase.push(`${baseRow}#${baseRow}`, `${baseRow}#${baseRow}`)

    const finalTree = [...treeRows, ...treeBase]

    return finalTree.join('\n')
}