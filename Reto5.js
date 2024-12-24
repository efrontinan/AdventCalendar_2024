function organizeShoes(shoes) {
    const pairShoes = {}
    const finalShoes = []

    shoes.forEach(({ type, size }) => {
        pairShoes[size] ??= { I: 0, R: 0 }

        pairShoes[size][type]++

        if (pairShoes[size].I > 0 && pairShoes[size].R > 0) {
            finalShoes.push(size)
            pairShoes[size].I--
            pairShoes[size].R--
        }
    })

    return finalShoes
}