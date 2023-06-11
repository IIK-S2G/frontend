import Link from "next/link";

const LeftNav = (): JSX.Element => {
    return(
        <div className="flex mr-50 items-center">
            <h2 className="text-gray-500 mx-4"><Link href="/resources">Resources</Link></h2>
            <h2 className="text-gray-500 mx-4"><Link href="https://s2gctf.ncr.ntnu.no/play/users">Users</Link></h2>
            <h2 className="text-gray-500 mx-4"><Link href="https://s2gctf.ncr.ntnu.no/play/scoreboard">Scoreboard</Link></h2>
            <h2 className="text-gray-500 mx-4"><Link href="https://s2gctf.ncr.ntnu.no/play/challenges">Challenges</Link></h2>
        </div>
    )
}

export default LeftNav