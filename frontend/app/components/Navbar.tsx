import Link from "next/link";
import LeftNav from "./LeftNav";
import RightNav from "./RightNav";

export default function Navbar() {
    return(
        <nav className="p-4 flex justify-between flex-col md:flex-row sticky top-0 drop-shadow-xl">
            <h1 className="text-3xl font-bold text-white grid place-content-center mb-2 md:mb-0 mt-[-5px]">
                <Link href="/">S2G</Link>
            </h1>
            <LeftNav/>
            <RightNav/>
        </nav>
    )
}