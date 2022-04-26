import { USER_ACTION_TYPES } from "./user.type"

// GET USERS/MONSTERS
export const getUsers = (monsters) => {
    return(
        { // Object
            type:USER_ACTION_TYPES.GET_USERS, // Mandatory
            payload: monsters // Data => Optional
        }
    )
}

// SEARCH USER
export const searchUser = (username) => (
    {
        type: USER_ACTION_TYPES.SEARCH_USERNAME,
        payload: username
    }
)



// Returning Object 
// {type: 'type_of_action', payload:'data'} to Reducer