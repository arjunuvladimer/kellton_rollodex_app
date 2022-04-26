import {createStore} from 'redux'
import { rootReducer } from './root-reducer'

const store = createStore(rootReducer)
// const store = createStore(userState:{ users: [], searchValue:''})

export default store