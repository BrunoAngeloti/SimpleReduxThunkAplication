import { createAction, createReducer } from "@reduxjs/toolkit"

const INITIAL_STATE = {
    showLoading: false
};

export const startLoading = createAction('START_LOADING')
export const stopLoading = createAction('STOP_LOADING')

export default createReducer(INITIAL_STATE,{
    [startLoading.type]:(state, action) => action.payload,
    [stopLoading.type]:(state, action) => action.payload
    
})

