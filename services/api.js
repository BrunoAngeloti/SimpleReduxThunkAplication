import axios from 'axios'

export default axios.create({
    baseURL: 'viacep.com.br/',
    timeout: 15000,
    headers: {'X-Custom-Header': 'foobar'}
})