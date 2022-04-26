import { USER_ACTION_TYPES } from "./user.type"

const INTIAL_STATE = {
    users: [],
    searchValue:''
}



const userReducer = (state = INTIAL_STATE, action) => {
    switch (action.type) {
        case USER_ACTION_TYPES.GET_USERS:
            return{
                ...state,
                users: action.payload
                // users: monsters
            }
        case USER_ACTION_TYPES.SEARCH_USERNAME:
            return{
                ...state,
                searchValue: action.payload
                // searchValue: username
            }
            
        default:
            return state
    }
}

// Returning Object => {users: [], searchValue: ''} to Store

export default userReducer