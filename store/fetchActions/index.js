import axios from 'axios'

export const getAddress = (props) =>{
    return async dispatch => {
        const endereco = await axios.get('https://viacep.com.br/ws/' + props + '/json');
        dispatch({ type: 'ADD_CEP', payload: endereco.data })
    }
}