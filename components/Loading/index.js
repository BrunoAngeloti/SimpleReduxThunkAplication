import styles from '../../styles/components/Loading.module.css'
import ReactLoading from 'react-loading';

import { useSelector } from 'react-redux'

export function Loading(){
    const isShow = useSelector(state=>state.loading.showLoading);
    return(
        <span
            className={styles.container}
            style={{display: isShow ? 'flex' : 'none'}}
        >
             <ReactLoading type="spin" color='#FFF' height={100} width={100} />
        </span>
    )
}