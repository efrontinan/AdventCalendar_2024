function findInAgenda(agenda, phone) {

    const kidList = agenda.split('\n')
    const foundKids = kidList.filter(elm => elm.includes(phone))

    if (foundKids.length === 1) {

        const regexPhone = /(?<phone>\+\d{1,3}-\d{3}-\d{3}-\d{3})/g
        const regexName = /<(?<name>[^>]+)>/g

        const { groups: phoneData } = regexPhone.exec(foundKids[0])
        const { groups: nameData } = regexName.exec(foundKids[0])

        const addressData = foundKids[0]
            .replace(regexPhone, '')
            .replace(regexName, '')
            .trim()

        return {
            name: nameData.name,
            address: addressData
        }
    }

    return null
}


const agenda = `+34-600-123-456 Calle Gran Via 12 <Juan Perez>
Plaza Mayor 45 Madrid 28013 <Maria Gomez> +34-600-987-654
<Carlos Ruiz> +1-800-555-0199 Fifth Ave New York`

console.log(findInAgenda(agenda, '600-987'))
// { name: "Juan Perez", address: "Calle Gran Via 12" }
