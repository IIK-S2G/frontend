import Link from "next/link";
import LeftNav from "./LeftNav";
import RightNav from "./RightNav";
import ThemeSwitch from "../themeSwitch";

const Navbar = (): JSX.Element => {
    return(
        <nav className="bg-black p-4 flex justify-between h-[8vh] flex-col md:flex-row sticky top-0 h-50">
            <h1 className="text-3xl font-bold text-white grid place-content-center mb-2 md:mb-0 mt-[-5px]">
                <Link href="/">S2G</Link>
            </h1>
            <LeftNav/>
            <RightNav/>
            {/* <ThemeSwitch/> */}
        </nav>
    )
}

export default Navbar