const calcScore = ({solves, awards}: {solves: SolvesProps[], awards: AwardProps[]}) => {
    const ScoreMap = new Map()

    for (let i = 0; i < solves.length; i++) {
        ScoreMap.set(solves[i].date.slice(11,19), solves[i].challenge.value)
    }

    for (let i = 0; i < awards.length; i++) {
        ScoreMap.set(awards[i].date.slice(11,19), awards[i].value)
    }

    const ScoreArray = Array.from(ScoreMap)
    
    ScoreArray.sort((a,b) => {
        const first = a[0]
        const last = b[0]
        if (first < last) return -1
        if (first > last) return 1
        return 0
    })

    for (let i = 1; i < ScoreArray.length; i++) {
        ScoreArray[i][1] = ScoreArray[i-1][1] + ScoreArray[i][1]
    }

    const times = ScoreArray.map(pair => pair[0]);
    const points = ScoreArray.map(pair => pair[1]);

    return {times, points}
}

export default calcScore