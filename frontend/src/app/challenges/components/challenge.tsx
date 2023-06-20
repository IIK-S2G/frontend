'use client'

import { useState } from "react"
import en from '../text/en.json'
import FormatDescription, { FlagFormat } from "./formatDescription"
import Attachments from "./attachments"

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
            {click && <ChallengeInfo challenge={challenge} solves={solves} handler={handleClick}/>}
        </>
    )
}

const ChallengeInfo = ({challenge, solves, handler}: {challenge: ChallengeProps | FullChallengeProps, solves: SolverProps[] | null, handler: () => void}) => {
    const [solvePage, showSolvePage] = useState(false)

    const Info = () => {

        const submitFlag = () => {
            // submit flag logic
        }

        // make this dynamic by fetch less under larger loads to reduce stress
        if (!('description' in challenge && 'decay' in challenge)) return (
            <div className="fixed top-0 left-0 w-full h-full grid place-items-center mt-1">
                <div className="h-[200px] w-[200px]">
                    <h1 className='bg-blue-200 text-center text-lg font-semibold'>{challenge.name}</h1>
                    <h1 className='text-center font-semibold'>{challenge.value}</h1>
                    <h1 className='text-center font-semibold'>{challenge.tags[0]}</h1>
                    <h1 className='text-center font-semibold'>Failed to load info. Retrying in 1 minute.</h1>
                </div>
            </div>
        )

        const flagformat = FlagFormat(challenge.description)

        return (
            <div className="fixed top-0 left-0 w-full h-full grid place-items-center mt-1">
                <div className="relative h-[420px] w-[360px] mt-8">
                    <h1 className='text-center text-2xl font-bold'>{challenge.name}</h1>
                    <h1 className='text-center font-bold'>{challenge.value}</h1>
                    <h1 className='grid items-center mx-auto text-center font-semibold bg-[#555] w-[160px] h-[20px] rounded-md text-xs mb-2 mt-1'>{challenge.tags[0]}</h1>
                    <FormatDescription string={challenge.description} />
                    <div className="flex absolute bottom-0 justify-between w-full">
                        <Attachments files={challenge.files}/>
                        <input className="bg-[#555] w-[210px] h-[35px] rounded-lg text-center" placeholder={flagformat}/>
                        <div className="grid items-center bg-[#228B22] h-[35px] rounded-lg w-[140px]">
                            <h1 className="text-center" onClick={submitFlag}>{en.submit}</h1>
                        </div>
                    </div>
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

        return(
            <div className="w-full h-[50px] grid grid-cols-2 items-center p-3">
                <div className="h-[30px] grid grid-cols-2 items-center">
                    <div className="text-center w-[90px] bg-[#228B22] rounded-md cursor-pointer" onClick={handleClick}>Challenge</div>
                    <div className="text-center w-[90px] bg-[#228B22] rounded-md ml-2" onClick={handleClick}>{`Solves ${solves ? solves.length : null}`}</div>
                </div>
                <div className=" text-right cursor-pointer" onClick={handler}>❌</div>
            </div>
        )
    }

    return(
        <div className="fixed top-0 left-0 w-full h-full grid place-items-center bg-[#00000050]" onClick={handler}>
            <div className="h-[500px] w-[400px] bg-[#222] flex justify-center rounded-2xl p-2">
                {solves && <Header/>}
                {!solvePage && <Info/>}
                {solvePage && <Solves/>}
            </div>
        </div>
    )
}

export default Challenge