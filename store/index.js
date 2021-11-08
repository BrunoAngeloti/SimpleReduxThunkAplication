import { configureStore } from '@reduxjs/toolkit'
import { createStore } from 'redux'


import reducer from './ducks/cep'

export default configureStore({
    reducer: reducer,
})

//export default createStore(reducer)