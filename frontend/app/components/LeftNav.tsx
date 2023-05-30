import Link from "next/link";

export default function LeftNav() {
    return(
        <div className="flex">
            <h2 className="text-gray-500 mx-4"><Link href="https://s2gctf.ncr.ntnu.no/play/resources">Resources</Link></h2>
            <h2 className="text-gray-500 mx-4"><Link href="https://s2gctf.ncr.ntnu.no/play/users">Users</Link></h2>
            <h2 className="text-gray-500 mx-4"><Link href="https://s2gctf.ncr.ntnu.no/play/scoreboard">Scoreboard</Link></h2>
            <h2 className="text-gray-500 mx-4"><Link href="https://s2gctf.ncr.ntnu.no/play/challenges">Challenges</Link></h2>
        </div>
    )
}