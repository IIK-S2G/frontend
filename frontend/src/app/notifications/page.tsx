import Notifications from "./components/notifications"

const NotificationPage = (): JSX.Element => {

    return(
        <main className="grid place-items-center h-[92vh] mx-8">
            <div className="w-full">
                <Notifications/>
            </div>
        </main>
    )
}

export default NotificationPage