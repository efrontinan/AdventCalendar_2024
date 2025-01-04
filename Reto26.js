function getCompleted(timeWorked, totalTime) {

    timeWorked = timeWorked.split(':').map(Number)
    totalTime = totalTime.split(':').map(Number)

    timeWorked = timeWorked[0] * 60 ** 2 + timeWorked[1] * 60 + timeWorked[2]
    totalTime = totalTime[0] * 60 ** 2 + totalTime[1] * 60 + totalTime[2]

    const workDone = (timeWorked / totalTime) * 100

    return `${Math.round(workDone)}%`
}

console.log(getCompleted('01:00:00', '03:00:00')) // 33%