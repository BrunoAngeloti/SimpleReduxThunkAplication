import { useState, useEffect } from "react"

import styles from '../../styles/components/Input.module.css'

import { useDispatch } from "react-redux"

import { getAddress } from '../../store/fetchActions'

const init = {
    logradouro: '',
    bairro: '',
    localidade: '',
    uf: ''
}

export function Input(){
    const [cep, setCep] = useState('')

    const dispatch = useDispatch()

    function handleSubmit(e){
        e.preventDefault()
        dispatch(getAddress(cep))
    }

    useEffect(() => {
        if(cep.length === 8) dispatch(getAddress(cep))
        if(cep.length === 0) dispatch({ type: 'DELETE_CEP', payload: init})
    }, [cep])

    return(
        <form className={styles.container} onSubmit={handleSubmit}>
            <input onChange={e=>setCep(e.target.value)} type="number" placeholder="CEP"/>
            <button type="submit">Enviar</button>
        </form>     
    )
}