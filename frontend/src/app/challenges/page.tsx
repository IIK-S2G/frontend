import en from "./text/en.json"
import Challenges from "./components/challenges"

const ChallengePage = async() => {

    return(
        <main className="grid place-items-center h-[92vh]">
            <div>
                <Challenges/>
            </div>
        </main>
    )
}

export default ChallengePage