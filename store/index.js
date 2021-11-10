import { configureStore } from '@reduxjs/toolkit'
import { createStore,combineReducers } from 'redux'


import cepReducer from './ducks/cep'
import loadingReducer from './ducks/loading'

const rootReducer = combineReducers({
    cep: cepReducer,
    loading: loadingReducer
})

export default configureStore({
    reducer: rootReducer,
})

//export default createStore(reducer)