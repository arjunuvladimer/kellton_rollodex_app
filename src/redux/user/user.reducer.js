import { USER_ACTION_TYPES } from "./user.type"

const INTIAL_STATE = {
    users: [],
    searchValue: ''
}

const userReducer = (state = INTIAL_STATE, action) => {
    switch (action.type) {
        case USER_ACTION_TYPES.GET_USERS:
            return{
                users: action.payload
                // users: monsters
            }

        default:
            return state
    }
}

// Returning Object => {users: [], searchValue: ''} to Store

export default userReducer