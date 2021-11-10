import axios from 'axios'

export const getAddress = (props) =>{
    return async dispatch => {
        dispatch({ type: 'START_LOADING', payload: {showLoading: true} })
        const endereco = await axios.get('https://viacep.com.br/ws/' + props + '/json');
        dispatch({ type: 'START_LOADING', payload: {showLoading: false} })
        dispatch({ type: 'ADD_CEP', payload: endereco.data })
    }
}