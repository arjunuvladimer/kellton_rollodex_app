import { USER_ACTION_TYPES } from "./user.type"

// GET USERS/MONSTERS
const getUsers = (monsters) => {
    return(
        { // Object
            type:USER_ACTION_TYPES.GET_USERS, // Mandatory
            payload: monsters // Data => Optional
        }
    )
}

export default getUsers

// Returning Object 
// {type: 'type_of_action', payload:'data'} to Reducer