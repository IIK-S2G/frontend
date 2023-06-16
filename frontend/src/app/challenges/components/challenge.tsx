'use client'

import { useState } from "react"

const Challenge = ({challenge, solves}: {challenge: ChallengeProps | FullChallengeProps, solves: SolverProps[] | null}) => {
    const [click, setClick] = useState(false)
    const challengeColor = challenge.solved_by_me ? 'bg-green-500':'bg-[#191919]'

    const handleClick = () => {
        setClick(!click)
    }

    return(
        <>
            <main className="grid place-items-center mx-4 mb-8 cursor-pointer" onClick={handleClick}>
                <div className={`grid place-items-center ${challengeColor} h-[100px] w-[338px] rounded-lg`}>
                    <h1 className='text-lg font-semibold'>{challenge.name}</h1>
                    <h1 className='font-semibold'>{challenge.value}</h1>
                </div>
            </main>
            {/* {click && <ChallengeInfo challenge={challenge} solves={solves} handler={handleClick}/>} */}
        </>
    )
}

const ChallengeInfo = async({challenge, solves, handler}: {challenge: ChallengeProps | FullChallengeProps, solves: SolverProps[] | null, handler: () => void}) => {
    const [solvePage, showSolvePage] = useState(false)

    const Info = () => {
        // make this dynamic by fetch less under larger loads to reduce stress
        if (!('description' in challenge)) return (
            <div className="fixed top-0 left-0 w-full h-full grid place-items-center">
                <div className="h-[200px] w-[200px] bg-red-400">
                    <h1 className='text-lg font-semibold'>{challenge.name}</h1>
                    <h1 className='font-semibold'>{challenge.value}</h1>
                    <h1 className='font-semibold'>{challenge.tags[0].value}</h1>
                    <h1 className='font-semibold'>Failed to load info. Retrying in 1 minute.</h1>
                </div>
            </div>
        )

        return (
            <div className="fixed top-0 left-0 w-full h-full grid place-items-center">
                <div className="h-[200px] w-[200px] bg-red-400">
                    <h1 className='text-lg font-semibold'>{challenge.name}</h1>
                    <h1 className='font-semibold'>{challenge.value}</h1>
                    <h1 className='font-semibold'>{challenge.tags[0].value}</h1>
                    <h1 className='font-semibold'>{challenge.description}</h1>
                </div>
            </div>
        )
    }

    const Solves = () => {
        if (!solves) return(<div>Failed to load solves... Retrying in 1 minute.</div>)

        return (
            <div className="fixed top-0 left-0 w-full h-full grid place-items-center" onClick={handler}>
                    {solves.map((solve) => {
                        return (
                            <div className="h-[200px] w-[200px] bg-red-400 grid grid-cols-2 text-center">
                                <h1 className='text-lg font-semibold'>{solve.name}</h1>
                                <h1 className='text-lg font-semibold'>{solve.name.slice(11,19)}</h1>
                            </div>
                        )
                    })}
            </div>
        )
    }

    const Header = () => {

        const handleClick = () => {
            showSolvePage(!solvePage)
        }

        const SolvePage = () => {
            return (
                <div className="w-1/2" onClick={handleClick}>
                    {`Solves ${solves ? solves.length : null}`}
                </div>
            )
        }

        return(
            <div className="bg-red-200 w-full h-[30px]">
                <div className="w-1/2" onClick={handleClick}>
                    Challenge
                </div>
                <SolvePage/>
                <div onClick={handler}>
                    Cross
                </div>
            </div>
        )
    }

    return(
        <div className="fixed top-0 left-0 w-full h-full grid place-items-center" onClick={handler}>
            <div className="h-[200px] w-[200px] bg-red-400">
                {solves && solves.length && <Header/>}
                {!solvePage && <Info/>}
                {solvePage && <Solves/>}
            </div>
        </div>
    )
}

export default Challenge