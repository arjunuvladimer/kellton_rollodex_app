import {createStore, applyMiddleware} from 'redux'
import { rootReducer } from './root-reducer'
import {logger} from 'redux-logger'

const store = createStore(rootReducer, applyMiddleware(logger))
// const store = createStore(userState:{ users: [], searchValue:''})

export default store