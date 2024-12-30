function drawTable(data) {

    const headerData = Object.keys(data[0])

    const columnWidths = headerData.map(header =>
        Math.max(header.length, ...data.map((row) => `${row[header]}`.length)),
    )

    const separator = `+${columnWidths.map(elm => '-'.repeat(elm + 2)).join('+')}+`

    const finalHeader = `| ${headerData.map((header, idx) => {
        const capitalized = header.charAt(0).toUpperCase() + header.slice(1)
        return capitalized.padEnd(columnWidths[idx])
    }).join(' | ')} |`

    const rows = []

    data.forEach(elm => {
        rows.push(`| ${headerData.map((key, idx) =>
            `${elm[key]}`.padEnd(columnWidths[idx])).join(' | ')} |`)
    })

    const finalTable = [separator, finalHeader, separator, ...rows, separator]

    return finalTable.join('\n')
}

console.log(drawTable([
    { name: 'Alice', city: 'London' },
    { name: 'Bob', city: 'Paris' },
    { name: 'Charlie', city: 'New York' }
]))
// +---------+-----------+
// | Name    | City      |
// +---------+-----------+
// | Alice   | London    |
// | Bob     | Paris     |
// | Charlie | New York  |
// +---------+-----------+
