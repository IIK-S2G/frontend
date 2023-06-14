import UserHeader from "./components/header"
import Users from "./components/users"

const UsersPage = (): JSX.Element => {

    return(
        <main className="grid place-items-center h-[92vh] mx-8">
            <div className="w-full">
                <UserHeader/>
                <Users/>
            </div>
        </main>
    )
}

export default UsersPage