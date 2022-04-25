// Axios for fetching api
import axios from 'axios'

import USER_ACTION_TYPES from "./user.type"

const INTIAL_STATE = {
    users: [],
    searchValue:''
}

const userReducer = (state = INTIAL_STATE, action) => {

    switch (action.type) {
        case USER_ACTION_TYPES.STORE_USERS:
            const monsters = axios.get('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(monsters => monsters)

            return {
                ...state,
                users: monsters
            }
            break;
        
        case USER_ACTION_TYPES.SEARCH_USER:
            return 
            break;


        default:
            return state
            break;
    }
}

export default userReducer