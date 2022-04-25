import USER_ACTION_TYPES from "./user.type"

const storeUsers = () => (
    {
        type: USER_ACTION_TYPES.STORE_USERS
    }
)

const searchUser = (userName) => (
    {
        type: USER_ACTION_TYPES.SEARCH_USER,
        payload: userName
    }
)

