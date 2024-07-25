import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:4000',
    headers: {
        'Access-Control-Allow-Origin' : '*',
        'Control-Type': 'application/json',
    }
})

export default api;