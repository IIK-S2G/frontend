import Link from "next/link";
import Image from "next/image";

const RightNav = (): JSX.Element => {
    return(
        <div className="flex items-center ml-96">
            <div className="inline-block flex mx-4">
                <h2 className="text-gray-500">
                    <Link className="flex" href="https://s2gctf.ncr.ntnu.no/play/admin/statistics">
                        <Image className="mt-[-2.5px]" width={30} height={30} src="/images/icons/wrench-white.png" alt="Wrench" />
                        Admin
                    </Link>
                </h2>
            </div>

            <div className="inline-block flex mx-4">
                <h2 className="text-gray-500">
                    <Link className="flex" href="https://s2gctf.ncr.ntnu.no/play/notifications">
                    <Image className="mt-[-2.5px]" width={30} height={30} src="/images/icons/bell-white.png" alt="Bell" />
                        Notifications
                    </Link>
                </h2>
            </div>

            <div className="inline-block flex mx-4">    
                <h2 className="text-gray-500">
                    <Link className="flex" href="https://s2gctf.ncr.ntnu.no/play/user">
                    <Image className="mt-[-2.5px]" width={30} height={30} src="/images/icons/profile-white.png" alt="Profile" />
                        Profile
                    </Link>
                </h2>
            </div>

            <div className="inline-block flex mx-4">
                <h2 className="text-gray-500">
                    <Link className="flex" href="https://s2gctf.ncr.ntnu.no/play/settings">
                    <Image className="mt-[-2.5px]" width={30} height={30} src="/images/icons/settings-white.png" alt="Settings" />
                        Settings
                    </Link>
                </h2>
            </div>

            <div className="inline-block">
                <Link className="flex" href="https://s2gctf.ncr.ntnu.no/play/logout">
                    <Image className="mt-[-2.5px]" width={30} height={30} src="/images/icons/logout-white.png" alt="Logout" />
                </Link>
            </div>
        </div>
    )
}

export default RightNav