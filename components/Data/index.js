import styles from '../../styles/components/Data.module.css'

import { useSelector } from 'react-redux'

export function Data(){

    const {logradouro, bairro, localidade, uf} = useSelector(state=>state.cep);

    return(
        <section className={styles.container}>
            <div>   
                <label>Rua</label>
                <input value={logradouro} disabled placeholder="Rua" />
            </div>  
            <div>   
                <label>Bairro</label>
                <input value={bairro} disabled placeholder="Bairro" />
            </div>         
            <div>   
                <label>Cidade</label>
                <input value={localidade} disabled placeholder="Cidade" />
            </div> 
            <div>   
                <label>Estado</label>
                <input value={uf} disabled placeholder="Estado" />
            </div>           
        </section>
    )
}