import getUserPages from "./getUserPages"
import getUsers from "./getUsers"

/**
 * Fetches all users and sorts them alphabeticly
 * @returns Array of user objects
 */
const getAllUsers = async(): Promise<UserListProps[]> => {
    const pages = await getUserPages()

    const promises = Array.from({ length: pages }, (_, i) =>
        getUsers({ page: i + 1 })
    );

    const users = (await Promise.all(promises)).flat();

    return users.sort((a, b) => a.name.localeCompare(b.name))
}

export default getAllUsers