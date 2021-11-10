import { useState, useEffect } from "react"

import styles from '../../styles/components/Input.module.css'

import { useDispatch } from "react-redux"

import { getAddress } from '../../store/fetchActions'

export function Input(){
    const [cep, setCep] = useState('')

    const dispatch = useDispatch()

    function handleSubmit(e){
        e.preventDefault()
        dispatch(getAddress(cep))
    }

    useEffect(() => {
        if(cep.length === 8) dispatch(getAddress(cep))
        if(cep.length !== 8) dispatch({ type: 'DELETE_CEP' })
    }, [cep])

    return(
        <form className={styles.container} onSubmit={handleSubmit}>
            <input onChange={e=>setCep(e.target.value)} type="number" placeholder="CEP"/>
        </form>     
    )
}