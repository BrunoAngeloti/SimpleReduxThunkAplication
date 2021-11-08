import { createAction, createReducer } from "@reduxjs/toolkit"

const INITIAL_STATE = {
    logradouro: '',
    bairro: '',
    localidade: '',
    uf: ''
}

export const addCep = createAction('ADD_CEP')
export const deleteCep = createAction('DELETE_CEP')

export default createReducer(INITIAL_STATE,{
    [addCep.type]:(state, action) => action.payload,
    [deleteCep.type]:(state, action) => action.payload
    
})

