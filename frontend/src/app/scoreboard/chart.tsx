import LineChart from '@/components/lineChart';
import getAwards from '@/utils/awards/getAwards';
import calcScore from '@/utils/scoreboard/calcScore';
import getScoreboard from '@/utils/scoreboard/getScoreboard';
import getSolves from '@/utils/solves/getSolves';

const Chart = async(): Promise<JSX.Element> => {
    const scoreboard = await getScoreboard()

    if (scoreboard) {
        const dataset: number[][] = []
        const labels: string[][] = []
        const names: string[] = []

        scoreboard.forEach(async(user) => {
            const solves = await getSolves(undefined, user.account_id)
            const awards = await getAwards(user.account_id)

            if (solves && awards) {
                const ScoreArray = calcScore({solves, awards})
                names.push(user.name)
                dataset.push(ScoreArray.points)
                labels.push(ScoreArray.times)
            }
        })

        return <LineChart className='w-[80%] mb-5' dataset={dataset} labels={labels} label={names}/>
    }

    return <div/>
}

export default Chart