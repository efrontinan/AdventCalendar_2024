function organizeInventory(inventory) {

    const finalInventory = {}

    for (let i = 0; i < inventory.length; i++) {
        const { name, category, quantity } = inventory[i]
        finalInventory[category] ||= {}
        finalInventory[category][name] = (finalInventory[category][name] || 0) + quantity
    }

    return finalInventory
}